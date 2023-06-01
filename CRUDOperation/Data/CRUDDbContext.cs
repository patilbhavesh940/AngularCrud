using CRUDOperation.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUDOperation.Data
{
    public class CRUDDbContext : DbContext
    {
        public CRUDDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
    }
}
