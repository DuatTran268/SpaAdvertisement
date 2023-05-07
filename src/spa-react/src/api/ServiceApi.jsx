import { delete_api, get_api, put_api } from "./Method";

export async function getAllService(){
  return get_api (`https://localhost:7024/api/services/random/8`)
}

export async function getServiceBySlug(urlSlug = ''){
  return get_api (`https://localhost:7024/api/services/slug/${urlSlug}`)
}

export async function getAllServiceType(){
  return get_api (`https://localhost:7024/api/servicetypes`)
}

export async function getNRamdomLitmitServiceType(){
  return get_api (`https://localhost:7024/api/servicetypes/random/8`)
}

export async function getServiceTypeBySlug(urlSlug = ''){
  return get_api (`https://localhost:7024/api/servicetypes/slugDetail/${urlSlug}`)

}


export function getFilterService(
  name = '',
  pageSize = 10,
  pageNumber = 1,
  sortColumn = '',
  sortOrder = ''
) {
  let url = new URL(`https://localhost:7024/api/services/required`);
  name !== '' && url.searchParams.append('Name', name);
  sortColumn !== '' && url.searchParams.append('SortColumn', sortColumn);
  sortOrder !== '' && url.searchParams.append('SortOrder', sortColumn);
  url.searchParams.append('PageSize', pageSize);
  url.searchParams.append('PageNumber', pageNumber);

  return get_api(url.href);
}

export async function deleteService(id = 0) {
  return delete_api(`https://localhost:7024/api/services/${id}`);
}



export async function getServiceById(id = 0) {
  if (id > 0) {
    return get_api(`https://localhost:7024/api/services/${id}`);
  }
}


export async function updateService(id = 0, formData) {
  return put_api(`https://localhost:7024/api/services/${id}`, formData);
}

