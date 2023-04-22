using MapsterMapper;
using SpaCenter.Core.DTO;
using SpaCenter.Services.Manages.Users;
using SpaCenter.WebApi.Models;
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
}
