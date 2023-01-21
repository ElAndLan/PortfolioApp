namespace PortfolioApp.Contracts.ECommerce
{
    public record UpdateProductRequest(
        string name,
        string description,
        double price,
        int quantity,
        string url,
        string tags,
        string? reviews
    );
}
