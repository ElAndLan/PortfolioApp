using Microsoft.AspNetCore.Mvc;

namespace PortfolioApp.Controllers;

public class ErrorsController : ControllerBase
{
    [Route("/error")]
    [HttpGet]
    public IActionResult Error()
    {
        return Problem();
    }
}
