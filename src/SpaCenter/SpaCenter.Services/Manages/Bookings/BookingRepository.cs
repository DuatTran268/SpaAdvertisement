using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using SpaCenter.Bookings.Manages.Bookings;
using SpaCenter.Core.Contracts;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.Data.Contexts;
using SpaCenter.Services.Extensions;

namespace SpaCenter.Services.Manages.Bookings
{
    public class BookingRepository : IBookingRepository
    {
        private readonly SpaDbContext _context;
        private readonly IMemoryCache _memoryCache;

        public BookingRepository(SpaDbContext context, IMemoryCache memoryCache)
        {
            _context = context;
            _memoryCache = memoryCache;
        }

        public async Task<bool> AddOrUpdateAsync(Booking booking, CancellationToken cancellationToken = default)
        {
            if (booking.Id > 0)
            {
                _context.Bookings.Update(booking);
                _memoryCache.Remove($"booking.by-id.{booking.Id}");
            }
            else
            {
                _context.Bookings.Add(booking);
            }

            return await _context.SaveChangesAsync(cancellationToken) > 0;
        }

        public async Task<bool> DeleteBookingAsync(int bookingId, CancellationToken cancellationToken = default)
        {
            return await _context.Bookings
            .Where(x => x.Id == bookingId)
            .ExecuteDeleteAsync(cancellationToken) > 0;
        }

        public async Task<IList<T>> GetBookingAsync<T>(Func<IQueryable<Booking>, IQueryable<T>> mapper, CancellationToken cancellationToken = default)
        {
            IQueryable<Booking> bookings = _context.Set<Booking>()
               .Include(bt => bt.ServiceTypeBookings)
               .OrderBy(s => s.Id);
            return await mapper(bookings).ToListAsync(cancellationToken);
        }

        public async Task<Booking> GetBookingByIdAsync(int bookingId)
        {
            return await _context.Set<Booking>().FindAsync(bookingId);
        }

        public async Task<Booking> GetBookingBySlugAsync(string slug, CancellationToken cancellationToken = default)
        {
            return await _context.Set<Booking>()
             .FirstOrDefaultAsync(a => a.UrlSlug == slug, cancellationToken);
        }

        public async Task<IList<BookingItem>> GetBookingNotRequiredAsync(CancellationToken cancellationToken = default)
        {
            IQueryable<Booking> bookings = _context.Set<Booking>();
            return await bookings.OrderBy(b => b.Name).Select(b => new BookingItem()
            {
                Id = b.Id,
                Name = b.Name,
                UrlSlug = b.UrlSlug,
                Email = b.Email,
                PhoneNumber = b.PhoneNumber,
                BookingDate = b.BookingDate,
                PriceTotal = b.PriceTotal,
                NoteMessage = b.NoteMessage
            }).ToListAsync(cancellationToken);
        }

        public async Task<Booking> GetCachedBookingBySlugAsync(string slug, CancellationToken cancellationToken = default)
        {
            return await _memoryCache.GetOrCreateAsync(
                $"booking.by-slug.{slug}", async (entry) =>
          {
              entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(30);
              return await GetBookingBySlugAsync(slug, cancellationToken);
          });
        }

        public async Task<IPagedList<T>> GetPagedBookingAsync<T>(BookingQuery query, IPagingParams pagingParams, 
            Func<IQueryable<Booking>, IQueryable<T>> mapper, CancellationToken cancellationToken = default)
        {
            IQueryable<Booking> bookingFindQuery = FilterBooking(query);
            IQueryable<T> queryResult = mapper(bookingFindQuery);
            return await queryResult.ToPagedListAsync(pagingParams, cancellationToken);
        }

        private IQueryable<Booking> FilterBooking(BookingQuery query)
        {
            IQueryable<Booking> bookingQuery = _context.Set<Booking>()
               .Include(s => s.ServiceTypeBookings);
            {
                if (!string.IsNullOrEmpty(query.Name))
                {
                    bookingQuery = bookingQuery.Where(bt => bt.Name.Contains(query.Name)
                    || bt.Email.Contains(query.Name)
                    || bt.PhoneNumber.Contains(query.PhoneNumber)
                    || bt.BookingDate.ToString() == query.BookingDate.ToString()
                    || bt.PriceTotal.Contains(query.PriceTotal)
                    || bt.UrlSlug.Contains(query.Name));
                }
                if (!string.IsNullOrWhiteSpace(query.Email))
                {
                    bookingQuery = bookingQuery.Where(b => b.Email == query.Email);
                }
				if (!string.IsNullOrWhiteSpace(query.PhoneNumber))
				{
					bookingQuery = bookingQuery.Where(b => b.PhoneNumber == query.PhoneNumber);
				}
				return bookingQuery;
            }
        }

        public async Task<bool> IsBookingSlugExistedAsync(int bookingId, string slug, CancellationToken cancellationToken = default)
        {
            return await _context.Bookings
                .AnyAsync(x => x.Id != bookingId && x.UrlSlug == slug, cancellationToken);
        }

		public async Task<int> CountTotalBookingAsync(CancellationToken cancellationToken = default)
		{
            return await _context.Set<Booking>().CountAsync(cancellationToken);
		}
	}
}