using MapsterMapper;
using SpaCenter.Core.Collections;
using SpaCenter.Core.DTO;
using SpaCenter.Services.Manages.Roles;
using SpaCenter.WebApi.Models;
using System.Net;

namespace SpaCenter.WebApi.Endpoints;

public static class RoleEndpoint 
{
	public static WebApplication MapRoleEndpoints(this WebApplication app)
	{
		var routeGroupBuilder = app.MapGroup("/api/roles");

		// get department not required
		routeGroupBuilder.MapGet("/", GetRoleNotRequired)
			.WithName("GetRoleNotRequired")
			.Produces<ApiResponse<PaginationResult<RoleItem>>>();

		// get role by id 
		routeGroupBuilder.MapGet("/{id:int}", GetRoleById)
			.WithName("GetRoleById")
			.Produces<ApiResponse<RoleItem>>();



		return app;
	}

	// get role not required
	private static async Task<IResult> GetRoleNotRequired(
		IRoleRepositoty roleRepositoty
		)
	{
		var roleList = await roleRepositoty.GetRoleNotRequired();
		return Results.Ok(ApiResponse.Success(roleList));
	}

	// get role by id
	private static async Task<IResult> GetRoleById(
			int id, IRoleRepositoty roleRepositoty, IMapper mapper
			)
	{
		var author = await roleRepositoty.GetCachedRoleByIdAsync(id);
		return author == null
			? Results.Ok(ApiResponse.Fail(
				HttpStatusCode.NotFound, $"Không tìm thấy  role có mã số {id}"))
			: Results.Ok(ApiResponse.Success(mapper.Map<RoleItem>(author)));

	}



}
