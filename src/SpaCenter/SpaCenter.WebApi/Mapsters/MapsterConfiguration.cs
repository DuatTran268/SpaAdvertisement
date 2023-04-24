using Mapster;
<<<<<<< HEAD
using SpaCenter.Core.Entities;
using SpaCenter.WebApi.Models.Roles;
using SpaCenter.WebApi.Models.Services;
=======
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.WebApi.Models.Roles;
using SpaCenter.WebApi.Models.Users;
>>>>>>> f56841d4a1268554318c6a6b0eb418906236845b

namespace SpaCenter.API.Mapsters

{
    public class MapsterConfiguration : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.NewConfig<Role, RoleDto>();
<<<<<<< HEAD
            config.NewConfig<Service, ServiceDto>();
        }
    }
}
=======

            config.NewConfig<User, UserItem>()
                .Map(dest => dest.Id, src => src.Id);

            config.NewConfig<UserEditModel, User>();





		}
	}
}
>>>>>>> f56841d4a1268554318c6a6b0eb418906236845b
