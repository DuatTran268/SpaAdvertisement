using SpaCenter.Core.Contracts;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;

namespace SpaCenter.Bookings.Manages.Bookings
{
    public interface IBookingRepository
    {
        Task<IList<T>> GetBookingAsync<T>(Func<IQueryable<Booking>, IQueryable<T>> mapper, CancellationToken cancellationToken = default);

        Task<IPagedList<T>> GetPagedBookingAsync<T>(BookingQuery query, IPagingParams pagingParams, Func<IQueryable<Booking>,
                IQueryable<T>> mapper, CancellationToken cancellationToken = default);

        Task<IList<BookingItem>> GetBookingNotRequiredAsync(CancellationToken cancellationToken = default);

        Task<Booking> GetBookingBySlugAsync(string slug, CancellationToken cancellationToken = default);

        Task<Booking> GetCachedBookingBySlugAsync(string slug, CancellationToken cancellationToken = default);

        Task<Booking> GetBookingByIdAsync(int BookingId);

        Task<bool> AddOrUpdateAsync(Booking Booking, CancellationToken cancellationToken = default);

        Task<bool> DeleteBookingAsync(int BookingId, CancellationToken cancellationToken = default);

        Task<bool> IsBookingSlugExistedAsync(int BookingId, string slug, CancellationToken cancellationToken = default);
    }
}