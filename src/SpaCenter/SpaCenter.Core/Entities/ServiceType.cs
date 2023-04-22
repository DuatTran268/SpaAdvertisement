using SpaCenter.Core.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Core.Entities
{
	public class ServiceType : IEntity
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string UrlSlug { get; set; }
		public string ImageUrl { get; set; }
		public string ShortDescription { get; set; }
		public string Description { get; set; }
		public string Price { get; set; }
		public bool Status { get; set; }
		public int ServiceId { get; set; }

		public Service Service { get; set; }
		public IList<ServiceTypeBooking> ServiceTypeBookings { get; set; }

	}
}
