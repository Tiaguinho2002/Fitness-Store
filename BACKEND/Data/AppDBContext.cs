using Microsoft.EntityFrameworkCore;
using SmartSystem.Models;

namespace SmartSystem.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }
        public DbSet<EnderecoClientesEntrega> EnderecoClientes { get; set; }
        public DbSet<User> Users { get; internal set; }

    }
}