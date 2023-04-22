using SpaCenter.Core.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Core.Entities
{
	public class Service : IEntity
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string UrlSlug { get; set; }
		public string ShortDescription { get; set; }
		public bool Status { get; set; }

		public IList<ServiceType> ServiceTypes { get; set; }
	}
}
