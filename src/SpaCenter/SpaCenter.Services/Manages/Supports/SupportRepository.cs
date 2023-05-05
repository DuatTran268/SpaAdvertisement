using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using SpaCenter.Core.Contracts;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.Data.Contexts;
using SpaCenter.Services.Extensions;
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

		//public async Task<IPagedList<T>> GetPagedSupportAsync<T>(SupportQuery query, IPagingParams pagingParams, Func<IQueryable<Support>, IQueryable<T>> mapper, CancellationToken cancellationToken = default)
		//{
		//	IQueryable<Support> supportFindQuery = FilterSupport(query);
		//	IQueryable<T> queryResult = mapper(supportFindQuery);
		//	return await queryResult.ToPagedListAsync(pagingParams, cancellationToken);
		//}
		//private IQueryable<Support> FilterSupport(SupportQuery query)
		//{
		//	IQueryable<Support> supportQuery = _context.Set<Support>();
		//	if (!string.IsNullOrEmpty(query.FullName))
		//	{
		//		supportQuery = supportQuery.Where(sp => sp.FullName
		//		.Contains(query.FullName)
		//		|| sp.UrlSlug.Contains(query.SupportSlug)
		//		);
		//	}
		//	if (!string.IsNullOrWhiteSpace(query.SupportSlug))
		//	{
		//		supportQuery = supportQuery.Where(sp => sp.UrlSlug == query.SupportSlug);
		//	}

		//	return supportQuery;
		//}

		public async Task<IPagedList<SupportItem>> GetSupportPagedAsync(
			IPagingParams pagingParams,
			string fullName = null, 
			string phoneNumber = null, 
			CancellationToken cancellationToken = default)
		{
			return await _context.Set<Support>()
				.AsNoTracking()
				.WhereIf(!string.IsNullOrWhiteSpace(fullName), 
				sp => sp.FullName.Contains(fullName))
				.WhereIf(!string.IsNullOrWhiteSpace(phoneNumber),
				sp => sp.PhoneNumber.Contains(phoneNumber))
				.Select(sp => new SupportItem()
				{
					Id= sp.Id,
					FullName= sp.FullName,
					PhoneNumber = sp.PhoneNumber,
					Status = sp.Status,
				}).ToPagedListAsync(pagingParams, cancellationToken);
		}

		public async Task<bool> AddOrUpdateSupportAsync(Support support, CancellationToken cancellationToken = default)
		{
			if (support.Id > 0)
			{
				_context.Supports.Update(support);
				_memoryCache.Remove($"support.by-id.{support.Id}");
			}
			else
			{
				_context.Supports.Add(support);
			}

			return await _context.SaveChangesAsync(cancellationToken) > 0;
		}

		public async Task<bool> DeleteSupportAsync(int supportId, CancellationToken cancellationToken = default)
		{
			return await _context.Supports.Where(x => x.Id == supportId)
				.ExecuteDeleteAsync(cancellationToken) > 0;
		}

		//get id
		public async Task<Support> GetCallSupportIdAsync(int supportId, bool includeDetails = false, CancellationToken cancellationToken = default)
		{
			if (!includeDetails)
			{
				return await _context.Set<Support>().FindAsync(supportId);
			}

			return await _context.Set<Support>().Where(x => x.Id == supportId)
				.FirstOrDefaultAsync(cancellationToken);
		}

		// change call status
		public async Task ChangeCallStatusAsync(int supportId, CancellationToken cancellationToken = default)
		{
			await _context.Set<Support>().Where(sp => sp.Id == supportId)
				.ExecuteUpdateAsync(sc => sc.SetProperty(st => st.Status, st => !st.Status), cancellationToken);
		}

		public async Task<int> CountNeedSupportCustomer(CancellationToken cancellationToken = default)
		{
			return await _context.Set<Support>().CountAsync(cancellationToken);
		}
	}
}
