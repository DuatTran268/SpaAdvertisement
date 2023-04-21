using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace SpaCenter.Core.Entities
{
    public class User : IdentityUser
    {
        [MaxLength(256)]
        public string FullName { set; get; }

        [MaxLength(256)]
        public string Address { set; get; }

        public virtual IEnumerable<Transaction> Transactions { set; get; }
        public virtual IEnumerable<Order> Orders { set; get; }
    }
}