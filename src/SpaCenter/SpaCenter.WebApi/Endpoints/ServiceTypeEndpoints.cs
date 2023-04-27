using FluentValidation;
using Mapster;
using MapsterMapper;
using SpaCenter.Core.Collections;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.Services.Manages.Services;
using SpaCenter.Services.Manages.ServiceTypes;
using SpaCenter.Services.Media;
using SpaCenter.WebApi.Filters;
using SpaCenter.WebApi.Models;
using SpaCenter.WebApi.Models.Services;
using SpaCenter.WebApi.Models.ServiceTypes;
using System.Net;

namespace SpaCenter.WebApi.Endpoints
{
    public static class ServiceTypeEndpoints
    {
        public static WebApplication MapServiceTypeEndpoints(this WebApplication app)
        {
            var routeGroupBuilder = app.MapGroup("/api/servicetypes");

			routeGroupBuilder.MapGet("/", GetAllServiceTypeAsync)
			   .WithName("GetAllServiceTypeAsync")
			   .Produces<ApiResponse<PaginationResult<ServiceTypeDto>>>();

			routeGroupBuilder.MapGet("/required", GetServiceTypes)
                    .WithName("GetServiceTypes")
                    .Produces<ApiResponse<PaginationResult<ServiceTypeItem>>>();

            routeGroupBuilder.MapGet("/{id:int}", GetServicesById)
                    .WithName("GetServiceTypesById")
                    .Produces<ApiResponse<ServiceTypeItem>>();

            routeGroupBuilder.MapPost("/{id:int}/picture", SetServiceTypePicture)
                   .WithName("SetServiceTypePicture")
                   .Accepts<IFormFile>("multipart/form-data")
                   .Produces(401)
                   .Produces<ApiResponse<string>>();

            routeGroupBuilder.MapPost("/", AddServices)
                    .WithName("AddNewServices")
                    .AddEndpointFilter<ValidatorFilter<ServiceTypeEditModel>>()
                    .Produces(401)
                    .Produces<ApiResponse<ServiceTypeItem>>();

            routeGroupBuilder.MapPut("/{id:int}", UpdateServices)
                    .WithName("UpdateServices")
                    .Produces(401)
                    .Produces<ApiResponse<ServiceTypeDto>>();

            routeGroupBuilder.MapDelete("/{id:int}", DeleteServices)
                    .WithName("DeleteServices")
                    .Produces(401)
                    .Produces<ApiResponse<string>>();

			routeGroupBuilder.MapGet("random/{limit:int}", GetNLimitServiceTypeAsync)

			    .WithName("GetNLimitServiceTypeAsync")
			    .Produces<ApiResponse<IList<ServiceTypeDto>>>();

			return app;
        }

        private static async Task<IResult> GetAllServiceTypeAsync(
            IServiceTypeRepository serviceTypeRepository
            )
        {
            var serviceType = await serviceTypeRepository.GetServiceTypeAsync(
                serviceTypes => serviceTypes.ProjectToType<ServiceTypeDto>());

            return Results.Ok(ApiResponse.Success(serviceType));
        }

        private static async Task<IResult> GetServiceTypes([AsParameters] ServiceTypeFilterModel model, IServiceTypeRepository typeRepository)
        {
            var servicetypeList = await typeRepository.GetPagedTypeAsync(model, model.Name);

            var paginationResult = new PaginationResult<ServiceTypeItem>(servicetypeList);

            return Results.Ok(ApiResponse.Success(paginationResult));
        }

        private static async Task<IResult> GetServicesById(int id, IServiceTypeRepository typeRepository, IMapper mapper)
        {
            var type = await typeRepository.GetCachedTypeByIdAsync(id);

            return type == null ? Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound,
                $"Không tìm loại dịch vụ có mã số {id}"))
            :
                Results.Ok(ApiResponse.Success(mapper.Map<ServiceTypeItem>(type)));
        }

        private static async Task<IResult> AddServices(ServiceTypeEditModel model, IServiceTypeRepository typeRepository, IMapper mapper
        )
        {
            if (await typeRepository.IsTypeSlugExistedAsync(0, model.UrlSlug))
            {
                return Results.Ok(ApiResponse.Fail(HttpStatusCode.Conflict, $"Slug '{model.UrlSlug}' đã được sử dụng"));
            }

            var type = mapper.Map<ServiceType>(model);
            await typeRepository.AddOrUpdateAsync(type);

            return Results.Ok(ApiResponse.Success(mapper.Map<ServiceTypeItem>(type), HttpStatusCode.Created));
        }

        private static async Task<IResult> SetServiceTypePicture(int id, IFormFile imageFile,
           IServiceTypeRepository typeRepository, IMediaManager mediaManager)
        {
            var imageUrl = await mediaManager.SaveFileAsync(
                imageFile.OpenReadStream(),
                imageFile.FileName,
                imageFile.ContentType);

            if (string.IsNullOrWhiteSpace(imageUrl))
            {
                return Results.Ok(ApiResponse.Fail(
                    HttpStatusCode.BadRequest, "Lỗi không được lưu tập tin"));
            }

            await typeRepository.SetImageUrlAsync(id, imageUrl);

            return Results.Ok(ApiResponse.Success(imageUrl));
        }

        private static async Task<IResult> UpdateServices(int id, ServiceTypeEditModel model,
         IServiceTypeRepository typeRepository, IServiceRepository serviceRepository, IMapper mapper)
        {
            var type = await typeRepository.GetTypeByIdAsync(id);
            if (type == null)
            {
                return Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound,
                    $"Không tìm thấy id '{id}' của loại DV"));
            }
            if (await serviceRepository.GetServiceByIdAsync(model.ServiceId) == null)
            {
                return Results.Ok(ApiResponse.Fail(HttpStatusCode.Conflict,
                    $"Không tìm thấy DV có id '{model.ServiceId}'"));
            }
            if (await typeRepository.IsTypeSlugExistedAsync(0, model.UrlSlug))
            {
                return Results.Ok(ApiResponse.Fail(HttpStatusCode.Conflict,
                    $"Slug '{model.UrlSlug}' đã được sử dụng"));
            }

            mapper.Map(model, type);
            type.Id = id;

            return await typeRepository.AddOrUpdateAsync(type)
                ? Results.Ok(ApiResponse.Success($"Thay đổi thành công loại DV có id = {id}"))
                : Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound, $"Không tìm thấy DV có id {id}"));
        }

        private static async Task<IResult> DeleteServices(int id, IServiceTypeRepository typeRepository)
        {
            return await typeRepository.DeleteTypeAsync(id)
            ? Results.Ok(ApiResponse.Success("Xóa thành công!",
            HttpStatusCode.NoContent))
            : Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound, "Không tìm thấy loại dịch vụ này"));
        }

        // get ramdom litmit service type
        public static async Task<IResult> GetNLimitServiceTypeAsync(
            int limit, IServiceTypeRepository serviceTypeRepository,
            ILogger<IResult> logger)
        {
            var randomServiceType = await serviceTypeRepository.GetLimitNServiceTypeAsync(
                limit, st => st.ProjectToType<ServiceTypeDto>());

            return Results.Ok(ApiResponse.Success(randomServiceType));
        }

    }
}