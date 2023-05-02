import { delete_api, get_api } from "./Method";

export async function getAllService(){
  return get_api (`https://localhost:7024/api/services`)
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
export async function getServiceBooking(){
  return get_api (`https://localhost:7024/api/typebookings`)

}

export function getUser() {
  return get_api('https://localhost:7024/api/users');
 }

export function getBooking() {
  return get_api('https://localhost:7024/api/bookings');
 }
export function getDeleteUser(id) {
  return delete_api(`'https://localhost:7024/api/users/${id}`);
 }



