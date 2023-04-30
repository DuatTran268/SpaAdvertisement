using MapsterMapper;
using SpaCenter.Bookings.Manages.Bookings;
using SpaCenter.Core.Collections;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.Services.Manages.ServiceTypeBookings;
using SpaCenter.Services.Manages.ServiceTypes;
using SpaCenter.WebApi.Filters;
using SpaCenter.WebApi.Models;
using SpaCenter.WebApi.Models.ServiceTypeBookings;
using System.Net;

namespace SpaCenter.WebApi.Endpoints
{
    public static class STypeBookingEndpoints
    {
        public static WebApplication MapSTypeBookingEndpoints(this WebApplication app)
        {
            var routeGroupBuilder = app.MapGroup("/api/typebookings");

            routeGroupBuilder.MapGet("/", GetSTypeBookings)
                    .WithName("GetSTypeBookings")
                    .Produces<ApiResponse<PaginationResult<STypeBookingItem>>>();

            routeGroupBuilder.MapGet("/{id:int}", GetSTypeBookingById)
                    .WithName("GetSTypeBookingById")
                    .Produces<ApiResponse<STypeBookingItem>>();

            routeGroupBuilder.MapPost("/", AddSTypeBookings)
                    .WithName("AddNewSTypeBookings")
                    .AddEndpointFilter<ValidatorFilter<STBookingEditModel>>()
                    .Produces(401)
                    .Produces<ApiResponse<STypeBookingItem>>();

            routeGroupBuilder.MapPut("/{id:int}", UpdateSTypeBookings)
                    .WithName("UpdateSTypeBookings")
                    .Produces(401)
                    .Produces<ApiResponse<STBookingDto>>();

            routeGroupBuilder.MapDelete("/{id:int}", DeleteSTypeBookings)
                    .WithName("DeleteSTypeBookings")
                    .Produces(401)
                    .Produces<ApiResponse<string>>();

            return app;
        }

        private static async Task<IResult> GetSTypeBookings(ISTBookingRepository typeRepository)
        {
            var typeBookingList = await typeRepository.GetTypeBookingNotRequired();
            return Results.Ok(ApiResponse.Success(typeBookingList));
        }

        private static async Task<IResult> GetSTypeBookingById(int id, ISTBookingRepository typeRepository, IMapper mapper)
        {
            var type = await typeRepository.GetCachedTypeByIdAsync(id);

            return type == null ? Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound,
                $"Không tìm loại dịch vụ có mã số {id}"))
                : Results.Ok(ApiResponse.Success(mapper.Map<STypeBookingItem>(type)));
        }

        private static async Task<IResult> AddSTypeBookings(STBookingEditModel model, ISTBookingRepository typeRepository, IMapper mapper)
        {
            var type = mapper.Map<ServiceTypeBooking>(model);
            await typeRepository.AddOrUpdateAsync(type);

            return Results.Ok(ApiResponse.Success(mapper.Map<STypeBookingItem>(type), HttpStatusCode.Created));
        }

        private static async Task<IResult> UpdateSTypeBookings(int id, STBookingEditModel model,
            IBookingRepository bookingRepository, IServiceTypeRepository typeRepository, IMapper mapper)
        {
            var type = await typeRepository.GetTypeByIdAsync(id);
            if (type == null)
            {
                return Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound,
                    $"Không tìm thấy id '{id}' của loại DV đã Booking"));
            }
            if (await bookingRepository.GetBookingByIdAsync(model.BookingId) == null)
            {
                return Results.Ok(ApiResponse.Fail(HttpStatusCode.Conflict,
                    $"Không tìm thấy thông tin booking có id '{model.BookingId}'"));
            }

            mapper.Map(model, type);
            type.Id = id;

            return await typeRepository.AddOrUpdateAsync(type)
                ? Results.Ok(ApiResponse.Success($"Thay đổi thành công loại DV đã booking có id = {id}"))
                : Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound, $"Không tìm thấy DV đã booking có id {id}"));
        }

        private static async Task<IResult> DeleteSTypeBookings(int id, ISTBookingRepository typeRepository)
        {
            return await typeRepository.DeleteTypeAsync(id)
                ? Results.Ok(ApiResponse.Success("Xóa thành công thông tin booking từ khách hàng!", HttpStatusCode.NoContent))
                : Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound, "Không tìm thấy loại dịch vụ đã booking này"));
        }
    }
}