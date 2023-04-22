using Mapster;
using SpaCenter.Core.Entities;
using SpaCenter.WebApi.Models.Roles;

namespace SpaCenter.API.Mapsters

{
    public class MapsterConfiguration : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.NewConfig<Role, RoleDto>();





		}
	}
}
