using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SpaCenter.Core.Entities;

namespace SpaCenter.Data.Contexts
{
    public class SpaDbContext : IdentityDbContext<User>
    {
        #region DbSet

        public DbSet<Product> Products { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<TypeService> Types { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Schedule> Schedules { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<SupportCustomer> SupportCustomers { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }

        #endregion DbSet

        public SpaDbContext(DbContextOptions options) : base(options)
        {
        }

        public SpaDbContext()
        {
        }

        public static SpaDbContext Create()
        {
            return new SpaDbContext();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.ApplyConfigurationsFromAssembly(typeof(Service).Assembly);
            //modelBuilder.Entity<IdentityUserRole>().HasKey(i => new { i.UserId, i.RoleId }).ToTable("UserRoles");
            base.OnModelCreating(modelBuilder);
        }
    }
}