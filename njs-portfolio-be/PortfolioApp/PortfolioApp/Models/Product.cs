using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace PortfolioApp.Models
{
    public class Product
    {
        public Product()
        {
        }

        public Product(
            Guid id,
            string name,
            string description,
            double price,
            int quantity,
            string url,
            string tags,
            string? reviews
        )
        {
            this.id = id;
            this.name = name;
            this.description = description;
            this.price = price;
            this.quantity = quantity;
            this.url = url;
            this.tags = tags;
            this.reviews = reviews;
        }

        public Guid id { get; set; }
        [Required(ErrorMessage = "Name of Product is required!")]
        public string name { get; set; }

        [Required(ErrorMessage = "Description of Product is required!")]
        public string description { get; set; }
        
        [Range(1, 1000, ErrorMessage = "Price must be between $1 and $1,000")]
        public double price { get; set; }
        public int quantity { get; set; }
        public string url { get; set; }
        public string tags { get; set; }
        public string? reviews { get; set; }
    }

    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; } = null!;
    }
}
