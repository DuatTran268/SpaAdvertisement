using FluentValidation;
using SpaCenter.WebApi.Models.Users;

namespace SpaCenter.WebApi.Validations
{
	public class UserValidator : AbstractValidator<UserEditModel>
	{
		public UserValidator()
		{
			RuleFor(u => u.FullName)
				.NotEmpty()
				.WithMessage("Fullname không được để trống")
				.MaximumLength(100)
				.WithMessage("Fullname không quá 100 ký tự");

			RuleFor(u => u.UrlSlug)
				.NotEmpty()
				.WithMessage("UrlSlug không được để trống")
				.MaximumLength(100)
				.WithMessage("UrlSlug không quá 100 ký tự");

			RuleFor(u => u.Email)
				.NotEmpty()
				.WithMessage("Email không được để trống")
				.MaximumLength(100)
				.WithMessage("Email không quá 100 ký tự");

			RuleFor(u => u.Password)
				.NotEmpty()
				.WithMessage("Password không được để trống")
				.MaximumLength(100)
				.WithMessage("Password không quá 100 ký tự");
		}
	}
}
