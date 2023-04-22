using SpaCenter.Core.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Core.Entities
{
	public class Booking : IEntity
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string UrlSlug { get; set; }
		public string Email { get; set; }
		public string PhoneNumber { get; set; }
		public DateTime BookingDate { get; set; }
		public string NoteMessage { get; set; }
		public string PriceTotal { get; set; }
		public bool Status { get; set; }

		public int UserId { get; set; }	
		public User User { get; set; }
		
		public IList<ServiceTypeBooking> ServiceTypeBookings { get; set; }


	}
}
