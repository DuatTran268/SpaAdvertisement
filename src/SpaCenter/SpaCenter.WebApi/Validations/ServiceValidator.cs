using FluentValidation;
using SpaCenter.WebApi.Models.Services;

namespace SpaCenter.WebApi.Validations
{
    public class ServiceValidator : AbstractValidator<ServiceEditModel>
    {
        public ServiceValidator()
        {
            RuleFor(u => u.Name)
                .NotEmpty()
                .WithMessage("Tên không được để trống")
                .MaximumLength(100)
                .WithMessage("Tên không quá 100 ký tự");

            RuleFor(u => u.UrlSlug)
                .NotEmpty()
                .WithMessage("UrlSlug không được để trống")
                .MaximumLength(100)
                .WithMessage("UrlSlug không quá 100 ký tự");

            RuleFor(u => u.ShortDescription)
               .NotEmpty()
               .WithMessage("Mô tả không được để trống")
               .MaximumLength(250)
               .WithMessage("Mô tả không quá 250 ký tự");
        }
    }
}
