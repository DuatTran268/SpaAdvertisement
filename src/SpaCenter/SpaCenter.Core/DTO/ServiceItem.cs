using SpaCenter.Core.Entities;

namespace SpaCenter.Core.DTO
{
    public class ServiceItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UrlSlug { get; set; }
        public string ShortDescription { get; set; }
        //public int FavoredCount { get; set; }
        public bool Status { get; set; }
		public IList<ServiceType> ServiceTypes { get; set; }

	}
}