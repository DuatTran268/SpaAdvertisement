using SpaCenter.Core.Constracts;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpaCenter.Core.Entities
{
    [Table("Products")]
    public class Product : Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Range(0, double.MaxValue)]
        public double Price { get; set; }

        public string ImageUrl { get; set; }
        public string UrlSlug { get; set; }

        [Range(0, 100)]
        public int Quantity { set; get; }

        public int? Sale { get; set; }
        public string Description { get; set; }
        public int Buyed { get; set; }

        public virtual IEnumerable<Order> Orders { get; set; }
    }
}