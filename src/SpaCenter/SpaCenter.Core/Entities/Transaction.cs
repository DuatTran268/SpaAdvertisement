using SpaCenter.Core.Constracts;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpaCenter.Core.Entities
{
    [Table("Transactions")]
    public class Transaction : Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string CustomerName { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerPhone { get; set; }
        public string CustomerAddress { get; set; }
        public decimal TotalMoney { get; set; }
        public int Quantity { get; set; }
        public string Note { get; set; }
        public int ServiceID { get; set; }

        [ForeignKey("ServiceID")]
        public virtual Service Services { get; set; }

        public int ProductID { get; set; }

        [ForeignKey("ProductID")]
        public virtual Product Products { get; set; }
    }
}