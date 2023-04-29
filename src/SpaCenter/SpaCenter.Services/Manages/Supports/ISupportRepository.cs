using SpaCenter.Core.Contracts;
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

		//Task<IPagedList<T>> GetPagedSupportAsync<T>(
		//	SupportQuery query,
		//	IPagingParams pagingParams,
		//	Func<IQueryable<Support>,
		//		IQueryable<T>> mapper,
		//	CancellationToken cancellationToken = default);

		// get by fullName
		Task<IPagedList<SupportItem>> GetSupportPagedAsync(
			IPagingParams pagingParams, string fullName = null, CancellationToken cancellationToken = default);

		// add or update 
		Task<bool> AddOrUpdateSupportAsync(Support support, CancellationToken cancellationToken = default);

		// delete support
		Task<bool> DeleteSupportAsync(int supportId, CancellationToken cancellationToken = default);
	}
}
