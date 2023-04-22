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

		// get user by id
		Task<User> GetUserByIdAsync(int userId);
		Task<User> GetCachedUserByIdAsync(int userId);
	
	
	}
}
