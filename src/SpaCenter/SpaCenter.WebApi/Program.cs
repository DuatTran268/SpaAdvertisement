using SpaCenter.Data.Contexts;
using SpaCenter.Data.Seeders;
using SpaCenter.WebApi.Endpoints;
using SpaCenter.WebApi.Extensions;
using SpaCenter.WebApi.Mapsters;

var builder = WebApplication.CreateBuilder(args);
{
    builder
        .ConfigureCors()
        .ConfigureServices()
        .ConfigureSwaggerOpenApi()
        .ConfigureMapster();
        //.ConfigureAuthentication();
}

var app = builder.Build();
{
    app.SetupRequestPipeline();

    //Configure API endpoits 
    app.MapProductEndpoints();
    app.MapServiceEndpoints();
    
    app.Run();
}

var context = new SpaDbContext();

var seeder = new DataSeeder(context);

seeder.Initialize();
