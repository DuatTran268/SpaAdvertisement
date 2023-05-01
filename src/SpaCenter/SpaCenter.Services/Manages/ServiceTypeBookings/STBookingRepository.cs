using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using SpaCenter.Core.Contracts;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.Data.Contexts;
using SpaCenter.Services.Extensions;

namespace SpaCenter.Services.Manages.ServiceTypeBookings
{
    public class STBookingRepository : ISTBookingRepository
    {
        private readonly SpaDbContext _context;
        private readonly IMemoryCache _memoryCache;

        public STBookingRepository(SpaDbContext context, IMemoryCache memoryCache)
        {
            _context = context;
            _memoryCache = memoryCache;
        }

        public async Task<bool> AddOrUpdateAsync(ServiceTypeBooking typpeId, CancellationToken cancellationToken = default)
        {
            if (typpeId.Id > 0)
            {
                _context.ServiceTypesBooking.Update(typpeId);
                _memoryCache.Remove($"typeId.by-id.{typpeId.Id}");
            }
            else
            {
                _context.ServiceTypesBooking.Add(typpeId);
            }

            return await _context.SaveChangesAsync(cancellationToken) > 0;
        }

        public async Task<bool> DeleteTypeAsync(int typpeId, CancellationToken cancellationToken = default)
        {
            return await _context.ServiceTypesBooking
               .Where(x => x.Id == typpeId)
               .ExecuteDeleteAsync(cancellationToken) > 0;
        }

        public async Task<ServiceTypeBooking> GetCachedTypeByIdAsync(int typpeId)
        {
            return await _memoryCache.GetOrCreateAsync(
           $"bookingtype.by-id.{typpeId}",
           async (entry) =>
           {
               entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(30);
               return await GetTypeByIdAsync(typpeId);
           });
        }

        public async Task<IPagedList<T>> GetPagedTypeBookingAsync<T>(Func<IQueryable<ServiceTypeBooking>, IQueryable<T>> mapper,
            IPagingParams pagingParams, string price = null, CancellationToken cancellationToken = default)
        {
            var typeQuery = _context.Set<ServiceTypeBooking>().AsNoTracking();

            if (!string.IsNullOrEmpty(price))
            {
                typeQuery = typeQuery.Where(x => x.Price.Contains(price));
            }

            return await mapper(typeQuery)
                .ToPagedListAsync(pagingParams, cancellationToken);
        }

        public async Task<IList<STypeBookingItem>> GetTypeBookingNotRequired(CancellationToken cancellationToken = default)
        {
            IQueryable<ServiceTypeBooking> typeBookings = _context.Set<ServiceTypeBooking>();
            return await typeBookings
              .AsNoTracking()
              .Select(a => new STypeBookingItem()
              {
                  Id = a.Id,
                  UserNumber = a.UserNumber,
                  Price = a.Price,
                  BookingId = a.BookingId,
                  ServiceTypeId = a.ServiceTypeId
              })
              .ToListAsync(cancellationToken);
        }

        public async Task<ServiceTypeBooking> GetTypeByIdAsync(int typpeId)
        {
            return await _context.Set<ServiceTypeBooking>().FindAsync(typpeId);
        }
    }
}