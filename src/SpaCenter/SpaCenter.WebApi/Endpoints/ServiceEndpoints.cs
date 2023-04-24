using MapsterMapper;
using SpaCenter.Core.Collections;
using SpaCenter.Core.DTO;
using SpaCenter.Services.Manages.Services;
using SpaCenter.WebApi.Models;
using SpaCenter.WebApi.Models.Services;
using System.Net;

namespace SpaCenter.WebApi.Endpoints
{
    public static class ServiceEndpoints
    {
        public static WebApplication MapServiceEndpoints(this WebApplication app)
        {
            var routeGroupBuilder = app.MapGroup("/api/services");

            routeGroupBuilder.MapGet("/", GetServices)
                .WithName("GetServices")
                .Produces<ApiResponse<PaginationResult<ServiceItem>>>();

            routeGroupBuilder.MapGet("/{id:int}", GetServiceById)
                .WithName("GetServiceById")
                .Produces<ApiResponse<ServiceItem>>();

            routeGroupBuilder.MapPost("/", AddService)
                          .AddEndpointFilter<ValidatorFilter<ServiceEditModel>>()
                          .WithName("AddNewService")
                          .Produces(401)
                          .Produces<ApiResponse<ServiceItem>>();
            return app;
        }

         //Method xử lý yêu cầu tìm danh sách các dịch vụ
        private static async Task<IResult> GetServices([AsParameters] ServiceFilterModel model, IServiceRepository serviceRepository)
        {
            var serviceList = await serviceRepository.GetPagedServicesAsync(model, model.Name);

            var paginationResult = new PaginationResult<ServiceItem>(serviceList);

            return Results.Ok(ApiResponse.Success(paginationResult));
        }   

        private static async Task<IResult> GetServiceById(int id, IServiceRepository serviceRepository, IMapper mapper)
        {
            var service = await serviceRepository.GetServiceByIdAsync(id);

            return service == null 
                ? Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound,
                $"Không tìm thấy thông tin dịch vụ có mã số {id}"))
                : Results.Ok(ApiResponse.Success(mapper.Map<ServiceItem>(service)));
        }

    }
}