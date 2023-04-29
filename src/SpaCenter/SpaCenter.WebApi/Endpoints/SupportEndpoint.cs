using SpaCenter.Core.DTO;
using SpaCenter.Services.Manages.Supports;
using SpaCenter.WebApi.Models;

namespace SpaCenter.WebApi.Endpoints
{
	public static class SupportEndpoint
	{
		public static WebApplication MapSuportEndpoint(this WebApplication app)
		{
			var routeGroupBuilder = app.MapGroup("/api/supports");

			routeGroupBuilder.MapGet("/", GetSupportNotRequired)
			.WithName("GetSupportNotRequired")
			.Produces<ApiResponse<SupportItem>>();


			return app;
		}


		// get not required
		private static async Task<IResult> GetSupportNotRequired(
			ISupportRepository supportRepository)
		{
			var supportList = await supportRepository.GetSupportNotRequired();
			return Results.Ok(ApiResponse.Success(supportList));
		}

		

	}
}
