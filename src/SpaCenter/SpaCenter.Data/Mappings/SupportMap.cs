using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SpaCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Data.Mappings
{
	public class SupportMap : IEntityTypeConfiguration<Support>
	{
		public void Configure(EntityTypeBuilder<Support> builder)
		{
			builder.ToTable("Supports");

			builder.HasKey(sp => sp.Id);

			builder.Property(sp => sp.FullName)
				.IsRequired()
				.HasMaxLength(20);

			builder.Property(sp => sp.UrlSlug)
				.HasMaxLength(20);

			builder.Property(sp => sp.PhoneNumber)
				.IsRequired()
				.HasMaxLength(11);

			builder.Property(sp => sp.Status)
			.IsRequired()
			.HasDefaultValue(false);
		}
	}
}
