using SpaCenter.Core.Collections;
using SpaCenter.Core.DTO;
using SpaCenter.Services.Manages.Roles;
using SpaCenter.WebApi.Models;

namespace SpaCenter.WebApi.Endpoints;

public static class RoleEndpoint 
{
	public static WebApplication MapRoleEndpoints(this WebApplication app)
	{
		var routeGroupBuilder = app.MapGroup("/api/roles");

		// get department not required
		routeGroupBuilder.MapGet("/notpaging", GetRoleNotRequired)
			.WithName("GetRoleNotRequired")
			.Produces<ApiResponse<PaginationResult<RoleItem>>>();


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



}
