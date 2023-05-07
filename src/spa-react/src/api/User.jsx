import { delete_api, get_api, put_api } from "./Method";

export function getFilterUser(
  fullName = '',
  email = '',
  pageSize = 10,
  pageNumber = 1,
  sortColumn = '',
  sortOrder = ''
) {
  let url = new URL(`https://localhost:7024/api/users/required`);
  fullName !== '' && url.searchParams.append('FullName', fullName);
  email !== '' && url.searchParams.append('Email', email);
  sortColumn !== '' && url.searchParams.append('SortColumn', sortColumn);
  sortOrder !== '' && url.searchParams.append('SortOrder', sortColumn);
  url.searchParams.append('PageSize', pageSize);
  url.searchParams.append('PageNumber', pageNumber);

  return get_api(url.href);
}


export async function getAllUser(){
  return get_api (`https://localhost:7024/api/users`)
}


export async function getUserById(id = 0) {
  if (id > 0) {
    return get_api(`https://localhost:7024/api/users/${id}`);
  }
}


export async function updateUser(id = 0, formData) {
  return put_api(`https://localhost:7024/api/users/${id}`, formData);
}

export async function deleteUser(id = 0) {
  return delete_api(`https://localhost:7024/api/users/${id}`);
}



export async function getUserFilter() {
  return get_api(`https://localhost:7024/api/users/get-filter`);
}
