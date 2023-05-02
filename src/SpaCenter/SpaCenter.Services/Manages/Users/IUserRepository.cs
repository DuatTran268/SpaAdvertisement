﻿using SpaCenter.Core.Contracts;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Services.Manages.Users
{
	public interface IUserRepository
	{
		Task<IList<UserItem>> GetUserNotRequired(
		CancellationToken cancellationToken = default);

		// get user required
		Task<IPagedList<UserItem>> GetPagedUserAsync(
			IPagingParams pagingParams,
			string fullName = null,
			string email = null,
			CancellationToken cancellationToken = default);


		// get user by id
		Task<User> GetUserByIdAsync(int userId);
		Task<User> GetCachedUserByIdAsync(int userId);
	
		//  add new user
		Task<bool> CreateOrUpdateUserAsync(
			User user, CancellationToken cancellationToken = default);

		// check slug existed ( kiem tra slug da ton tai hay chua)
		Task<bool> CheckSlugExistedAsync(int userId, string slug, CancellationToken cancellationToken = default);
	
		// delete user by id
		Task<bool> DeleteUserByIdAsync(int userId, CancellationToken cancellationToken = default);

	
	}
}
