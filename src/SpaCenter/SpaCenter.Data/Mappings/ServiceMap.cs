using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SpaCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Data.Mappings;

public class ServiceMap : IEntityTypeConfiguration<Service>
{
	public void Configure(EntityTypeBuilder<Service> builder)
	{
		// table name
		builder.ToTable("Services");

		// id la khoa chinh
		builder.HasKey(s => s.Id);

		builder.Property(s => s.Name)
			.IsRequired()
			.HasMaxLength(200);

		builder.Property(s => s.UrlSlug)
			.IsRequired()
			.HasMaxLength(200);

		builder.Property(s => s.ShortDescription)
			.IsRequired()
			.HasMaxLength(500);

		builder.Property(s => s.Status)
			.IsRequired()
			.HasDefaultValue(false);
	}
}
