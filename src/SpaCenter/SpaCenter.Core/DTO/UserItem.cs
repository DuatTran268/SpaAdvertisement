using SpaCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Core.DTO
{
	public class UserItem
	{
		public int Id { get; set; }
		public string FullName { get; set; }
		public string UrlSlug { get; set; }
		public string Email { get; set; }
        public string Password { get; set; }
/*        public string Address { get; set; }
        public int PhoneNo { get; set; }*/
    }
}
