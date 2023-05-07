import { delete_api, get_api, put_api } from "./Method";

export function getFilterBooking(
  name = '',
  pageSize = 10,
  pageNumber = 1,
  sortColumn = '',
  sortOrder = ''
) {
  let url = new URL(`https://localhost:7024/api/bookings/required`);
  name !== '' && url.searchParams.append('Name', name);
  sortColumn !== '' && url.searchParams.append('SortColumn', sortColumn);
  sortOrder !== '' && url.searchParams.append('SortOrder', sortColumn);
  url.searchParams.append('PageSize', pageSize);
  url.searchParams.append('PageNumber', pageNumber);

  return get_api(url.href);
}


export async function deleteBooking(id = 0) {
  return delete_api(`https://localhost:7024/api/bookings/${id}`);
}


export async function getBookingById(id = 0) {
  if (id > 0) {
    return get_api(`https://localhost:7024/api/bookings/${id}`);
  }
}


export async function updateBooking(id = 0, formData) {
  return put_api(`https://localhost:7024/api/bookings/${id}`, formData);
}