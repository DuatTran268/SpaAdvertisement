using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using SpaCenter.Core.Contracts;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.Data.Contexts;
using SpaCenter.Services.Extensions;

namespace SpaCenter.Services.Manages.Services
{
    public class ServiceRepository : IServiceRepository
    {
        private readonly SpaDbContext _context;
        private readonly IMemoryCache _memoryCache;

        public ServiceRepository(SpaDbContext context, IMemoryCache memoryCache)
        {
            _context = context;
            _memoryCache = memoryCache;
        }


		public  async Task<IList<ServiceItem>> GetServiceNotRequiredAsync(CancellationToken cancellationToken = default)
		{
            IQueryable<Service> services = _context.Set<Service>();
            return await services.OrderBy(s => s.Name).Select(s => new ServiceItem()
            {
                Id = s.Id,
                Name = s.Name,
                UrlSlug = s.UrlSlug,
                ShortDescription = s.ShortDescription,
            }).ToListAsync(cancellationToken);
		}


		public async Task<IList<T>> GetServiceAsync<T>(Func<IQueryable<Service>, 
            IQueryable<T>> mapper, CancellationToken cancellationToken = default)
		{
            IQueryable<Service> services = _context.Set<Service>()
                .Include(st => st.ServiceTypes)
                .OrderBy(s => s.Id)
                ;
            return await mapper(services).ToListAsync(cancellationToken);
		}


		public async Task<bool> AddOrUpdateAsync(Service service, CancellationToken cancellationToken = default)
        {
            if (service.Id > 0)
            {
                _context.Services.Update(service);
                _memoryCache.Remove($"author.by-id.{service.Id}");
            }
            else
            {
                _context.Services.Add(service);
            }

            return await _context.SaveChangesAsync(cancellationToken) > 0;
        }

        public async Task<bool> DeleteAuthorAsync(int serviceId, CancellationToken cancellationToken = default)
        {
            return await _context.Services
             .Where(x => x.Id == serviceId)
             .ExecuteDeleteAsync(cancellationToken) > 0;
        }

        public async Task<IList<Service>> GetAllService(CancellationToken cancellationToken = default)
        {
            var serviceQuery = _context.Set<Service>()
                .Select(x => new Service()
                {
                    Id = x.Id,
                    Name = x.Name,
                    UrlSlug = x.UrlSlug,
                    ShortDescription = x.ShortDescription
                });

            return await serviceQuery.ToListAsync(cancellationToken);
        }

        public async Task<Service> GetCachedServiceBySlugAsync(string slug, CancellationToken cancellationToken = default)
        {
            return await _memoryCache.GetOrCreateAsync(
           $"author.by-slug.{slug}",
           async (entry) =>
           {
               entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(30);
               return await GetServiceBySlugAsync(slug, cancellationToken);
           });
        }

        public async Task<IPagedList<ServiceItem>> GetPagedServicesAsync(
        IPagingParams pagingParams, string name = null,
        CancellationToken cancellationToken = default)
        {
            return await _context.Set<Service>()
                .AsNoTracking()
                .WhereIf(!string.IsNullOrWhiteSpace(name),
                    x => x.Name.Contains(name))
                .Select(a => new ServiceItem()
                {
                    Id = a.Id,
                    Name = a.Name,
                    ShortDescription = a.ShortDescription,
                    UrlSlug = a.UrlSlug,
                })
                .ToPagedListAsync(pagingParams, cancellationToken);
        }

        public async Task<IPagedList<T>> GetPagedServicesAsync<T>(
            Func<IQueryable<Service>, IQueryable<T>> mapper,
            IPagingParams pagingParams, string name = null,
            CancellationToken cancellationToken = default)
        {
            var serviceQuery = _context.Set<Service>().AsNoTracking();

            if (!string.IsNullOrEmpty(name))
            {
                serviceQuery = serviceQuery.Where(x => x.Name.Contains(name));
            }

            return await mapper(serviceQuery).ToPagedListAsync(pagingParams, cancellationToken);
        }

        public async Task<Service> GetServiceByIdAsync(int serviceId, CancellationToken cancellationToken = default)
        {
            return await _context.Set<Service>().Include(s => s.ServiceTypes).
                FirstOrDefaultAsync(x => x.Id == serviceId, cancellationToken);
        }

        public async Task<Service> GetServiceBySlugAsync(string slug, CancellationToken cancellationToken = default)
        {
            return await _context.Set<Service>()
             .FirstOrDefaultAsync(a => a.UrlSlug == slug, cancellationToken);
        }

		public async Task<bool> IsServiceSlugExistedAsync(int serviceId, string slug, CancellationToken cancellationToken = default)
        {
            return await _context.Services
            .AnyAsync(x => x.Id != serviceId && x.UrlSlug == slug, cancellationToken);
        }

		public async Task<IPagedList<T>> GetPagedServiceAsync<T>(ServiceQuery query, IPagingParams pagingParams, Func<IQueryable<Service>, IQueryable<T>> mapper, CancellationToken cancellationToken = default)
		{
            IQueryable<Service> serviceFindQuery = FilterService(query);
            IQueryable<T> queryResult = mapper(serviceFindQuery);
            return await queryResult.ToPagedListAsync(pagingParams, cancellationToken);

		}
        private IQueryable<Service> FilterService(ServiceQuery query)
        {
            IQueryable<Service> serviceQuery = _context.Set<Service>()
                .Include(s => s.ServiceTypes);
            {
                if (!string.IsNullOrEmpty(query.Name))
                {
                    serviceQuery = serviceQuery.Where(st => st.Name.Contains(query.Name)
                    || st.ShortDescription.Contains(query.Name)
                    || st.UrlSlug.Contains(query.Name)
                    );
                }
                if (!string.IsNullOrWhiteSpace(query.ServiceSlug))
                {
                    serviceQuery = serviceQuery.Where(s => s.UrlSlug == query.ServiceSlug);
                }

                return serviceQuery;
            }
        }

		//// Top các dịch vụ được ưa chuộng nhất tại Spa
		//public async Task<IList<ServiceItem>> TopServicesAsync(int numService, CancellationToken cancellationToken = default)
		//{
		//    return await _context.Set<Service>()
		//   .Include(p => p.ServiceTypes)
		//   .Select(x => new ServiceItem()
		//   {
		//       Id = x.Id,
		//       Name = x.Name,
		//       UrlSlug = x.UrlSlug,
		//       //FavoredCount = x.ServiceTypes.Count(p => p.Status)
		//   })
		//   .OrderByDescending(x => x.FavoredCount)
		//   .Take(numService)
		//   .ToListAsync(cancellationToken);
		//}
	}
}