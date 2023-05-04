import { delete_api, get_api } from "./Method";

export function getFilterSupport(
  phoneNumber = '',
  pageSize = 10,
  pageNumber = 1,
  sortColumn = '',
  sortOrder = ''
) {
  let url = new URL(`https://localhost:7024/api/supports`);
  phoneNumber !== '' && url.searchParams.append('Name', phoneNumber);
  sortColumn !== '' && url.searchParams.append('SortColumn', sortColumn);
  sortOrder !== '' && url.searchParams.append('SortOrder', sortColumn);
  url.searchParams.append('PageSize', pageSize);
  url.searchParams.append('PageNumber', pageNumber);

  return get_api(url.href);
}

export async function deleteSupport(id = 0) {
  return delete_api(`https://localhost:7024/api/supports/${id}`);
}


// change status call
// change published
export function changeCallStatus(id = 0){
  return get_api(`https://localhost:7024/api/supports/changecall/${id}`)
}