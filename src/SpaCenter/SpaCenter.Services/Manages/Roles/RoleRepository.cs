﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.Data.Contexts;

namespace SpaCenter.Services.Manages.Roles
{
    public class RoleRepository : IRoleRepositoty
    {
        private readonly SpaDbContext _context;
        private readonly IMemoryCache _memoryCache;

        public RoleRepository(SpaDbContext context, IMemoryCache memoryCache)
        {
            _context = context;
            _memoryCache = memoryCache;
        }

        // get role not required
        public async Task<IList<RoleItem>> GetRoleNotRequired(CancellationToken cancellationToken = default)
        {
            IQueryable<Role> user = _context.Set<Role>();
            return await user.OrderBy(d => d.Name).Select(d => new RoleItem()
            {
                Id = d.Id,
                Name = d.Name,
                ShortDescription = d.ShortDescription,
            }).ToListAsync(cancellationToken);
        }

        // get by id

        public async Task<Role> GetCachedRoleByIdAsync(int authorId)
        {
            return await _memoryCache.GetOrCreateAsync(
            $"role.by-id.{authorId}",
            (async (entry) =>
            {
                entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(30);
                return await this.GetRoleByIdAsync(authorId);
            }));
        }

        public async Task<Role> GetRoleByIdAsync(int roleId)
        {
            return await _context.Set<Role>().FindAsync(roleId);
        }
    }
}