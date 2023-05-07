namespace SpaCenter.WebApi.Models.ServiceTypeBookings
{
    public class STBookingEditModel
    {
        public int UserNumber { get; set; }
        public string Price { get; set; }

        // Loại dịch vụ, Loại booking
        public int ServiceTypeId { get; set; }
        public int BookingId { get; set; }
    }
}
