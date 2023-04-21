using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpaCenter.Core.Entities
{
    [Table("SupportCustomer")]
    public class SupportCustomer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string CustomerName { get; set; }
        public string PhoneNumber { get; set; }

        [MaxLength(50)]
        public string Email { get; set; }

        [MaxLength(50)]
        public string Facebook { get; set; }

        public bool Status { get; set; }
        public int ContactId { get; set; }

        [ForeignKey("ContactId")]
        public virtual Contact Contacts { get; set; }

        public int? DisplayOrder { get; set; }
        public bool? isRead { get; set; }
        public string Message { get; set; }
    }
}