using SpaCenter.Core.Constracts;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpaCenter.Core.Entities
{
    [Table("Services")]
    public class Service : Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public int? Sale { get; set; }
        public string ImageUrl { get; set; }
        public string UrlSlug { get; set; }
        public string Description { get; set; }
        public int TypeServiceId { get; set; }

        [ForeignKey("TypeServiceId")]
        public virtual TypeService TypeServices { get; set; }

        public virtual IEnumerable<Order> Orders { get; set; }
    }
}