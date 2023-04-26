using SpaCenter.Core.Entities;

namespace SpaCenter.Core.DTO
{
    public class ServiceTypeItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UrlSlug { get; set; }
        public string ImageUrl { get; set; }
        public string ShortDescription { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
    }
}