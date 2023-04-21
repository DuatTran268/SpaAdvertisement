using System.ComponentModel.DataAnnotations;

namespace SpaCenter.WebApi.Models
{
    public class SignUpModel
    {
        [Required(ErrorMessage = "Bạn cần nhập tên.")]
        public string FullName { set; get; }

        [Required(ErrorMessage = "Bạn cần nhập tên đăng nhập.")]
        public string UserName { set; get; }

        [Required(ErrorMessage = "Bạn cần nhập email.")]
        [EmailAddress(ErrorMessage = "Địa chỉ email không đúng.")]
        public string Email { set; get; }

        [Required(ErrorMessage = "Bạn cần nhập mật khẩu."), EmailAddress]
        [MinLength(6, ErrorMessage = "Mật khẩu phải có ít nhất 6 ký tự")]
        public string Password { set; get; } = null!;

        [Required]
        public string ConfirmPassword { get; set; } = null!; 
    }
}
