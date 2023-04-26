using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel;

namespace SpaCenter.WebApi.Models.ServiceTypes
{
    public class ServiceTypeFilterModel : PagingModel
    {
        [DisplayName("Tên loại dịch vụ")]
        public string Name { get; set; }
        [DisplayName("Giá loại dịch vụ")]
        public string Price { get; set; }
    }
}
