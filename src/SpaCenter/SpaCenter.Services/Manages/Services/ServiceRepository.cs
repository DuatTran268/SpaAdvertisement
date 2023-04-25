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

        public async Task<Service> GetServiceByIdAsync(int serviceId)
        {
            return await _context.Set<Service>().FindAsync(serviceId);
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
    }
}