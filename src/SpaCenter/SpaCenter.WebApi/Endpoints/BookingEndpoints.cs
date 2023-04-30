using FluentValidation;
using Mapster;
using MapsterMapper;
using SpaCenter.Bookings.Manages.Bookings;
using SpaCenter.Core.Collections;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.WebApi.Filters;
using SpaCenter.WebApi.Models;
using SpaCenter.WebApi.Models.Bookings;
using System.Net;

namespace SpaCenter.WebApi.Endpoints;

public static class BookingEndpoints
{
    public static WebApplication MapBookingEndpoints(this WebApplication app)
    {
        var routeGroupBuilder = app.MapGroup("/api/bookings");

        routeGroupBuilder.MapGet("/", GetBookingNotRequired)
            .WithName("GetBookingNotRequired")
            .Produces<ApiResponse<PaginationResult<BookingDto>>>();

        routeGroupBuilder.MapGet("/required", GetBooking)
            .WithName("GetBooking")
            .Produces<ApiResponse<BookingDto>>();

        routeGroupBuilder.MapGet("/{id:int}", GetBookingById)
            .WithName("GetBookingById")
            .Produces<ApiResponse<BookingItem>>();

        routeGroupBuilder.MapPost("/", AddBooking)
                      .AddEndpointFilter<ValidatorFilter<BookingEditModel>>()
                      .WithName("AddNewBooking")
                      .Produces(401)
                      .Produces<ApiResponse<BookingItem>>();

        routeGroupBuilder.MapPut("/{id:int}", UpdateBooking)
        .WithName("UpdateBooking")
        .Produces(401)
        .Produces<ApiResponse<string>>();

        routeGroupBuilder.MapDelete("/{id:int}", DeleteBooking)
                     .WithName("DeleteBooking")
                     .Produces(401)
                     .Produces<ApiResponse<string>>();

        return app;
    }

    private static async Task<IResult> GetBookingNotRequired(IBookingRepository bookingRepository)
    {
        var booking = await bookingRepository.GetBookingAsync(
               bookings => bookings.ProjectToType<BookingDto>());
        return Results.Ok(ApiResponse.Success(booking));
    }

    private static async Task<IResult> GetBooking([AsParameters] BookingFilterModel model,
            IBookingRepository bookingRepository, IMapper mapper)
    {
        var bookingQuery = mapper.Map<BookingQuery>(model);

        var bookingList = await bookingRepository.GetPagedBookingAsync<BookingDto>(bookingQuery, model,
            bookings => bookings.ProjectToType<BookingDto>());

        var paginationResult = new PaginationResult<BookingDto>(bookingList);

        return Results.Ok(ApiResponse.Success(paginationResult));
    }

    private static async Task<IResult> GetBookingById(int id, IBookingRepository bookingRepository, IMapper mapper)
    {
        var booking = await bookingRepository.GetBookingByIdAsync(id);

        return booking == null
            ? Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound,
            $"Không tìm thấy thông tin đặt lịch có mã số {id}"))
            : Results.Ok(ApiResponse.Success(mapper.Map<BookingItem>(booking)));
    }

    private static async Task<IResult> AddBooking(BookingEditModel model, IValidator<BookingEditModel> validator,
            IBookingRepository bookingRepository, IMapper mapper)
    {
        if (await bookingRepository.IsBookingSlugExistedAsync(0, model.UrlSlug))
        {
            return Results.Ok(ApiResponse.Fail(HttpStatusCode.Conflict, $"Slug '{model.UrlSlug}' đã được sử dụng"));
        }

        var booking = mapper.Map<Booking>(model);
        await bookingRepository.AddOrUpdateAsync(booking);

        return Results.Ok(ApiResponse.Success(
            mapper.Map<BookingItem>(booking), HttpStatusCode.Created));
    }

    private static async Task<IResult> DeleteBooking(int id, IBookingRepository bookingRepository)
    {
        return await bookingRepository.DeleteBookingAsync(id)
           ? Results.Ok(ApiResponse.Success("Đã xóa thông tin đặt lịch",
           HttpStatusCode.NoContent))
           : Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound, "Không tìm thấy thông tin đặt lịch này"));
    }

    private static async Task<IResult> UpdateBooking(int id, BookingEditModel model,
            IValidator<BookingEditModel> validator, IBookingRepository bookingRepository, IMapper mapper)
    {
        var validationResult = await validator.ValidateAsync(model);
        if (!validationResult.IsValid)
        {
            return Results.Ok(ApiResponse.Fail(
            HttpStatusCode.BadRequest, validationResult));
        }
        if (await bookingRepository.IsBookingSlugExistedAsync(id, model.UrlSlug))
        {
            return Results.Ok(ApiResponse.Fail(HttpStatusCode.Conflict, $"Slug '{model.UrlSlug}' đã được sử dụng"));
        }
        var booking = mapper.Map<Booking>(model);
        booking.Id = id;
        return await bookingRepository.AddOrUpdateAsync(booking)
        ? Results.Ok(ApiResponse.Success("Đã cập nhật thông tin đặt lịch",
        HttpStatusCode.NoContent))
        : Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound, "Không tìm thấy thông tin đặt lịch này"));
    }
}