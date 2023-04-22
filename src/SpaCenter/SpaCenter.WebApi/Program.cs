using SpaCenter.WebApi.Extensions;

var builder = WebApplication.CreateBuilder(args);
{
	// add service to container
	builder.ConfigureCors()
		//.ConfigureNLog()
		.ConfigureServices()
		.ConfigureSwaggerOpenApi();
		//.ConfigureMapster()
		//.ConfigureFluentValidation();


}


var app = builder.Build();
{
	// config the http request pipeline
	app.SetUpRequestPipeline();

	app.UseDataSeeder();
	// config API endpoints
	
	app.Run();
	// 
}