using SpaCenter.Core.Contracts;

namespace SpaCenter.Core.Entities
{
    public class ServiceTypeBooking : IEntity
    {
        public int Id { get; set; }
        public int UserNumber { get; set; }  // so luong nguoi dat dich vu
        public string Price { get; set; }

        public int ServiceTypeId { get; set; }
        public ServiceType ServiceType { get; set; }

        public int BookingId { get; set; }
        public Booking Booking { get; set; }
    }
}