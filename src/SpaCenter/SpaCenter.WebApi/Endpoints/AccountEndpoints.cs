using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using NuGet.Configuration;
using NuGet.Protocol.Plugins;
using SpaCenter.Services.Spas;
using SpaCenter.WebApi.Models;
using System.Net;

namespace SpaCenter.WebApi.Endpoints
{
    public static class AccountEndpoints
    {
        public static WebApplication MapAccountEndpoints(
            this WebApplication app)
        {
            var routeGroupBuilder = app.MapGroup("/api/account");
            //routeGroupBuilder.MapPost("/Login", SignIn)
            //                .WithName("Login")
            //                .Produces(404)
            //                .Produces<ApiResponse<string>>();
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

    }
}
