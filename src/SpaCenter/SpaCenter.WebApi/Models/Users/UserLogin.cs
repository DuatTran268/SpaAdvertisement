using System.ComponentModel.DataAnnotations;

namespace SpaCenter.WebApi.Models.Users
{
    public class UserLogin
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public int RoleId { get; set; }
    }

    public class UserResponse
    {
        public bool IsSuccess { get; set; }

        public string ErrorMessage { get; set; }
    }
}
