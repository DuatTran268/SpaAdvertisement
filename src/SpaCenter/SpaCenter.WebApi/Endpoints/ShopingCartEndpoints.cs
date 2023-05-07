namespace SpaCenter.WebApi.Endpoints
{
    public static class ShopingCartEndpoints
    {
        //public static WebApplication MapCartEnpoints(this WebApplication app)
        //{
        //    var routeGroupBuilder = app.MapGroup("/api/shopingcarts");
        //    routeGroupBuilder.MapGet("/", GetShopingCartNotRiquired)
        //         .WithName("GetAllShopingCart")
        //         .Produces<ApiResponse<PaginationResult<CartItemDto>>>();

        //    routeGroupBuilder.MapPost("/", AddItemInCart)
        //        .WithName("AddItemInCart")
        //        .Produces<ApiResponse>()
        //        .Accepts<CartItemEditModel>("multipart/form-data");

        //    routeGroupBuilder.MapDelete("/{id:int}", DeleteItemInCart)
        //       .WithName("DeleteItemInCart")
        //       .Produces<ApiResponse>();

        //    routeGroupBuilder.MapDelete("/all", DeleteItemAllInCart)
        //       .WithName("DeleteItemAllInCart")
        //       .Produces<ApiResponse>();

        //    routeGroupBuilder.MapPut("/", UpdateItemInCart)
        //        .WithName("UpdateItemInCart")
        //        .Produces<ApiResponse>()
        //         .Accepts<CartItemEditModel>("multipart/form-data");

        //    return app;
        //}
    }
}