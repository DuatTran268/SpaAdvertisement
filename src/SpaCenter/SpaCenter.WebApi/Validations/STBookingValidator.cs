using FluentValidation;
using SpaCenter.WebApi.Models.ServiceTypeBookings;

namespace SpaCenter.WebApi.Validations
{
    public class STBookingValidator : AbstractValidator<STBookingEditModel>
    {
        public STBookingValidator()
        {
            RuleFor(u => u.Price)
              .NotEmpty()
              .WithMessage("Giá dịch vụ không được để trống");
        }
    }
}
