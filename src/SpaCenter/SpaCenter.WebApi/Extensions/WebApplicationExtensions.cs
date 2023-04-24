﻿using Microsoft.EntityFrameworkCore;
using SpaCenter.Data.Contexts;
using SpaCenter.Data.Seeders;
using SpaCenter.Services.Manages.Roles;
<<<<<<< HEAD
using SpaCenter.Services.Manages.Services;
=======
using SpaCenter.Services.Manages.Users;
>>>>>>> f56841d4a1268554318c6a6b0eb418906236845b
using SpaCenter.Services.Media;
using TatBlog.Services.Timing;

namespace SpaCenter.WebApi.Extensions
{
	public static class WebApplicationExtensions
	{
		public static WebApplicationBuilder ConfigureServices(this WebApplicationBuilder builder)
		{
			builder.Services.AddMemoryCache();

			builder.Services.AddDbContext<SpaDbContext>(options => options.UseSqlServer(
				builder.Configuration.GetConnectionString("DefaultConnection"
				)));

			builder.Services.AddScoped<IDataSeeder, DataSeeder>();
			builder.Services.AddScoped<ITimeProvider, LocalTimeProvider>();
			builder.Services.AddScoped<IMediaManager, LocalFileSystemMediaManager>();
			
			
			// remember add scoped
			builder.Services.AddScoped<IRoleRepositoty, RoleRepository>();
<<<<<<< HEAD
			builder.Services.AddScoped<IServiceRepository, ServiceRepository>();
=======
			builder.Services.AddScoped<IUserRepository, UserRepository>();
>>>>>>> f56841d4a1268554318c6a6b0eb418906236845b



			builder.Services.AddScoped<IDataSeeder, DataSeeder>();

			return builder;
		}

		public static WebApplicationBuilder ConfigureCors(this WebApplicationBuilder builder)
		{
			builder.Services.AddCors(options =>
			{
				options.AddPolicy("SpaCenterApp",
					policyBuilder => policyBuilder
					.AllowAnyOrigin()
					.AllowAnyHeader()
<<<<<<< HEAD
					.AllowAnyMethod());
=======
					.AllowAnyMethod()
					);
>>>>>>> f56841d4a1268554318c6a6b0eb418906236845b
			});

			return builder;
		}

		public static WebApplicationBuilder ConfigureSwaggerOpenApi(this WebApplicationBuilder builder)
		{
			builder.Services.AddEndpointsApiExplorer();
			builder.Services.AddSwaggerGen();
			return builder;
		}

		public static WebApplication SetUpRequestPipeline(this WebApplication app)
		{
			if (app.Environment.IsDevelopment())
			{
				app.UseSwagger();
				app.UseSwaggerUI();

			}

			app.UseStaticFiles();
			app.UseHttpsRedirection();
			app.UseCors("SpaCenterApp");

			return app;

		}

		public static IApplicationBuilder UseDataSeeder(
	   this IApplicationBuilder app)
		{
			using var scope = app.ApplicationServices.CreateScope();
			try
			{
				scope.ServiceProvider
				  .GetRequiredService<IDataSeeder>()
				  .Initialize();
			}
			catch (Exception ex)
			{
				scope.ServiceProvider
					.GetRequiredService<ILogger<Program>>()
					.LogError(ex, "Could not insert data into database");
			}
			return app;
		}
	}
}