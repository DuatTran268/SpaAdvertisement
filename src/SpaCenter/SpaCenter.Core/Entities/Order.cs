using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpaCenter.Core.Entities
{
    [Table("Orders")]
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        // Tên sản phẩm or tên dịch vụ
        public string Name { get; set; }

        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public decimal TotalMoney { get; set; }
        public string ImageUrl { get; set; }
        public DateTime BookingDate { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public bool Status { get; set; }

        [Required]
        [StringLength(256)]
        public string PaymentMethod { get; set; }

        public int PaymentStatus { get; set; }

        public int TransactionID { get; set; }

        [ForeignKey("TransactionID")]
        public virtual Transaction Transaction { get; set; }

        public int ProductID { get; set; }

        [ForeignKey("ProductID")]
        public virtual Product Products { get; set; }

        public int ServiceID { get; set; }

        [ForeignKey("ServiceID")]
        public virtual Service Services { get; set; }
    }
}