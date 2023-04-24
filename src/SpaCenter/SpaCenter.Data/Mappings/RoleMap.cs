using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SpaCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Data.Mappings;

public class RoleMap : IEntityTypeConfiguration<Role>
{
	public void Configure(EntityTypeBuilder<Role> builder)
	{
		builder.ToTable("Role");

		builder.HasKey(r => r.Id);

		builder.Property(r => r.Name)
			.IsRequired()
			.HasMaxLength(50);

		builder.Property(r => r.ShortDescription)
		.IsRequired()
		.HasMaxLength(100);

	}
}
