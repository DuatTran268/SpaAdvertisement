using SpaCenter.Core.Constracts;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpaCenter.Core.Entities
{
    [Table("Posts")]
    public class Post : Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Description { get; set; }
        public string UrlSlug { get; set; }
        public string Content { get; set; }
        public string ImageUrl { get; set; }
        public int? ViewCount { get; set; }
    }
}