using SpaCenter.Bookings.Manages.Bookings;
using SpaCenter.WebApi.Models.Dashboards;

namespace SpaCenter.WebApi.Endpoints
{
	public static class DashboardEndpoint
	{
		public static WebApplication MapDashboardEndpoints(this WebApplication app)
		{
            var routeGroupBuilder = app.MapGroup("/api/services");
			routeGroupBuilder.MapGet("/", GetInforDashboard)
				.WithName("GetInforDashboard")
				.Produces<DashboardModel>();

			return app;
		}

		private static async Task<IResult> GetInforDashboard(
			)
		{
			var result = new DashboardModel()
			{

			};

			return Results.Ok(result);
		}

	}
}
