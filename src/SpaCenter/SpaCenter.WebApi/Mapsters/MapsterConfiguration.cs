using Mapster;
using SpaCenter.Core.Entities;
using SpaCenter.WebApi.Models.Roles;
using SpaCenter.WebApi.Models.Services;

namespace SpaCenter.API.Mapsters

{
    public class MapsterConfiguration : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.NewConfig<Role, RoleDto>();
            config.NewConfig<Service, ServiceDto>();
        }
    }
}