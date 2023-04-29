using Mapster;
using MapsterMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using SpaCenter.Core.Collections;
using SpaCenter.Core.DTO;
using SpaCenter.Services.Manages.Supports;
using SpaCenter.WebApi.Models;
using SpaCenter.WebApi.Models.Services;
using SpaCenter.WebApi.Models.Supports;
using System.Net;

namespace SpaCenter.WebApi.Endpoints
{
	public static class SupportEndpoint
	{
		public static WebApplication MapSuportEndpoint(this WebApplication app)
		{
			var routeGroupBuilder = app.MapGroup("/api/supports");

			routeGroupBuilder.MapGet("/getall", GetSupportNotRequired)
				.WithName("GetSupportNotRequiredAsync")
				.Produces<ApiResponse<SupportItem>>();

			routeGroupBuilder.MapGet("/{id:int}", GetSupportById)
				.WithName("GetSupportById")
				.Produces<ApiResponse<SupportItem>>();

			routeGroupBuilder.MapGet("/", GetSupportAsync)
				.WithName("GetSupportAsync")
				.Produces<ApiResponse<IList<SupportItem>>>();
			return app;
		}


		// get not required
		private static async Task<IResult> GetSupportNotRequired(
			ISupportRepository supportRepository)
		{
			var supportList = await supportRepository.GetSupportNotRequiredAsync();
			return Results.Ok(ApiResponse.Success(supportList));
		}

		// get by id
		private static async Task<IResult> GetSupportById(
			int id, ISupportRepository supportRepository, IMapper mapper)
		{
			var support = await supportRepository.GetCachedSupportByIdAsync(id);
			return support == null
				? Results.Ok(ApiResponse.Fail(System.Net.HttpStatusCode.NotFound, $"Không tìm thấy khách hàng có id = {id}"))
				: Results.Ok(ApiResponse.Success(mapper.Map<SupportItem>(support)));
		}

		// get by url slug
		private static async Task<IResult> GetSupportAsync(
			[AsParameters] SupportFilterModel model,
			ISupportRepository supportRepository)
		{
			var departmentList = await supportRepository.GetSupportPagedAsync(model, model.FullName);
			var pagingnationResult = new PaginationResult<SupportItem>(departmentList);
			return Results.Ok(ApiResponse.Success(pagingnationResult));

		}
	}
}
