using SpaCenter.Core.Constracts;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpaCenter.Core.Entities
{
    // Gần giống bảng chi tiết đơn hàng ^^
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

        [Range(0, double.MaxValue)]
        public double TotalMoney { get; set; }

        [Range(0, 100)]
        public int Quantity { get; set; }

        public string Note { get; set; }


        [MaxLength(450)]
        [Column(TypeName = "nvarchar")]
        public string UserId { get; set; }

        [ForeignKey("UserId")]
        public virtual User Users { get; set; }

        public virtual IEnumerable<Order> Orders { get; set; }
    }
}