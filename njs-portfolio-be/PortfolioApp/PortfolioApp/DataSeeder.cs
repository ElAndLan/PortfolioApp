using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using PortfolioApp.Models;
using SQLitePCL;

namespace PortfolioApp
{
    public class DataSeeder
    {
        private readonly ProductContext context;

        public DataSeeder(ProductContext context)
        {
            this.context = context;
        }

        public void Seed()
        {
            if (!context.Products.Any())
            {
                var products = new List<Product>()
                {
                    new Product()
                    {
                        id = Guid.NewGuid(),
                        name = "Google Pixel 6a",
                        description =
                            "The newest Google Pixel 6a. This is a dummy description made to test the layout.",
                        price = 364,
                        quantity = 7,
                        url = "https://m.media-amazon.com/images/I/61ePWSuIfwL._AC_SX679_.jpg",
                        tags = "Android, Google, Pixel"
                    },
                    new Product()
                    {
                        id = Guid.NewGuid(),
                        name = "Apple iPhone 12 Mini",
                        description =
                            "The newest iPhone Mini. This is a dummy description made to test the layout.",
                        price = 590.32,
                        quantity = 5,
                        url = "https://m.media-amazon.com/images/I/71sNNCTfMuL._FMwebp__.jpg",
                        tags = "Apple, iPhone, Mini"
                    },
                    new Product()
                    {
                        id = Guid.NewGuid(),
                        name = "Samsung Galaxy S21",
                        description =
                            "The newest Galaxy S21. This is a dummy description made to test the layout.",
                        price = 285.29,
                        quantity = 2,
                        url = "https://m.media-amazon.com/images/I/61jYjeuNUnL._AC_SL1000_.jpg",
                        tags = "Samsung, Galaxy, S21, Android"
                    },
                    new Product()
                    {
                        id = Guid.NewGuid(),
                        name = "Apple iPhone XR",
                        description =
                            "The newest iPhone XR. This is a dummy description made to test the layout.",
                        price = 227.99,
                        quantity = 4,
                        url = "https://m.media-amazon.com/images/I/51QG+K5RQtL._AC_SX679_.jpg",
                        tags = "Apple, iPhone, XR"
                    },
                    new Product()
                    {
                        id = Guid.NewGuid(),
                        name = "Samsung Galaxy S9",
                        description =
                            "The newest Galaxy S9. This is a dummy description made to test the layout.",
                        price = 184.42,
                        quantity = 13,
                        url = "https://m.media-amazon.com/images/I/616sdK81NnL._AC_SX679_.jpg",
                        tags = "Samsung, Galaxy, S9, Android"
                    },
                    new Product()
                    {
                        id = Guid.NewGuid(),
                        name = "Samsung Galaxy Note 20",
                        description =
                            "The newest Galaxy Note 20. This is a dummy description made to test the layout.",
                        price = 259,
                        quantity = 11,
                        url = "https://m.media-amazon.com/images/I/61SOUv7GCpL._AC_SX679_.jpg",
                        tags = "Samsung, Galaxy, Note, Android"
                    },
                    new Product()
                    {
                        id = Guid.NewGuid(),
                        name = "Tracfone Motorola Moto G Pure",
                        description =
                            "The newest Motorola G Pure. This is a dummy description made to test the layout.",
                        price = 59.88,
                        quantity = 35,
                        url = "https://m.media-amazon.com/images/I/71zGrrAe5NL._AC_SX679_.jpg",
                        tags = "Motorola, Pure, Moto, Android"
                    },
                    new Product()
                    {
                        id = Guid.NewGuid(),
                        name = "Moto G Power",
                        description =
                            "The newest Motorola G Power. This is a dummy description made to test the layout.",
                        price = 129.99,
                        quantity = 21,
                        url = "https://m.media-amazon.com/images/I/61jKxwxAZFL._AC_SX679_.jpg",
                        tags = "Motorola, Power, Moto, Android"
                    },
                    new Product()
                    {
                        id = Guid.NewGuid(),
                        name = "Samgsung Galaxy S20+",
                        description =
                            "The newest Samsung Galaxy S20+. This is a dummy description made to test the layout.",
                        price = 264.00,
                        quantity = 5,
                        url = "https://m.media-amazon.com/images/I/61BgDOd6ViL._AC_SX679_.jpg",
                        tags = "Samsung, Galaxy, S20, Android"
                    },
                    new Product()
                    {
                        id = Guid.NewGuid(),
                        name = "AT&T Trimline 210",
                        description =
                            "The not-so-newest AT&T Trimline Corded Phone. This is a dummy description made to test the layout.",
                        price = 16.95,
                        quantity = 253,
                        url = "https://m.media-amazon.com/images/I/61CGjxg6HXL._AC_SX679_.jpg",
                        tags = "AT&T, Home, Corded"
                    },
                    new Product()
                    {
                        id = Guid.NewGuid(),
                        name = "Samgsung Galaxy S22",
                        description =
                            "The newest Samsung Galaxy S22. This is a dummy description made to test the layout.",
                        price = 1150.50,
                        quantity = 12,
                        url = "https://m.media-amazon.com/images/I/61U6oC65TTL._AC_SX679_.jpg",
                        tags = "Samsung, Galaxy, S22, Android"
                    },
                    new Product()
                    {
                        id = Guid.NewGuid(),
                        name = "Ulefone Note 6",
                        description =
                            "The newest Ulefone Note 6. This is a dummy description made to test the layout.",
                        price = 82.99,
                        quantity = 1,
                        url = "https://m.media-amazon.com/images/I/71lfRMQpQeS._AC_SX679_.jpg",
                        tags = "Ulefone, Note, Android"
                    },
                    new Product()
                    {
                        id = Guid.NewGuid(),
                        name = "Ulefone Note 6",
                        description =
                            "The newest Ulefone Note 6. This is a dummy description made to test the layout.",
                        price = 82.99,
                        quantity = 1,
                        url = "https://m.media-amazon.com/images/I/71lfRMQpQeS._AC_SX679_.jpg",
                        tags = "Ulefone, Note, Android"
                    },
                    new Product()
                    {
                        id = Guid.NewGuid(),
                        name = "Blackview A55",
                        description =
                            "The newest Blackview A55. This is a dummy description made to test the layout.",
                        price = 99.99,
                        quantity = 3,
                        url = "https://m.media-amazon.com/images/I/71zasNh3jlL._AC_SX679_.jpg",
                        tags = "Blackview, A55, Android"
                    }
                };

                context.Products.AddRange(products);
                context.SaveChanges();
            }
        }
    }
}
