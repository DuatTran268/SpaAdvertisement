using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SpaCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Data.Mappings;

public class ServiceTypeMap : IEntityTypeConfiguration<ServiceType>
{
	public void Configure(EntityTypeBuilder<ServiceType> builder)
	{
		builder.ToTable("ServiceTypes");

		builder.HasKey(st => st.Id);

		builder.Property(st => st.Name)
			.HasMaxLength(200)
			.IsRequired();

		builder.Property(st => st.UrlSlug)
			.HasMaxLength(200)
			.IsRequired();

		builder.Property(st => st.ImageUrl)
			.HasMaxLength(200);

		builder.Property(st => st.ShortDescription)
			.HasMaxLength(100)
			.IsRequired();

		builder.Property(st => st.Description)
			.HasMaxLength(100)
			.IsRequired();

		builder.Property(st => st.Price)
			.HasMaxLength(100)
			.IsRequired();

		builder.Property(st => st.Status)
			.IsRequired()
			.HasDefaultValue(false);

		builder.HasOne(st => st.Service)
			.WithMany(s => s.ServiceTypes)
			.HasForeignKey(st => st.ServiceId)
			.HasConstraintName("FK_ServiceTypes_Services")
			.OnDelete(DeleteBehavior.Cascade);


	}
}
