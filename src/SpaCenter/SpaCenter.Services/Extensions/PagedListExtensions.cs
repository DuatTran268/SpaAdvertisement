using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SpaCenter.Core.Collections;
using SpaCenter.Core.Contracts;

// note using System.Linq.Dynamic.Core;
using System.Linq.Dynamic.Core;

namespace SpaCenter.Services.Extensions;

public static class PagedListExtensions
{
    // tao bieu thuc dung de sap xep du lieu
    public static string GetOrderExpression(
        this IPagingParams pagingParams,
        string defaultColumn = "Id")
    {
        var column = string.IsNullOrWhiteSpace(pagingParams.SortColumn)
            ?defaultColumn : pagingParams.SortColumn;

        var order = "ASC".Equals(
            pagingParams.SortOrder, StringComparison.OrdinalIgnoreCase)
            ? pagingParams.SortOrder : "DESC";  // tra du lieu ve theo thu tu giam dan

        return $"{column} {order}";


    }



    public static async Task<IPagedList<T>> ToPagedListAsync<T>(
        this IQueryable<T> source,
        IPagingParams pagingParams,
        CancellationToken cancellationToken = default
        )
    {
        var totalCount = await source.CountAsync(cancellationToken);
        var items = await source
            .OrderBy(pagingParams.GetOrderExpression())
            .Skip((pagingParams.PageNumber - 1) * pagingParams.PageSize)
            .Take(pagingParams.PageSize)
            .ToListAsync(cancellationToken);

        return new PagedList<T>(
            items, pagingParams.PageNumber, pagingParams.PageSize, totalCount);

    }


    public static async Task<IPagedList<T>> ToPageListAsync<T>(
        this IQueryable<T> source,
        int pageNumber = 1,
        int pageSize = 10,
        string sortColumn = "Id",
        string sortOrder = "DESC",
        CancellationToken cancellationToken = default
        
        )
    {
        var totalCount = await source.CountAsync(cancellationToken);
        var items = await source .OrderBy ($"{sortColumn} {sortOrder}")
            .Skip((pageNumber -1) * pageSize)
            .Take(pageSize)
            .ToListAsync(cancellationToken);

        return new PagedList<T>(
            items, pageNumber, pageSize, totalCount);
    }




}
