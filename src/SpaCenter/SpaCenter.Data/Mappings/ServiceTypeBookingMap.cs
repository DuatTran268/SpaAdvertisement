using Azure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SpaCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Data.Mappings;

public class ServiceTypeBookingMap : IEntityTypeConfiguration<ServiceTypeBooking>
{
	public void Configure(EntityTypeBuilder<ServiceTypeBooking> builder)
	{
		builder.ToTable("ServiceTypeBookings");

		builder.HasKey(sb => sb.Id);

		builder.Property(sb => sb.UserNumber)
			.IsRequired()
			.HasDefaultValue(0);

		builder.Property(sb => sb.Price)
			.IsRequired()
			.HasMaxLength(20);

		builder.HasOne(sb => sb.ServiceType)
			.WithMany(s => s.ServiceTypeBookings)
			.HasForeignKey(sb => sb.ServiceTypeId)
			.HasConstraintName("FK_ServiceTypeBookings_ServiceTypes")
			.OnDelete(DeleteBehavior.Cascade);

		builder.HasOne(sb => sb.Booking)
			.WithMany(b => b.ServiceTypeBookings)
			.HasForeignKey(sb => sb.BookingId)
			.HasConstraintName("FK_ServiceTypeBookings_Bookings")
			.OnDelete(DeleteBehavior.Cascade);


	}
}
