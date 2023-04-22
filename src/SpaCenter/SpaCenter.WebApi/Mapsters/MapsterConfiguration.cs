using Mapster;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.WebApi.Models.Roles;
using SpaCenter.WebApi.Models.Users;

namespace SpaCenter.API.Mapsters

{
    public class MapsterConfiguration : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.NewConfig<Role, RoleDto>();

            config.NewConfig<User, UserItem>()
                .Map(dest => dest.Id, src => src.Id);

            config.NewConfig<UserEditModel, User>();





		}
	}
}
