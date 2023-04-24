using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SpaCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Data.Mappings;

public class BookingMap : IEntityTypeConfiguration<Booking>
{
	public void Configure(EntityTypeBuilder<Booking> builder)
	{
		builder.ToTable("Bookings");

		builder.HasKey(b => b.Id);

		builder.Property(b => b.Name)
			.HasMaxLength(500)
			.IsRequired();

		builder.Property(b => b.Email)
			.HasMaxLength(100)
			.IsRequired();

		builder.Property(b => b.UrlSlug)
			.HasMaxLength(100)
			.IsRequired();

		builder.Property(b => b.PhoneNumber)
			.HasMaxLength(100)
			.IsRequired();

		builder.Property(b => b.BookingDate)
			.HasColumnName("datetime");

		builder.Property(b => b.NoteMessage)
			.HasMaxLength(200)
			.IsRequired();

		builder.Property(b => b.PriceTotal)
			.HasMaxLength(30)
			.IsRequired();

		builder.Property(b => b.Status)
			.IsRequired()
			.HasDefaultValue(false);

		builder.HasOne(b => b.User)
			.WithMany(u => u.Bookings)
			.HasForeignKey(b => b.UserId)
			.HasConstraintName("FK_Bookings_Users")
			.OnDelete(DeleteBehavior.Cascade);

	}
}
