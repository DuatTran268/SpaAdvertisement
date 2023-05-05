using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using SpaCenter.Core.Contracts;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.Data.Contexts;
using SpaCenter.Services.Extensions;

namespace SpaCenter.Services.Manages.ServiceTypes
{
    public class ServiceTypeRepository : IServiceTypeRepository
    {
        private readonly SpaDbContext _context;
        private readonly IMemoryCache _memoryCache;

        public ServiceTypeRepository(SpaDbContext context, IMemoryCache memoryCache)
        {
            _context = context;
            _memoryCache = memoryCache;
        }

        public async Task<bool> AddOrUpdateAsync(ServiceType typpeId, CancellationToken cancellationToken = default)
        {
            if (typpeId.Id > 0)
            {
                _context.ServiceTypes.Update(typpeId);
                _memoryCache.Remove($"typpeId.by-id.{typpeId.Id}");
            }
            else
            {
                _context.ServiceTypes.Add(typpeId);
            }

            return await _context.SaveChangesAsync(cancellationToken) > 0;
        }

        public async Task<bool> DeleteTypeAsync(int typpeId, CancellationToken cancellationToken = default)
        {
            return await _context.ServiceTypes
            .Where(x => x.Id == typpeId)
            .ExecuteDeleteAsync(cancellationToken) > 0;
        }

		public async Task<ServiceType> GetCachedTypeByIdAsync(int typpeId)
        {
            return await _memoryCache.GetOrCreateAsync(
            $"servicetype.by-id.{typpeId}",
            async (entry) =>
            {
                entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(30);
                return await GetTypeByIdAsync(typpeId);
            });
        }

        public async Task<IPagedList<T>> GetPagedServiceTypesAsync<T>(Func<IQueryable<ServiceType>, IQueryable<T>> mapper,
            IPagingParams pagingParams, string name = null, CancellationToken cancellationToken = default)
        {
            var typeQuery = _context.Set<ServiceType>().AsNoTracking();

            if (!string.IsNullOrEmpty(name))
            {
                typeQuery = typeQuery.Where(x => x.Name.Contains(name));
            }

            return await mapper(typeQuery)
                .ToPagedListAsync(pagingParams, cancellationToken);
        }

        public async Task<IPagedList<ServiceTypeItem>> GetPagedTypeAsync(
            IPagingParams pagingParams, 
            string name = null, 
            string price = null, 
            CancellationToken cancellationToken = default)
        {
            return await _context.Set<ServiceType>()
               .AsNoTracking()
               .WhereIf(!string.IsNullOrWhiteSpace(name),
                   x => x.Name.Contains(name))
               .WhereIf(!string.IsNullOrWhiteSpace(price),
                   x => x.Price.Contains(price))
               .Select(a => new ServiceTypeItem()
               {
                   Id = a.Id,
                   Name = a.Name,
                   ShortDescription = a.ShortDescription,
                   Description = a.Description,
                   UrlSlug = a.UrlSlug,
                   ImageUrl = a.ImageUrl,
                   Price = a.Price
               })
               .ToPagedListAsync(pagingParams, cancellationToken);
        }
		public async Task<IList<T>> GetServiceTypeAsync<T>(Func<IQueryable<ServiceType>, IQueryable<T>> mapper, CancellationToken cancellationToken = default)
		{
            IQueryable<ServiceType> servicetypes = _context.Set<ServiceType>()
                .OrderBy(st => st.Id);

            return await mapper(servicetypes).ToListAsync(cancellationToken);

		}

		public async Task<ServiceType> GetTypeByIdAsync(int typpeId)
        {
            return await _context.Set<ServiceType>().FindAsync(typpeId);
        }

        public async Task<bool> IsTypeSlugExistedAsync(int typpeId, string slug, CancellationToken cancellationToken = default)
        {
            return await _context.ServiceTypes
            .AnyAsync(x => x.Id != typpeId && x.UrlSlug == slug, cancellationToken);
        }

        public async Task<bool> SetImageUrlAsync(int typpeId, string imageUrl, CancellationToken cancellationToken = default)
        {
            return await _context.ServiceTypes
                .Where(x => x.Id == typpeId)
                .ExecuteUpdateAsync(x => x.SetProperty(
                    a => a.ImageUrl,
                    a => imageUrl),
                    cancellationToken) > 0;
        }

		// get random limit service type

		public async Task<IList<T>> GetLimitNServiceTypeAsync<T>(int n, Func<IQueryable<ServiceType>, IQueryable<T>> mapper, CancellationToken cancellationToken = default)
		{
            IQueryable<ServiceType> rdServiceTypeQuery = _context.Set<ServiceType>()
				//.OrderBy(st => st.Id) // lay theo id moi nhat
				.OrderBy(c => Guid.NewGuid())
				.Take(n);

            return await mapper(rdServiceTypeQuery).ToListAsync(cancellationToken);
		}

		public async Task<IPagedList<T>> GetPagedServiceTypeAsync<T>(ServiceTypeQuery query, IPagingParams pagingParams, Func<IQueryable<ServiceType>, IQueryable<T>> mapper, CancellationToken cancellationToken = default)
		{
			IQueryable<ServiceType> serviceTypeFindQuery = FilterServiceType(query);
			IQueryable<T> queryResult = mapper(serviceTypeFindQuery);
			return await queryResult.ToPagedListAsync(pagingParams, cancellationToken);
		}

        private IQueryable<ServiceType> FilterServiceType(ServiceTypeQuery query)
        {
            IQueryable<ServiceType> serviceTypeQuery = _context.Set<ServiceType>();
            {
				if (!string.IsNullOrEmpty(query.Name))
				{
					serviceTypeQuery = serviceTypeQuery.Where(st => st.Name.Contains(query.Name)
					|| st.ShortDescription.Contains(query.Name)
					|| st.Description.Contains(query.Name)
					|| st.UrlSlug.Contains(query.Name)
					);
				}

				if (!string.IsNullOrWhiteSpace(query.ServiceTypeSlug))
                {
                    serviceTypeQuery = serviceTypeQuery.Where(stq => stq.UrlSlug == query.ServiceTypeSlug);
                }

                return serviceTypeQuery;

			}

		}

		public async Task<ServiceType> GetDetailServiceTypeBySlugAsync(string slug, CancellationToken cancellationToken = default)
		{
            IQueryable<ServiceType> serviceTypesQuery = _context.Set<ServiceType>();
            {
                if (!string.IsNullOrEmpty(slug))
                {
                    serviceTypesQuery = serviceTypesQuery.Where(st => st.UrlSlug == slug);
                }
                return await serviceTypesQuery.FirstOrDefaultAsync(cancellationToken);
            }
		}

		public async Task<int> CountServiceTypeAsync(CancellationToken cancellationToken = default)
		{
            return await _context.Set<ServiceType>().CountAsync(cancellationToken);
		}
	}
}