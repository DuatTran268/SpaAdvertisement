using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SpaCenter.Core.Contracts;
using SpaCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Data.Mappings;

public class UserMap : IEntityTypeConfiguration<User>
{
	public void Configure(EntityTypeBuilder<User> builder)
	{
		builder.ToTable("Users");

		builder.HasKey(u => u.Id);

		builder.Property(u => u.FullName)
			.IsRequired()
			.HasMaxLength(100);

		builder.Property(u => u.Password)
			.IsRequired()
			.HasMaxLength(20);

		builder.Property(u => u.Email)
			.IsRequired()
			.HasMaxLength(100);

		builder.HasOne(u => u.Role)
			.WithMany(r => r.Users)
			.HasForeignKey(u => u.RoleId)
			.HasConstraintName("FK_Users_Roles")
			.OnDelete(DeleteBehavior.Cascade);


	}
}
