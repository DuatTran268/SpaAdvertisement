namespace SpaCenter.WebApi.Models.Services
{
    public class ServiceFilterModel : PagingModel
    {
        public string Name { get; set; }
        public string UrlSlug { get; set; }
    }
}
