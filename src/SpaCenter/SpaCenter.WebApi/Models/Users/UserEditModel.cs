namespace SpaCenter.WebApi.Models.Users
{
	public class UserEditModel
	{
		public string FullName { get; set;}
		public string UrlSlug { get; set; }
		public string Email { get; set; }
		public string Password { get; set; }
		public int RoleId { get; set; }

	}
}
