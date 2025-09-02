using Microsoft.AspNetCore.Mvc;
using SmartSystem.Models;
using System.Threading.Tasks;


[ApiController]
[Route("api/[controller]")] // 
public class AuthController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IConfiguration _config;

    public AuthController(IUserService userService, IConfiguration config)
    {
        _userService = userService;
        _config = config;
    }

    [HttpPost("register")] 
    public async Task<IActionResult> Register([FromBody] UserRegister userRegister)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var user = await _userService.Create(userRegister);
        if (user == null)
        {
            return BadRequest("O e-mail já está em uso.");
        }

        var token = _userService.GenerateToken(user);
        return Ok(new { Token = token, user.Email });
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] UserLogin userLogin)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var user = await _userService.Authenticate(userLogin);
        if (user == null)
        {
            return Unauthorized("Credenciais inválidas.");
        }

        var token = _userService.GenerateToken(user);
        return Ok(new { Token = token, user.Email });
    }
}