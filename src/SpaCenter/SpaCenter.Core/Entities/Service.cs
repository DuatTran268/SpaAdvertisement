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

        public decimal Price { get; set; }
        public int? Sale { get; set; }
        public string ImageUrl { get; set; }
        public string Content { get; set; }
        public string Description { get; set; }
        public int TypeServiceID { get; set; }

        [ForeignKey("TypeServiceID")]
        public virtual TypeService TypeServices { get; set; }

        public virtual IEnumerable<Order> Orders { get; set; }
        public virtual IEnumerable<Transaction> Transactions { get; set; }
    }
}