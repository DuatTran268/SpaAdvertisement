using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Core.DTO
{
	public class SupportItem
	{
		public int Id { get; set; }
		public string FullName { get; set; }
		public string UrlSlug { get; set; }
		public string PhoneNumber { get; set; }
		public bool Status { get; set; }
	}
}
