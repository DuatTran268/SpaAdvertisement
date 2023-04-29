using SpaCenter.Core.Contracts;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;

namespace SpaCenter.Services.Manages.ServiceTypes
{
    public interface IServiceTypeRepository
    {
		Task<IList<T>> GetServiceTypeAsync<T>(
		   Func<IQueryable<ServiceType>, IQueryable<T>> mapper,
		   CancellationToken cancellationToken = default);

		Task<IPagedList<T>> GetPagedServiceTypeAsync<T>(
			ServiceTypeQuery query,
			IPagingParams pagingParams,
			Func<IQueryable<ServiceType>,
				IQueryable<T>> mapper,
			CancellationToken cancellationToken = default);

		Task<ServiceType> GetTypeByIdAsync(int typpeId);

        Task<ServiceType> GetCachedTypeByIdAsync(int typpeId);

        Task<IPagedList<ServiceTypeItem>> GetPagedTypeAsync(
            IPagingParams pagingParams,
            string name = null,
            string price = null,
            CancellationToken cancellationToken = default);

        Task<IPagedList<T>> GetPagedServiceTypesAsync<T>(Func<IQueryable<ServiceType>, IQueryable<T>> mapper, IPagingParams pagingParams,
            string name = null, CancellationToken cancellationToken = default);

        Task<bool> AddOrUpdateAsync(ServiceType typpeId, CancellationToken cancellationToken = default);

        Task<bool> DeleteTypeAsync(int typpeId, CancellationToken cancellationToken = default);

        Task<bool> IsTypeSlugExistedAsync(int typpeId, string slug, CancellationToken cancellationToken = default);

        Task<bool> SetImageUrlAsync(int typpeId, string imageUrl,
            CancellationToken cancellationToken = default);

        // get random service type 
        Task<IList<T>> GetLimitNServiceTypeAsync<T>(
            int n,
            Func<IQueryable<ServiceType>,
            IQueryable<T>> mapper,
            CancellationToken cancellationToken = default);

        // get service type detail by slug
        Task<ServiceType> GetDetailServiceTypeBySlugAsync(string slug, CancellationToken cancellationToken = default);
    }
}