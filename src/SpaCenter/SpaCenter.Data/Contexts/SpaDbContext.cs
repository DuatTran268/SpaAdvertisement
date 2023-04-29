using Microsoft.EntityFrameworkCore;
using SpaCenter.Core.Entities;
using SpaCenter.Data.Mappings;

namespace SpaCenter.Data.Contexts;

public class SpaDbContext : DbContext
{
    public DbSet<Role> Roles { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Booking> Bookings { get; set; }
    public DbSet<Service> Services { get; set; }
    public DbSet<ServiceType> ServiceTypes { get; set; }
    public DbSet<ServiceTypeBooking> ServiceTypesBooking { get; set; }
    public DbSet<Support> Supports { get; set; }

    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //{
    //	optionsBuilder.UseSqlServer("Server=DESKTOP-JS68JVN\\SQLEXPRESS;Database=SpaCenter;Trusted_Connection=true;MultipleActiveResultSets=true;TrustServerCertificate=True");

    //}

    public SpaDbContext(DbContextOptions<SpaDbContext> options) : base(options)
    {
    }

    public SpaDbContext()
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ServiceMap).Assembly);
    }
}