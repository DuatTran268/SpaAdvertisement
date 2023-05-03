using SpaCenter.API.Mapsters;
using SpaCenter.WebApi.Endpoints;
using SpaCenter.WebApi.Extensions;
using SpaCenter.WebApi.Validations;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
{
    // add service to container
    builder.ConfigureCors()
        .ConfigureServices()
        .ConfigureMapster()
        .ConfigureSwaggerOpenApi()
        .ConfigureFluentValidation();
    //.ConfigureNLog()
}


var app = builder.Build();
{
    // config the http request pipeline
    app.SetUpRequestPipeline();
    app.UseDataSeeder();


    // config API endpoints
    app.MapRoleEndpoints();
    app.MapUserEndpoint();
    app.MapServiceEndpoints();
    app.MapServiceTypeEndpoints();
    app.MapSuportEndpoint();
    app.MapBookingEndpoints();
    app.MapSTypeBookingEndpoints();

    app.Run();
    //
}