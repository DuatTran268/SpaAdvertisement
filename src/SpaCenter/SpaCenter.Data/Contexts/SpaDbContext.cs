using Microsoft.EntityFrameworkCore;

namespace SpaCenter.Data.Contexts
{
    public class SpaDbContext : DbContext
    {
        public SpaDbContext(DbContextOptions options) : base(options) { }

        #region DbSet
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.ApplyConfigurationsFromAssembly(
            //    typeof().Assembly);
        }
        #endregion

    }
}
