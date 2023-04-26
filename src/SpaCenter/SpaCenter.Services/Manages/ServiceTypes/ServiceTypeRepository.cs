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

        public async Task<IPagedList<ServiceTypeItem>> GetPagedTypeAsync(IPagingParams pagingParams, string name = null, CancellationToken cancellationToken = default)
        {
            return await _context.Set<ServiceType>()
               .AsNoTracking()
               .WhereIf(!string.IsNullOrWhiteSpace(name),
                   x => x.Name.Contains(name))
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
    }
}