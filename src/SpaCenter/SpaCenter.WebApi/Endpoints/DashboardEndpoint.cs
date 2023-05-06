using SpaCenter.Bookings.Manages.Bookings;
using SpaCenter.Services.Manages.Services;
using SpaCenter.Services.Manages.ServiceTypes;
using SpaCenter.Services.Manages.Supports;
using SpaCenter.Services.Manages.Users;
using SpaCenter.WebApi.Models;
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
			IUserRepository userRepository,
			ISupportRepository supportRepository,
			IServiceTypeRepository serviceTypeRepository,
			IServiceRepository serviceRepository,
			IBookingRepository bookingRepository

			)
		{
			var result = new DashboardModel()
			{
				CountUser = await userRepository.CountUserAsync(),
				CountCustomerSupport = await supportRepository.CountNeedSupportCustomer(),
				CountServiceType = await serviceTypeRepository.CountServiceTypeAsync(),
				CountService = await serviceRepository.CountTotalServiceAsync(),
				CountBooking = await bookingRepository.CountTotalBookingAsync()
			
			};

			return Results.Ok(ApiResponse.Success(result));
		}

	}
}
