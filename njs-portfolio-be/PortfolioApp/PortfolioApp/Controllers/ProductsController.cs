using ErrorOr;
using Microsoft.AspNetCore.Mvc;
using PortfolioApp.Contracts.ECommerce;
using PortfolioApp.Models;
using SQLitePCL;

namespace PortfolioApp.Controllers;

public class ProductsController : ApiController
{
    private readonly ProductContext _context;

    public ProductsController(ProductContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<ActionResult<List<Product>>> CreateProduct(CreateProductRequest request)
    {
        var product = new Product(
            Guid.NewGuid(),
            request.name,
            request.description,
            request.price,
            request.quantity,
            request.url,
            request.tags,
            request.reviews
        );
        _context.Products.Add(product);
        await _context.SaveChangesAsync();

        return Ok(await _context.Products.ToListAsync());
    }

    [HttpPut("{id:Guid}")]
    public async Task<ActionResult<List<Product>>> UpdateProduct(
        UpdateProductRequest request,
        Guid id
    )
    {
        var dbProduct = await _context.Products.FindAsync(id);
        if (dbProduct == null)
            return BadRequest("Product not found.");

        dbProduct.name = request.name;
        dbProduct.description = request.description;
        dbProduct.price = request.price;
        dbProduct.quantity = request.quantity;
        dbProduct.url = request.url;
        dbProduct.tags = request.tags;
        dbProduct.reviews = request.reviews;

        return Ok(await _context.Products.ToListAsync());
    }

    [HttpGet("{id:Guid}")]
    public async Task<ActionResult<Product>> GetProduct(Guid id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null)
            return BadRequest("Product not found");
        return Ok(product);
    }

    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetProducts(Guid id)
    {
        return Ok(await _context.Products.ToListAsync());
    }

    [HttpDelete("{id:Guid}")]
    public async Task<ActionResult<List<Product>>> DeleteProduct(Guid id)
    {
        var productToDelete = await _context.Products.FindAsync(id);
        if (productToDelete == null)
            return BadRequest("Product not found.");

        _context.Products.Remove(productToDelete);
        await _context.SaveChangesAsync();
        return Ok(_context.Products.ToListAsync());
    }

    [HttpDelete]
    public async Task<ActionResult<List<Product>>> DeleteProducts()
    {
        _context.Products.RemoveRange(_context.Products);
        await _context.SaveChangesAsync();
        return Ok(_context.Products.ToListAsync());
    }
}
