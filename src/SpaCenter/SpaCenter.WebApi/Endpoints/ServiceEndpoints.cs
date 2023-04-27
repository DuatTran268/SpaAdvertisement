using FluentValidation;
using Mapster;
using MapsterMapper;
using SpaCenter.Core.Collections;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.Services.Manages.Services;
using SpaCenter.WebApi.Filters;
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

            routeGroupBuilder.MapGet("/", GetServiceNotRequired)
                .WithName("GetServiceNotRequired")
                .Produces<ApiResponse<PaginationResult<ServiceDto>>>();


            routeGroupBuilder.MapGet("/required", GetServices)
                .WithName("GetServices")
                .Produces<ApiResponse<ServiceDto>>();

            routeGroupBuilder.MapGet("/{id:int}", GetServiceById)
                .WithName("GetServiceById")
                .Produces<ApiResponse<ServiceItem>>();

            routeGroupBuilder.MapPost("/", AddService)
                          .AddEndpointFilter<ValidatorFilter<ServiceEditModel>>()
                          .WithName("AddNewService")
                          .Produces(401)
                          .Produces<ApiResponse<ServiceItem>>();

            routeGroupBuilder.MapPut("/{id:int}", UpdateService)
            .WithName("UpdateService")
            .Produces(401)
            .Produces<ApiResponse<string>>();

            routeGroupBuilder.MapDelete("/{id:int}", DeleteService)
                         .WithName("DeleteService")
                         .Produces(401)
                         .Produces<ApiResponse<string>>();

            //routeGroupBuilder.MapGet("/top/{limit:int}", GetTopServicesAsync)
            //             .WithName("GetTopServicesAsync")
            //             .Produces<PagedList<Service>>();

            return app;
        }
        // Top những dịch vụ được ưu chuộng nhất
        //private static async Task<IResult> GetTopServicesAsync(int limit, IServiceRepository serviceRepository)
        //{
        //    var author = await serviceRepository.TopServicesAsync(limit);

        //    return Results.Ok(ApiResponse.Success(author));
        //}

        //Method xử lý yêu cầu tìm danh sách các dịch vụ
        private static async Task<IResult> GetServiceNotRequired(
            IServiceRepository serviceRepository
            )
        {
            //var serviceList = await serviceRepository.GetServiceNotRequiredAsync();
            //return Results.Ok(ApiResponse.Success(serviceList));
            var service = await serviceRepository.GetServiceAsync(
                services => services.ProjectToType<ServiceDto>());
            return Results.Ok(ApiResponse.Success(service));

        }


        private static async Task<IResult> GetServices(
            [AsParameters] ServiceFilterModel model, 
            IServiceRepository serviceRepository, 
            IMapper mapper)
        {
            var serviceQuery = mapper.Map<ServiceQuery>(model);

            var serviceList = await serviceRepository.GetPagedServiceAsync<ServiceDto>(serviceQuery, model,
                services => services.ProjectToType<ServiceDto>());

			var paginationResult = new PaginationResult<ServiceDto>(serviceList);

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

        private static async Task<IResult> AddService(ServiceEditModel model, IValidator<ServiceEditModel> validator,
            IServiceRepository serviceRepository, IMapper mapper)
        {
            if (await serviceRepository.IsServiceSlugExistedAsync(0, model.UrlSlug))
            {
                return Results.Ok(ApiResponse.Fail(HttpStatusCode.Conflict, $"Slug '{model.UrlSlug}' đã được sử dụng"));
            }

            var service = mapper.Map<Service>(model);
            await serviceRepository.AddOrUpdateAsync(service);

            return Results.Ok(ApiResponse.Success(
                mapper.Map<ServiceItem>(service), HttpStatusCode.Created));
        }

        private static async Task<IResult> UpdateService(int id, ServiceEditModel model,
            IValidator<ServiceEditModel> validator, IServiceRepository serviceRepository, IMapper mapper)
        {
            var validationResult = await validator.ValidateAsync(model);
            if (!validationResult.IsValid)
            {
                return Results.Ok(ApiResponse.Fail(
                HttpStatusCode.BadRequest, validationResult));
            }
            if (await serviceRepository.IsServiceSlugExistedAsync(id, model.UrlSlug))
            {
                return Results.Ok(ApiResponse.Fail(HttpStatusCode.Conflict,
                $"Slug '{model.UrlSlug}' đã được sử dụng"));
            }
            var service = mapper.Map<Service>(model);
            service.Id = id;
            return await serviceRepository.AddOrUpdateAsync(service)
            ? Results.Ok(ApiResponse.Success("Đã cập nhật dịch vụ",
            HttpStatusCode.NoContent))
            : Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound, "Không tìm thấy dịch vụ này"));
        }

        private static async Task<IResult> DeleteService(int id, IServiceRepository serviceRepository)
        {
            return await serviceRepository.DeleteAuthorAsync(id)
            ? Results.Ok(ApiResponse.Success("Đã xóa dịch vụ",
            HttpStatusCode.NoContent))
            : Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound, "Không tìm thấy dịch vụ này"));
        }
    }
}