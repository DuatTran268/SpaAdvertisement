using SpaCenter.Core.Constracts;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpaCenter.Core.Entities
{
    public class TypeService
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [MaxLength(256)]
        public string Name { get; set; }
        [Range(0, double.MaxValue)]
        public double Price { get; set; }
        public string UrlSlug { get; set; }
        public string Description { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public bool Status { get; set; }

        public virtual IEnumerable<Service> Services { get; set; }
        public virtual IEnumerable<Schedule> Schedules { get; set; }

    }
}