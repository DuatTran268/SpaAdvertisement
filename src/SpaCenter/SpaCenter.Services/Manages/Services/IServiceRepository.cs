using SpaCenter.Core.Contracts;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;

namespace SpaCenter.Services.Manages.Services
{
    public interface IServiceRepository
    {
        Task<IList<ServiceItem>> GetServiceNotRequiredAsync(
            CancellationToken cancellationToken = default);

        Task<Service> GetServiceBySlugAsync(string slug, CancellationToken cancellationToken = default);

        Task<Service> GetCachedServiceBySlugAsync(string slug, CancellationToken cancellationToken = default);

        Task<Service> GetServiceByIdAsync(int serviceId);

        Task<IPagedList<ServiceItem>> GetPagedServicesAsync(IPagingParams pagingParams, string name = null,
        CancellationToken cancellationToken = default);

        Task<IPagedList<T>> GetPagedServicesAsync<T>(Func<IQueryable<Service>, IQueryable<T>> mapper, IPagingParams pagingParams,
            string name = null, CancellationToken cancellationToken = default);

        // Lấy danh sách tất cả các service + số loại service
        Task<IList<Service>> GetAllService(CancellationToken cancellationToken = default);

        Task<bool> AddOrUpdateAsync(Service service, CancellationToken cancellationToken = default);

        Task<bool> DeleteAuthorAsync(int serviceId, CancellationToken cancellationToken = default);

        Task<bool> IsServiceSlugExistedAsync(int serviceId, string slug, CancellationToken cancellationToken = default);

        // Top các dịch vụ được ưa chuộng nhất tại Spa
        Task<IList<ServiceItem>> TopServicesAsync(int numService, CancellationToken cancellationToken = default);
    }
}