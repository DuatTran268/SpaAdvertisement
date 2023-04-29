using SpaCenter.Core.DTO;
using SpaCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpaCenter.Services.Manages.Supports
{
	public interface ISupportRepository
	{
		Task<IList<SupportItem>> GetSupportNotRequiredAsync(
			CancellationToken cancellationToken = default);

		// get by id
		Task<Support> GetSupportByIdAsync(int supportId);
		Task<Support> GetCachedSupportByIdAsync(int supportId);
	}
}
