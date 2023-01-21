global using PortfolioApp.Models;
global using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using PortfolioApp;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddTransient<DataSeeder>();
builder.Services.AddDbContext<ProductContext>(options =>
{
    options.UseSqlite(
        builder.Configuration.GetConnectionString("Ecommerce") ?? "Data Source=ECommerce.db"
    );
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "CorsPolicy",
        builder => builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader()
    );
});
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc(
        "v1",
        new OpenApiInfo
        {
            Title = "E-Commerce Project API",
            Description = "E-Commerce project for NJS portfolio",
            Version = "v1"
        }
    );
});

var app = builder.Build();

if (args.Length == 1 && args[0].ToLower() == "seeddata")
    SeedData(app);

void SeedData(IHost app)
{
    var scopedFactory = app.Services.GetService<IServiceScopeFactory>();

    using (var scope = scopedFactory.CreateScope())
    {
        var service = scope.ServiceProvider.GetService<DataSeeder>();
        service.Seed();
    }
}


{
    app.UseCors("CorsPolicy");
    app.UseHttpsRedirection();
    app.UseAuthorization();
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "E-Commerce API V1");
    });
    app.UseExceptionHandler("/error");
    app.UseHttpsRedirection();
    app.MapControllers();
    app.Run();
}
