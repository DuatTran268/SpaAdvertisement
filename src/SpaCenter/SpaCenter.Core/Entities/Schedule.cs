using SpaCenter.Core.Constracts;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpaCenter.Core.Entities
{
    [Table("Schedules")]
    public class Schedule : Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime BookingDate { get; set; }
        public string Note { get; set; }
        public int TypeServiceID { get; set; }
        [ForeignKey("TypeServiceID")]
        public virtual TypeService TypeServices { get; set; }
    }
}