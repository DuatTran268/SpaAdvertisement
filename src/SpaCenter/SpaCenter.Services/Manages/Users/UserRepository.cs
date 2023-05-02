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

namespace SpaCenter.Services.Manages.Users
{
	public class UserRepository : IUserRepository
	{
		private readonly SpaDbContext _context;
		private readonly IMemoryCache _memoryCache;

		public UserRepository(SpaDbContext context, IMemoryCache memoryCache)
		{
			_context = context;
			_memoryCache = memoryCache;
		}

		public async Task<IList<UserItem>> GetUserNotRequired(CancellationToken cancellationToken = default)
		{
			IQueryable<User> user = _context.Set<User>();
			return await user.OrderBy(u => u.FullName).Select(u => new UserItem()
			{
				Id = u.Id,
				FullName = u.FullName,
				UrlSlug = u.UrlSlug,
				Email = u.Email

			}).ToListAsync(cancellationToken);
		}

		// get user required
		public async Task<IPagedList<UserItem>> GetPagedUserAsync(IPagingParams pagingParams, string fullName = null, string email = null, CancellationToken cancellationToken = default)
		{
			return await _context.Set<User>()
				.AsNoTracking()
				.WhereIf(!string.IsNullOrWhiteSpace(fullName),
				 u => u.FullName.Contains(fullName))
				.WhereIf(!string.IsNullOrWhiteSpace(email),
				u => u.Email.Contains(email))
				.Select(u => new UserItem()
				{
					Id = u.Id,
					FullName = u.FullName,
					UrlSlug = u.UrlSlug,
					Email = u.Email,

				}).ToPagedListAsync(pagingParams, cancellationToken);
		}
		// get user by id
		public async Task<User> GetUserByIdAsync(int userId)
		{
			return await _context.Set<User>().FindAsync(userId);
		}
		public async Task<User> GetCachedUserByIdAsync(int userId)
		{
			return await _memoryCache.GetOrCreateAsync($"user.by-id.{userId}",
				(async (entry) =>
				{
					entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(30);
					return await this.GetUserByIdAsync(userId);
				}));
		}

		// create or update author
		public async Task<bool> CreateOrUpdateUserAsync(User user, CancellationToken cancellationToken = default)
		{
			if (user.Id > 0) 
			{
				_context.Users.Update(user);
				_memoryCache.Remove($"user.by-id.{user.Id}");
			}
			else
			{
				_context.Users.Add(user);
			}
			return await _context.SaveChangesAsync(cancellationToken) > 0;
		}

		public async Task<bool> CheckSlugExistedAsync(int userId, string slug, CancellationToken cancellationToken = default)
		{
			return await _context.Users
				.AnyAsync(u => u.Id != userId && u.UrlSlug == slug, cancellationToken);
		}

		public async Task<bool> DeleteUserByIdAsync(int userId, CancellationToken cancellationToken = default)
		{
			return await _context.Users
				.Where(u => u.Id == userId)
				.ExecuteDeleteAsync(cancellationToken) > 0;
		}
	}
}
