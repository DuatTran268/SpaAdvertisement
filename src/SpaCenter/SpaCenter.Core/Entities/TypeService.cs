using SpaCenter.Core.Constracts;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpaCenter.Core.Entities
{
    public class TypeService : Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public int? ParentId { get; set; }
        public int? DisplayOrder { get; set; }

        public virtual IEnumerable<Service> Services { get; set; }
        public virtual IEnumerable<Schedule> Schedules { get; set; }

    }
}