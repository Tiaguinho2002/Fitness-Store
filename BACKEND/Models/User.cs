
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartSystem.Models
{
        public class User
        {
                public int Id { get; set; }
                public string Email { get; set; }
                public string PasswordHash { get; set; }
                [NotMapped]
                public string[] Roles { get; set; }
        }

        public record UserLogin(
            string Email,
            string Password
        );

        public record UserRegister(
            string Email,
            string Password
        );
}