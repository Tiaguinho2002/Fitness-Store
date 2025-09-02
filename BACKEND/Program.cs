using Microsoft.EntityFrameworkCore;
using SmartSystem.Data;
using MySql.EntityFrameworkCore.Extensions;
using SmartSystem.Services;
using SmartSystem.Models;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

MercadoPago.Config.MercadoPagoConfig.AccessToken = "TEST-6247168726016538-073010-da7ad956f12e2f712d036b07a4850136-522712470";

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        // Esta linha configura o serializador para usar camelCase
        options.JsonSerializerOptions.PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase;
    });

builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddTransient<TokenService>();
builder.Services.AddTransient<UserService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddSingleton<IConfiguration>(builder.Configuration);
builder.Services.AddHttpClient();

var connectionString = builder.Configuration.GetConnectionString("AppDbConnectionString");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySQL(connectionString));

var app = builder.Build();

app.MapGet("/user", (IUserService service) => 
{
    var newUser = new User 
    { 
        Id = 1,
        Email = "teste@teste.com",
        PasswordHash = "hashed_password",
        Roles = new[] { "student", "premium" }
    };
    return newUser;
});

app.MapPost("/register", (UserRegister userRegister, IUserService userService) =>
{
    var result = userService.Create(userRegister);
    
    return Results.Ok(result);
});


// Habilitar o middleware CORS
app.UseCors("AllowAllOrigins");


if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
