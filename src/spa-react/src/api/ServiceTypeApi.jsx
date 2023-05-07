import { delete_api, get_api, put_api } from "./Method";

export function getFilterServiceType(
  name = "",
  price = "",
  pageSize = 10,
  pageNumber = 1,
  sortColumn = "",
  sortOrder = ""
) {
  let url = new URL(`https://localhost:7024/api/servicetypes/required`);
  name !== "" && url.searchParams.append("Name", name);
  price !== "" && url.searchParams.append("Price", price);
  sortColumn !== "" && url.searchParams.append("SortColumn", sortColumn);
  sortOrder !== "" && url.searchParams.append("SortOrder", sortColumn);
  url.searchParams.append("PageSize", pageSize);
  url.searchParams.append("PageNumber", pageNumber);

  return get_api(url.href);
}

export async function deleteServiceType(id = 0) {
  return delete_api(`https://localhost:7024/api/servicetypes/${id}`);
}

export async function getAllServiceType() {
  return get_api(`https://localhost:7024/api/servicetypes`);
}

export async function getServiceTypeById(id = 0) {
  if (id > 0) {
    return get_api(`https://localhost:7024/api/servicetypes/${id}`);
  }
}

export async function updateServiceType(id = 0, formData) {
  return put_api(`https://localhost:7024/api/servicetypes/${id}`, formData);
}

export async function getServiceFilter() {
  return get_api(`https://localhost:7024/api/servicetypes/get-filter`);
}
