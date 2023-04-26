using SpaCenter.Core.Contracts;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;

namespace SpaCenter.Services.Manages.ServiceTypes
{
    public interface IServiceTypeRepository
    {
        Task<ServiceType> GetTypeByIdAsync(int typpeId);

        Task<ServiceType> GetCachedTypeByIdAsync(int typpeId);

        Task<IPagedList<ServiceTypeItem>> GetPagedTypeAsync(IPagingParams pagingParams, string name = null,
            CancellationToken cancellationToken = default);

        Task<IPagedList<T>> GetPagedServiceTypesAsync<T>(Func<IQueryable<ServiceType>, IQueryable<T>> mapper, IPagingParams pagingParams,
            string name = null, CancellationToken cancellationToken = default);

        Task<bool> AddOrUpdateAsync(ServiceType typpeId, CancellationToken cancellationToken = default);

        Task<bool> DeleteTypeAsync(int typpeId, CancellationToken cancellationToken = default);

        Task<bool> IsTypeSlugExistedAsync(int typpeId, string slug, CancellationToken cancellationToken = default);

        Task<bool> SetImageUrlAsync(int typpeId, string imageUrl,
            CancellationToken cancellationToken = default);
    }
}