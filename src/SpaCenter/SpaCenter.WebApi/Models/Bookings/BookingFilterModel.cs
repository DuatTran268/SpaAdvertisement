namespace SpaCenter.WebApi.Models.Bookings
{
    public class BookingFilterModel : PagingModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string UrlSlug { get; set; }
        public string PhoneNumber { get; set; }
    }
}