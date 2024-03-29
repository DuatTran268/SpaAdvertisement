﻿using Mapster;
using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using SpaCenter.WebApi.Models.Bookings;
using SpaCenter.WebApi.Models.Roles;
using SpaCenter.WebApi.Models.Services;
using SpaCenter.WebApi.Models.ServiceTypeBookings;
using SpaCenter.WebApi.Models.ServiceTypes;
using SpaCenter.WebApi.Models.Supports;
using SpaCenter.WebApi.Models.Users;

namespace SpaCenter.API.Mapsters

{
    public class MapsterConfiguration : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.NewConfig<UserEditModel, User>();
            config.NewConfig<User, UserItem>()
                .Map(dest => dest.Id, src => src.Id);

            config.NewConfig<Role, RoleDto>();

            config.NewConfig<Service, ServiceDto>();
            config.NewConfig<Service, ServiceItem>()
                .Map(dest => dest.Id, src => src.Id);
            //.Map(dest => dest.FavoredCount,
            //src => src.ServiceTypes == null ? 0 : src.ServiceTypes.Count);
            config.NewConfig<ServiceEditModel, Service>()
                .Ignore(dest => dest.ServiceTypes);

            config.NewConfig<ServiceType, ServiceTypeDto>();
            config.NewConfig<ServiceType, ServiceTypeDetail>();
            config.NewConfig<ServiceType, ServiceTypeItem>()
                .Map(dest => dest.Id, src => src.Id);
            config.NewConfig<ServiceTypeEditModel, ServiceType>();

            // config support
            config.NewConfig<Support, SupportDto>();
            config.NewConfig<Support, SupportItem>()
                .Map(dest => dest.Id, src => src.Id);
            config.NewConfig<SupportEditModel, Support>();
            config.NewConfig<Booking, BookingItem>()
                .Map(dest => dest.Id, src => src.Id);
            config.NewConfig<Booking, BookingDto>();
            config.NewConfig<BookingEditModel, Booking>();

            config.NewConfig<ServiceTypeBooking, STBookingDto>();
            config.NewConfig<ServiceTypeBooking, STypeBookingItem>()
                .Map(dest => dest.Id, src => src.Id);
            config.NewConfig<STBookingEditModel, ServiceTypeBooking>();


        }
    }
}