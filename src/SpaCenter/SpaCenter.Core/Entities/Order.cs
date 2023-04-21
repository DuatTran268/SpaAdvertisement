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
        [Required]
        [MaxLength(256)]
        public string Name { get; set; }

        [Range(0, 100)]
        public int Quantity { get; set; }

        [Range(0, double.MaxValue)]
        public double Price { get; set; }

        public double TotalMoney { get; set; }
        public string ImageUrl { get; set; }
        public DateTime BookingDate { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public bool Status { get; set; }

        [Required]
        [StringLength(256)]
        public string PaymentMethod { get; set; }

        public string PaymentStatus { get; set; }

        public int TransactionId { get; set; }

        [ForeignKey("TransactionId")]
        public virtual Transaction Transaction { get; set; }

        public int ProductId { get; set; }

        [ForeignKey("ProductId")]
        public virtual Product Products { get; set; }

        public int ServiceId { get; set; }

        [ForeignKey("ServiceId")]
        public virtual Service Services { get; set; }

        [StringLength(450)]
        [Column(TypeName = "nvarchar")]
        public string CustomerId { get; set; }

        [ForeignKey("CustomerId")]
        public virtual User User { set; get; }
    }
}