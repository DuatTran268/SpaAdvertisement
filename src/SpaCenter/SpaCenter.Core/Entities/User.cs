using SpaCenter.Core.Contracts;
<<<<<<< HEAD

namespace SpaCenter.Core.Entities
{
    public class User : IEntity
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Password { get; set; }
        public string UrlSlug { get; set; }
        public string Email { get; set; }

        public int RoleId { get; set; }
        public Role Role { get; set; }

        public IList<Booking> Bookings { get; set; }
    }
}
=======
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Core.Entities
{
	public class User : IEntity
	{
		public int Id { get; set; }
		public string FullName { get; set; }
		public string Password { get; set; }
		public string UrlSlug { get; set; }
		public string Email { get; set; }

		public int RoleId { get; set; }
		public Role Role { get; set; }

		public IList<Booking> Bookings { get; set; }


	}
}
>>>>>>> f56841d4a1268554318c6a6b0eb418906236845b
