using SpaCenter.WebApi.Models;

namespace SpaCenter.WebApi.Endpoints
{
    public static class ServiceEndpoints
    {
        public static WebApplication MapServiceEndpoints(this WebApplication app)
        {
            var routeGroupBuilder = app.MapGroup("/api/service");
            routeGroupBuilder.MapGet("/", GetService)
                            .WithName("GetService")
                            .Produces(404)
                            .Produces<ApiResponse<string>>();
            //routeGroupBuilder.MapPost("/Logout", Logout)
            //                .WithName("Logout")
            //                .Produces(404)
            //                .Produces<ApiResponse>()
            //                .RequireAuthorization("Admin");
            //routeGroupBuilder.MapPost("/Register", SignUp)
            //                .WithName("Register")
            //                .Produces(404)
            //                .Produces<ApiResponse>();
            return app;

        }

        private async static Task<IResult>GetService()
        {
            return Results.Ok(ApiResponse.Success("ghghgf"));
        }
    }
}
