<<<<<<< HEAD
﻿using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;

namespace SpaCenter.Services.Manages.Roles
{
    public interface IRoleRepositoty
    {
        // get role not required
        Task<IList<RoleItem>> GetRoleNotRequired(
            CancellationToken cancellationToken = default);

        // get role by Id
        Task<Role> GetRoleByIdAsync(int roleId);

        Task<Role> GetCachedRoleByIdAsync(int roleId);
    }
}
=======
﻿using SpaCenter.Core.Contracts;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Services.Manages.Roles
{
	public interface IRoleRepositoty
	{
		// get role not required
		Task<IList<RoleItem>> GetRoleNotRequired(
			CancellationToken cancellationToken = default);
		// get role by Id
		Task<Role> GetRoleByIdAsync(int roleId);
		Task<Role> GetCachedRoleByIdAsync(int roleId);


	}
}
>>>>>>> f56841d4a1268554318c6a6b0eb418906236845b
