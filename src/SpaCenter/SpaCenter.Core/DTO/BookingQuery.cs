namespace SpaCenter.Core.DTO
{
    public class BookingQuery
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime BookingDate { get; set; }
        public string PriceTotal { get; set; }
    }
}