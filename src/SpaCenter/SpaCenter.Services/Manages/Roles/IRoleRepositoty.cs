using SpaCenter.Core.DTO;
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
	}
}
