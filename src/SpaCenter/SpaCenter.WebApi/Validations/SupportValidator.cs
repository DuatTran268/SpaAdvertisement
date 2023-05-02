using FluentValidation;
using SpaCenter.WebApi.Models.Supports;

namespace SpaCenter.WebApi.Validations
{
	public class SupportValidator : AbstractValidator<SupportEditModel>
	{
		public SupportValidator()
		{
			RuleFor(sp => sp.FullName)
				.NotEmpty()
				.WithMessage("Fullname không được để trống")
				.MaximumLength(20)
				.WithMessage("Fullname không quá 20 ký tự");

			//RuleFor(sp => sp.UrlSlug)
			//	.NotEmpty()
			//	.WithMessage("UrlSlug không được để trống")
			//	.MaximumLength(20)
			//	.WithMessage("UrlSlug không quá 20 ký tự");

			RuleFor(sp => sp.PhoneNumber)
				.NotEmpty()
				.WithMessage("Số điện thoại không được để trống")
				.MaximumLength(11)
				.WithMessage("Số điện thoại không quá 20 ký tự");
		}

	}
}
