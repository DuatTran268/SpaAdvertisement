using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpaCenter.Core.Entities
{
    [Table("Menus")]
    public class Menu
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [MaxLength(256)]
        public string URL { get; set; }

        public int? DisplayOrder { get; set; }
        public bool Status { get; set; }

        [MaxLength(10)]
        public string Target { get; set; }

        [Required]
        public int GroupID { get; set; }

        [ForeignKey("GroupID")]
        public virtual MenuGroup MenuGroups { get; set; }
    }
}