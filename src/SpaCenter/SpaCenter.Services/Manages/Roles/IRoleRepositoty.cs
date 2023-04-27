using SpaCenter.Core.DTO;
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
