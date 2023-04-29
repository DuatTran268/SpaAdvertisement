using Mapster;
using MapsterMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using SpaCenter.Core.Collections;
using SpaCenter.Core.DTO;
using SpaCenter.Services.Manages.Supports;
using SpaCenter.WebApi.Models;
using SpaCenter.WebApi.Models.Services;
using System.Net;

namespace SpaCenter.WebApi.Endpoints
{
	public static class SupportEndpoint
	{
		public static WebApplication MapSuportEndpoint(this WebApplication app)
		{
			var routeGroupBuilder = app.MapGroup("/api/supports");

			routeGroupBuilder.MapGet("/", GetSupportNotRequired)
			.WithName("GetSupportNotRequiredAsync")
			.Produces<ApiResponse<SupportItem>>();

			routeGroupBuilder.MapGet("/{id:int}", GetSupportById)
				.WithName("GetSupportById")
				.Produces<ApiResponse<SupportItem>>();

			routeGroupBuilder.MapGet("/slug/{slug:regex(^[a-z0-9_-]+$)}", GetSupportBySlug)
				.WithName("GetSupportBySlug")
				.Produces<ApiResponse<PaginationResult<SupportItem>>>();
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
		private static async Task<IResult> GetSupportBySlug(
			[FromRoute] string slug, [AsParameters] PagingModel pagingModel,
			ISupportRepository supportRepository)
		{
			var supportQuery = new SupportQuery()
			{
				SupportSlug = slug,
			};

			var supportList = await supportRepository.GetPagedSupportAsync(
				supportQuery, pagingModel, support => support.ProjectToType<SupportItem>());

			var pagingnationResult = new PaginationResult<SupportItem>(supportList);

			return supportList == null
				? Results.Ok(ApiResponse.Fail(HttpStatusCode.NotFound, $"Không tồn tại slug = {slug} nhập vào"))
				: Results.Ok(ApiResponse.Success(pagingnationResult));

		}
	}
}
