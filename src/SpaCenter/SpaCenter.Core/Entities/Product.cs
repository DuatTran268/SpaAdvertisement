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

        public decimal Price { get; set; }
        public string ImageUrl { get; set; }
        public int? Sale { get; set; }
        public string Content { get; set; }
        public string Description { get; set; }
        public int Buyed { get; set; }

        public virtual IEnumerable<Order> Orders { get; set; }
        public virtual IEnumerable<Transaction> Transactions { get; set; }
    }
}