using SpaCenter.Core.Contracts;

namespace SpaCenter.WebApi.Models
{
<<<<<<< HEAD
    public class PagingModel : IPagingParams
    {
        public int PageSize { get; set; } = 10;

        public int PageNumber { get; set; } = 1;

        public string SortColumn { get; set; } = "Id";

        public string SortOrder { get; set; } = "DESC";
    }
}
=======
	public class PagingModel :IPagingParams
	{
		public int PageSize { get; set; } = 10;

		public int PageNumber { get; set; } = 1;

		public string SortColumn { get; set; } = "Id";

		public string SortOrder { get; set; } = "DESC";

	}
}
>>>>>>> f56841d4a1268554318c6a6b0eb418906236845b
