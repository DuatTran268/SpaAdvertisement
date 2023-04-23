﻿using MapsterMapper;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.Services.Manages.Roles;
using SpaCenter.Services.Manages.Users;
using SpaCenter.WebApi.Filters;
using SpaCenter.WebApi.Models;
using SpaCenter.WebApi.Models.Users;
using System.Net;

namespace SpaCenter.WebApi.Endpoints;

public static class UserEndpoint
{
	public static WebApplication MapUserEndpoint(this WebApplication app)
	{
		var routeGroupBuilder = app.MapGroup("/api/users");

		routeGroupBuilder.MapGet("/", GetUserNotRequired)
			.WithName("GetUserNotRequired")
			.Produces<ApiResponse<UserItem>>();

		routeGroupBuilder.MapGet("/{id:int}", GetUserById)
			.WithName("GetUserById")
			.Produces<ApiResponse<UserItem>>();

		routeGroupBuilder.MapPost("/", CreateUserAsync)
			.WithName("CreateUserAsync")
			.AddEndpointFilter<ValidatorFilter<UserEditModel>>()
			.Produces(401)
			.Produces<ApiResponse<UserItem>>();

		routeGroupBuilder.MapPut("/{id:int}", UpdateUserAsync)
			.WithName("UpdateUserAsync")
			.AddEndpointFilter<ValidatorFilter<UserEditModel>>()
			.Produces(401)
			.Produces<ApiResponse<UserDto>>();

		return app;

	}

	// get use not required
	private static async Task<IResult> GetUserNotRequired(
		IUserRepository userRepository)
	{
		var userList = await userRepository.GetUserNotRequired();
		return Results.Ok(ApiResponse.Success(userList));
	}

	// get user by id
	private static async Task<IResult> GetUserById(
		int id, IUserRepository userRepository, IMapper mapper)
	{
		var user = await userRepository.GetCachedUserByIdAsync(id);
		return user == null
			? Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound, $"Không tìm thấy user id = {id}"))
			: Results.Ok(ApiResponse.Success(mapper.Map<UserItem>(user)));
	}

	// create new user
	private static async Task<IResult> CreateUserAsync(
		UserEditModel model, IUserRepository userRepository, IMapper mapper
		)
	{
		if (await userRepository.CheckSlugExistedAsync(0, model.UrlSlug))
		{
			return Results.Ok(ApiResponse.Fail(HttpStatusCode.Conflict, $"Slug '{model.UrlSlug}' đã được sử dụng"));
		}

		var user = mapper.Map<User>(model);
		await userRepository.CreateOrUpdateUserAsync(user);

		return Results.Ok(ApiResponse.Success(mapper.Map<UserItem>(user), HttpStatusCode.Created));
	}

	// update user
	private static async Task<IResult> UpdateUserAsync(
		int id, UserEditModel model, 
		IUserRepository userRepository, 
		IRoleRepositoty roleRepositoty,
		IMapper mapper)
	{
		var user = await userRepository.GetUserByIdAsync(id);
		if (user == null)
		{
			return Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound, 
				$"Không tìm thấy id '{id}' của user"));
		}
		if (await roleRepositoty.GetRoleByIdAsync(model.RoleId) == null)
		{
			return Results.Ok(ApiResponse.Fail(HttpStatusCode.Conflict,
				$"Không tìm thấy role có id '{model.RoleId}'"));
		}
		if (await userRepository.CheckSlugExistedAsync(0, model.UrlSlug))
		{
			return Results.Ok(ApiResponse.Fail(HttpStatusCode.Conflict, 
				$"Slug '{model.UrlSlug}' đã được sử dụng"));
		}

		mapper.Map(model, user);
		user.Id = id;

		return await userRepository.CreateOrUpdateUserAsync(user)
			? Results.Ok(ApiResponse.Success($"Thay đổi thành công user có id = {id}"))
			: Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound, $"Không tìm thấy user có id {id}")); 


	}
}
