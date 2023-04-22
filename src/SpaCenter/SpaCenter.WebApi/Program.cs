using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using SpaCenter.API.Mapsters;
using SpaCenter.Core.Entities;
using SpaCenter.WebApi.Endpoints;
using SpaCenter.WebApi.Extensions;
using SpaCenter.WebApi.Validations;

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

	app.Run();
	// 
}