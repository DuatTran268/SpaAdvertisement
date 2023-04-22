﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.Data.Contexts;
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
	}
}
