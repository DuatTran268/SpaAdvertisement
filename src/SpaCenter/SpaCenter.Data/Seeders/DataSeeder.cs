using SpaCenter.Core.Entities;
using SpaCenter.Data.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Data.Seeders;

public class DataSeeder : IDataSeeder
{
	private readonly BlogDbContext _dbContext;

	public DataSeeder(BlogDbContext dbContext)
	{
		_dbContext = dbContext;
	}

	public void Initialize()
	{
		_dbContext.Database.EnsureCreated();

		if (_dbContext.ServiceTypesBooking.Any()) return;


		var roles = AddRoles();
		var services = AddService();
		var serviceType = AddServiceType(services);
		var users = AddUsers(roles);
		var bookings = AddBooking(users);
		var serviceTypeBookings = AddServiceTypeBooking(serviceType, bookings);




	}

	// add role
	private IList<Role> AddRoles()
	{
		var roles = new List<Role>()
		{
			new()
			{
				Name = "admin",
				ShortDescription = "Vai trò là Admin",
			},
			new()
			{
				Name = "user",
				ShortDescription = "Vai trò là User",
			}
		};

		// update database
		foreach (var role in roles)
		{
			if (!_dbContext.Roles.Any(r => r.Name == role.Name))
			{
				_dbContext.Roles.Add(role);
			}
		}
		_dbContext.SaveChanges();
		return roles;
	}

	// add user
	private IList<User> AddUsers(IList<Role> roles)
	{
		var users = new List<User>()
		{
			new()
			{
				FullName = "Admin1",
				Password= "123",
				UrlSlug="admin-1",
				Email="admin@gmail.com",
				Role = roles[0],
				
			},
			new()
			{
				FullName = "DuatAdmin",
				Password= "123",
				UrlSlug="duat-admin",
				Email="duatadmin@gmail.com",
				Role = roles[0],
			
			},
			new()
			{
				FullName = "NhatUser",
				Password= "123456",
				UrlSlug="nhat-user",
				Email="nhatuser@gmail.com",
				Role = roles[1],
				
			},
			new()
			{
				FullName = "DatAdmin",
				Password= "123",
				UrlSlug="datadmin-1",
				Email="datadmin@gmail.com",
				Role = roles[0],
				
			},
			new()
			{
				FullName = "UserABC",
				Password= "123456",
				UrlSlug="user-abc",
				Email="userabc@gmail.com",
				Role = roles[1],
				
			},
		};

		foreach (var user in users)
		{
			if (!_dbContext.Users.Any(u => u.UrlSlug == user.UrlSlug && u.Id == user.Id))
			{
				_dbContext.Users.Add(user);
			}
		}

		_dbContext.SaveChanges();
		return users;

	}

	// add service
	private IList<Service> AddService()
	{
		var services = new List<Service>()
		{
			new()
			{
				Name = "Mụn",
				UrlSlug = "mun",
				ShortDescription = "Điều trị các dịch vụ về mụn"
			},
			new()
			{
				Name = "Da",
				UrlSlug = "da",
				ShortDescription = "Điều trị các dịch vụ về da liễu"
			},
			new()
			{
				Name = "Body",
				UrlSlug = "body",
				ShortDescription = "Điều trị các dịch vụ về body toàn thân"
			},
			new()
			{
				Name = "Mặt",
				UrlSlug = "mat",
				ShortDescription = "Điều trị các dịch vụ về mặt"
			},
		};

		foreach (var service in services)
		{
			if (!_dbContext.Services.Any(s => s.Id == service.Id && s.UrlSlug == service.UrlSlug))
			{
				_dbContext.Services.Add(service);
			}
		}

		_dbContext.SaveChanges();
		return services;
	}

	// add service type
	private IList<ServiceType> AddServiceType(IList<Service> services 
		)
	{
		var serviceTypes = new List<ServiceType>()
		{
			new()
			{
				Name = "Nặn mụn",
				UrlSlug = "nan-mun",
				ImageUrl= null,
				ShortDescription = "Nặn mụn dễ dàng",
				Description = "Nặn mụn dễ dàng nhanh chóng với chúng tôi",
				Price = "200000",
				Status = true,
				Service = services[0],
				
			},
			new()
			{
				Name = "Nặn mụn đầu đen",
				UrlSlug = "nan-mun-dau-den",
				ImageUrl= null,
				ShortDescription = "Nặn mụn đầu đen ở mũi",
				Description = "Nặn mụn đầu đen dễ dàng nhanh chóng với chúng tôi",
				Price = "300000",
				Status = true,
				Service = services[0],
				
			},
			new()
			{
				Name = "Lấy nhân mụn",
				UrlSlug = "lay-nhan-mun",
				ImageUrl= null,
				ShortDescription = "Lấy nhân mụn sạch",
				Description = "Lấy nhân mụn sạch nhanh chóng với chúng tôi",
				Price = "250000",
				Status = true,
				Service = services[0],
				
			},
			new()
			{
				Name = "Da nám",
				UrlSlug = "da-nam",
				ImageUrl= null,
				ShortDescription = "Trị nám da",
				Description = "Trị nám da chuẩn vip nhanh chóng với chúng tôi",
				Price = "600000",
				Status = true,
				Service = services[1],
				
			},
			new()
			{
				Name = "Trắng da",
				UrlSlug = "trang-da",
				ImageUrl= null,
				ShortDescription = "Tắm trắng da ",
				Description = "tắm trắng da với công nghệ cao của chúng tôi",
				Price = "600000",
				Status = true,
				Service = services[1],
				
			},
			new()
			{
				Name = "Body dưỡng sinh",
				UrlSlug = "body-duong-sinh",
				ImageUrl = null,
				ShortDescription = "Massage body ",
				Description = "Massage body toàn thân dưỡng sinh nhanh chóng thư dãn",
				Price = "1500000",
				Status = true,
				Service = services[2],
				
			},
			new()
			{
				Name = "Làm mặt",
				UrlSlug = "lam-mat",
				ImageUrl= null,
				ShortDescription = "Mặt sao làm vậy",
				Description = "Mặt bạn bị sao chúng tôi làm vậy",
				Price = "300000000",
				Status = true,
				Service = services[3],
				
			},
		};

		foreach (var serviceType in serviceTypes)
		{
			if (!_dbContext.ServiceTypes.Any(sb => sb.UrlSlug == serviceType.UrlSlug && sb.Id == serviceType.Id))
			{
				_dbContext.ServiceTypes.Add(serviceType);
			}
		}
		_dbContext.SaveChanges();

		return serviceTypes;
	}
	
	// add booking
	private IList<Booking> AddBooking(IList<User> users)
	{
		var bookings = new List<Booking>()
		{
			new()
			{
				Name = "Tran Duat",
				Email = "tranduat@gmai.com",
				UrlSlug="tran-duat",
				PhoneNumber = "0966668888",
				BookingDate = new DateTime(2023, 5, 21),
				NoteMessage = "Cho tôi dịch vụ vip nhất đeee",
				PriceTotal = "2000000",
				Status = true,
				User = users[1],
			
			},
			new()
			{
				Name = "Minh Nhat",
				Email = "minhnhat@gmai.com",
				UrlSlug="minh-nhat",
				PhoneNumber = "0934748342",
				BookingDate = new DateTime(2023, 8, 22),
				NoteMessage = "Cho tôi dịch vụ vip nhất đeee",
				PriceTotal = "1000000",
				Status = true,
				User = users[2],
				
			},
		};

		foreach (var booking in bookings)
		{
			if (!_dbContext.Bookings.Any(b => b.UrlSlug == b.UrlSlug))
			{
				_dbContext.Bookings.Add(booking);
			}
		}
		_dbContext.SaveChanges();

		return bookings;	
	}

	// add service type booking
	private IList<ServiceTypeBooking> AddServiceTypeBooking(
		IList<ServiceType> serviceTypes,
		IList<Booking> bookings
		)
	{
		var serviceTypeBookings = new List<ServiceTypeBooking>()
		{
			new()
			{
				ServiceType = serviceTypes[0],
				Booking = bookings[0],
				UserNumber = 2,
				Price = "3000000"
			},
			new()
			{
				ServiceType = serviceTypes[0],
				Booking = bookings[1],
				UserNumber = 1,
				Price = "600000"
			},
			new()
			{
				ServiceType = serviceTypes[1],
				Booking = bookings[1],
				UserNumber = 2,
				Price = "200000"
			},
		};

		foreach ( var serviceTypeBooking in serviceTypeBookings) 
		{
			if (!_dbContext.ServiceTypesBooking.Any(sb => sb.Id == serviceTypeBooking.Id))
			{
				_dbContext.ServiceTypesBooking.Add(serviceTypeBooking);
			}
		}

		_dbContext.SaveChanges();
		return serviceTypeBookings;
	}


}
