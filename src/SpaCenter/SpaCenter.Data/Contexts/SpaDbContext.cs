using Microsoft.EntityFrameworkCore;

namespace SpaCenter.Data.Contexts
{
    public class SpaDbContext : DbContext
    {
        public SpaDbContext()
        {
        }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.ApplyConfigurationsFromAssembly(
        //        typeof(CategoryMap).Assembly);
        //}
    }
}
