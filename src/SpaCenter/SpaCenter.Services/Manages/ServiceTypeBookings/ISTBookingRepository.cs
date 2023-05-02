using SpaCenter.Core.Contracts;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;

namespace SpaCenter.Services.Manages.ServiceTypeBookings
{
    public interface ISTBookingRepository
    {
        Task<ServiceTypeBooking> GetTypeByIdAsync(int typpeId);

        Task<ServiceTypeBooking> GetCachedTypeByIdAsync(int typpeId);

        Task<IList<STypeBookingItem>> GetTypeBookingNotRequired(CancellationToken cancellationToken = default);

        Task<IPagedList<T>> GetPagedTypeBookingAsync<T>(Func<IQueryable<ServiceTypeBooking>, IQueryable<T>> mapper, IPagingParams pagingParams,
            string name = null, CancellationToken cancellationToken = default);

        Task<bool> AddOrUpdateAsync(ServiceTypeBooking typpeId, CancellationToken cancellationToken = default);

        Task<bool> DeleteTypeAsync(int typpeId, CancellationToken cancellationToken = default);
    }
}