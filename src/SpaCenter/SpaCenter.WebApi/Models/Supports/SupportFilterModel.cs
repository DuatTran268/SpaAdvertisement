namespace SpaCenter.WebApi.Models.Supports
{
	public class SupportFilterModel : PagingModel
	{
		public string FullName { get; set; }
		public string PhoneNumber { get; set; }
	}
}
