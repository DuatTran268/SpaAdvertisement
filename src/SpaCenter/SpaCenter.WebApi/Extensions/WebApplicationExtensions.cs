using Microsoft.EntityFrameworkCore;
using SpaCenter.Data.Contexts;
using SpaCenter.Services.Media;
using SpaCenter.Services.Timing;

namespace SpaCenter.WebApi.Extensions
{
    // Configure các dịch vụ sử dụng trong WebApi
    public static class WebApplicationExtensions
    {
        public static WebApplicationBuilder ConfigureServices(
            this WebApplicationBuilder builder)
        {
            builder.Services.AddMemoryCache();

            builder.Services.AddDbContext<SpaDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            builder.Services.AddScoped<ITimeProvider, LocalTimeProvider>();
            builder.Services.AddScoped<IMediaManager, LocalFileSystemMediaManager>();
            return builder;
        }

        public static WebApplicationBuilder ConfigureSwaggerOpenApi(
            this WebApplicationBuilder builder)
        {
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            return builder;
        }

        public static WebApplicationBuilder ConfigureCors(
            this WebApplicationBuilder builder)
        {
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("SpaCenter", policyBuilder => policyBuilder
                    .AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod());
            });

            return builder;
        }

        public static WebApplication SetupRequestPipeline(
           this WebApplication app)
        {
            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseStaticFiles();
            app.UseHttpsRedirection();
            app.UseRouting();

            app.UseAuthorization();

            app.UseCors("SpaCenter");

            return app;
        }
    }
}
