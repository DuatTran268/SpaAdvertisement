using SpaCenter.Core.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Services.Manages.Supports
{
	public interface ISupportRepository
	{
		Task<IList<SupportItem>> GetSupportNotRequired(
			CancellationToken cancellationToken = default);
	}
}
