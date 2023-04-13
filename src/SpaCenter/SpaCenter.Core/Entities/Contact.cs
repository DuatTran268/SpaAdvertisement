using SpaCenter.Core.Constracts;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpaCenter.Core.Entities
{
    [Table("Contacts")]
    public class Contact : Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Name { get; set; }
        public string Email { get; set; }
        public bool? isRead { get; set; }
        public string Message { get; set; }

        public virtual IEnumerable<SupportCustomer> SupportCustomers { get; set; }
    }
}