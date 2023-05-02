using FluentValidation;
using SpaCenter.WebApi.Models.Bookings;

namespace SpaCenter.WebApi.Validations
{
    public class BookingValidator : AbstractValidator<BookingEditModel>
    {
        public BookingValidator()
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

            RuleFor(u => u.PriceTotal)
              .NotEmpty()
              .WithMessage("Giá dịch vụ không được để trống");
        }
    }
}