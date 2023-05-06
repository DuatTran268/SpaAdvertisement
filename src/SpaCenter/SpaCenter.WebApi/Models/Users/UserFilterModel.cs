using Microsoft.AspNetCore.Mvc.Rendering;

namespace SpaCenter.WebApi.Models.Users
{
	public class UserFilterModel : PagingModel
	{
		public string FullName { get; set; }
		public string Email { get; set; }
		public IEnumerable<SelectListItem> RoleList { get; set; }
	}
}
