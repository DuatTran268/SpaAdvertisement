namespace SpaCenter.Core.DTO
{
    public class STypeBookingItem
    {
        public int Id { get; set; }
        public int UserNumber { get; set; }
        public string Price { get; set; }

        // Loại dịch vụ, Loại booking
        public int ServiceTypeId { get; set; }

        public int BookingId { get; set; }
    }
}