using SpaCenter.API.Mapsters;
using SpaCenter.WebApi.Endpoints;
using SpaCenter.WebApi.Extensions;

var builder = WebApplication.CreateBuilder(args);
{
	// add service to container
	builder.ConfigureCors()
		//.ConfigureNLog()
		.ConfigureServices()
		.ConfigureMapster()
		.ConfigureSwaggerOpenApi();
		//.ConfigureFluentValidation();


}


var app = builder.Build();
{
	// config the http request pipeline
	app.SetUpRequestPipeline();
	app.UseDataSeeder();



	// config API endpoints
	app.MapRoleEndpoints();

	app.Run();
	// 
}