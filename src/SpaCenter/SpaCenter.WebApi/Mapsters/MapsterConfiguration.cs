﻿using Mapster;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.WebApi.Models.Roles;
using SpaCenter.WebApi.Models.Services;
using SpaCenter.WebApi.Models.ServiceTypes;
using SpaCenter.WebApi.Models.Users;

namespace SpaCenter.API.Mapsters

{
    public class MapsterConfiguration : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.NewConfig<User, UserItem>()
                .Map(dest => dest.Id, src => src.Id);
            config.NewConfig<Role, RoleDto>();

            config.NewConfig<UserEditModel, User>();
            config.NewConfig<Service, ServiceDto>();
            config.NewConfig<Service, ServiceItem>()
                .Map(dest => dest.FavoredCount,
                src => src.ServiceTypes == null ? 0 : src.ServiceTypes.Count);
            config.NewConfig<ServiceEditModel, Service>();

            config.NewConfig<ServiceType, ServiceTypeDto>();
            config.NewConfig<ServiceType, ServiceTypeItem>()
                .Map(dest => dest.Id, src => src.Id);
            config.NewConfig<ServiceTypeEditModel, ServiceType>();
        }
    }
}