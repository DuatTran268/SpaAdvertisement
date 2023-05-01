using SpaCenter.Core.Contracts;

namespace SpaCenter.Core.Entities
{
    public class User : IEntity
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Password { get; set; }
        public string UrlSlug { get; set; }
        public string Email { get; set; }
        public int RoleId { get; set; }
        public Role Role { get; set; }

        public IList<Booking> Bookings { get; set; }
    }
}