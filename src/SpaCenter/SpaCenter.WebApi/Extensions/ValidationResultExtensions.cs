using FluentValidation.Results;
using SpaCenter.WebApi.Models;

namespace SpaCenter.WebApi.Extensions
{
<<<<<<< HEAD
    public static class ValidationResultExtensions
    {
        public static ValidationFailureResponse ToResponse(this ValidationResult validationResult)
        {
            return validationResult.Errors.ToResponse();
        }

        public static ValidationFailureResponse ToResponse(this IEnumerable<ValidationFailure> failures)
        {
            return new ValidationFailureResponse(failures.Select(e => e.ErrorMessage));
        }

        public static IList<string> GetErrorMessages(this ValidationResult validationResult)
        {
            return validationResult.Errors.GetErrorMessages();
        }

        public static IList<string> GetErrorMessages(this IEnumerable<ValidationFailure> failures)
        {
            return failures.Select(e => e.ErrorMessage).ToList();
        }

        public static IDictionary<string, List<string>> GetErrorsWithPropertyNames(this ValidationResult validationResult)
        {
            return validationResult.Errors.GetErrorsWithPropertyNames();
        }

        public static IDictionary<string, List<string>> GetErrorsWithPropertyNames(this IEnumerable<ValidationFailure> failures)
        {
            return failures.GroupBy(e => e.PropertyName)
                           .ToDictionary(
                                        g => g.Key,
                                        g => g.Select(e => e.ErrorMessage).ToList());
        }
    }
=======
	public static class ValidationResultExtensions
	{
		public static ValidationFailureResponse ToResponse(this ValidationResult validationResult)
		{
			return validationResult.Errors.ToResponse();
		}

		public static ValidationFailureResponse ToResponse(
			this IEnumerable<ValidationFailure> failures
			)
		{
			return new ValidationFailureResponse(failures.Select(e => e.ErrorMessage));
		}

		public static IList<string> GetErrorMessages(this ValidationResult validationResult)
		{
			return validationResult.Errors.GetErrorMessages();
		}

		public static IList<string> GetErrorMessages(this IEnumerable<ValidationFailure> failures)
		{
			return failures.Select(e => e.ErrorMessage).ToList();
		}


		public static IDictionary<string, List<string>> GetErrorsWithPropertyNames(
			this ValidationResult validationResult
			)
		{
			return validationResult.Errors.GetErrorsWithPropertyNames();

		}
		public static IDictionary<string, List<string>> GetErrorsWithPropertyNames(
			this IEnumerable<ValidationFailure> failures)
		{
			return failures.GroupBy(e => e.PropertyName)
				.ToDictionary(
				g => g.Key,
				g => g.Select(e => e.ErrorMessage).ToList()
				);
		}
	// corporate = company
	}
>>>>>>> f56841d4a1268554318c6a6b0eb418906236845b
}
