using SpaCenter.Core.DTO;
using SpaCenter.Services.Manages.Users;
using SpaCenter.WebApi.Models;

namespace SpaCenter.WebApi.Endpoints;

public static class UserEndpoint
{
	public static WebApplication MapUserEndpoint(this WebApplication app)
	{
		var routeGroupBuilder = app.MapGroup("/api/users");

		routeGroupBuilder.MapGet("/", GetUserNotRequired)
			.WithName("GetUserNotRequired")
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
}
