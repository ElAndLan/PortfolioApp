namespace PortfolioApp.Contracts.ECommerce
{
    public record CreateProductRequest(
        string name,
        string description,
        double price,
        int quantity,
        string url,
        string tags,
        string? reviews
    );
}
