using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.Data.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Services.Manages.Supports
{
	public class SupportRepository : ISupportRepository
	{
		private readonly SpaDbContext _context;
		private readonly IMemoryCache _memoryCache;

		public SupportRepository(SpaDbContext context, IMemoryCache memoryCache)
		{
			_context = context;
			_memoryCache = memoryCache;
		}
		// write code
		public async Task<IList<SupportItem>> GetSupportNotRequiredAsync(CancellationToken cancellationToken = default)
		{
			IQueryable<Support> supports = _context.Set<Support>();
			return await supports.OrderBy(sp => sp.FullName)
				.Select(sp => new SupportItem()
				{
					Id = sp.Id,
					FullName = sp.FullName,
					PhoneNumber = sp.PhoneNumber,
					Status = sp.Status
				}).ToListAsync(cancellationToken);
		}
		public async Task<Support> GetSupportByIdAsync(int supportId)
		{
			return await _context.Set<Support>().FindAsync(supportId);

		}
		public async Task<Support> GetCachedSupportByIdAsync(int supportId)
		{
			return await _memoryCache.GetOrCreateAsync($"support.by-id.{supportId}",
				(async (entry) =>
				{
					entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(30);
					return await this.GetSupportByIdAsync(supportId);
				}));
		}

	}
}
