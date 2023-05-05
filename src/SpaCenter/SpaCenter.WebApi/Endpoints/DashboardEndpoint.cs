using SpaCenter.Bookings.Manages.Bookings;
using SpaCenter.Services.Manages.Users;
using SpaCenter.WebApi.Models.Dashboards;

namespace SpaCenter.WebApi.Endpoints
{
	public static class DashboardEndpoint
	{
		public static WebApplication MapDashboardEndpoints(this WebApplication app)
		{
            var routeGroupBuilder = app.MapGroup("/api/dashboard");
			routeGroupBuilder.MapGet("/", GetInforDashboard)
				.WithName("GetInforDashboard")
				.Produces<DashboardModel>();

			return app;
		}

		private static async Task<IResult> GetInforDashboard(
			IUserRepository userRepository
			)
		{
			var result = new DashboardModel()
			{
				CountUser = await userRepository.CountUserAsync()
			};

			return Results.Ok(result);
		}

	}
}
