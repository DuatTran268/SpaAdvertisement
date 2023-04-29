using SpaCenter.Core.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Core.Entities
{
	public class Support :IEntity
	{
		public int Id { get; set; }
		public string FullName { get; set; }
		public string UrlSlug { get; set; }
		public string PhoneNumber { get; set; }
		// trạng thái mà nhân viên đã gọi điện tư vấn hay chưa

		public bool Status { get; set; }

	}
}
