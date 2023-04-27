using SpaCenter.WebApi.Models.ServiceTypes;

namespace SpaCenter.WebApi.Models.Services
{
    public class ServiceDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UrlSlug { get; set; }
        public string ShortDescription { get; set; }
        public IList<ServiceTypeDto> serviceTypes { get; set; }
    }
}
