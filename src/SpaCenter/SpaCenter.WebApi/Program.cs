using SpaCenter.WebApi.Extensions;

var builder = WebApplication.CreateBuilder(args);
{
    builder
        .ConfigureCors()
        .ConfigureServices()
        .ConfigureSwaggerOpenApi();
}

var app = builder.Build();
{
    app.SetupRequestPipeline();
    
    app.Run();
}
