
namespace PortfolioApp.Contracts.ECommerce
{
    public record ProductResponse(
        Guid id,
        string name,
        string description,
        double price,
        int quantity,
        string url,
        string tags,
        string? reviews
    );
}
