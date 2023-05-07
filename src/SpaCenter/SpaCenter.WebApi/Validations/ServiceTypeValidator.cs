using FluentValidation;
using SpaCenter.WebApi.Models.ServiceTypes;

namespace SpaCenter.WebApi.Validations
{
    public class ServiceTypeValidator : AbstractValidator<ServiceTypeEditModel>
    {
        public ServiceTypeValidator()
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

            RuleFor(u => u.Description)
              .NotEmpty()
              .WithMessage("Nội dung không được để trống")
              .MaximumLength(5000)
              .WithMessage("Nội dung không quá 5000 ký tự");

            RuleFor(u => u.Price)
               .NotEmpty()
               .WithMessage("Giá dịch vụ không được để trống");
        }
    }
}
