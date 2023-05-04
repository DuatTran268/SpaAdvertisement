import { delete_api, get_api, post_api } from "./Method";

export async function getAllService(){
  return get_api (`https://localhost:7024/api/services`)
}

export async function getServiceBySlug(urlSlug = ''){
  return get_api (`https://localhost:7024/api/services/slug/${urlSlug}`)
}

export async function getAllServiceType(){
  return get_api (`https://localhost:7024/api/servicetypes`)
}
export function addService(formData) {
  return post_api("https://localhost:7024/api/servicetypes", formData);
}

export function addServiceImage(id) {
  return get_api(`https://localhost:7024/api/servicetypes/${id}/picture`);
}

export async function getSerciveById(id = 0) {
  if (id > 0) return get_api(`https://localhost:7024/api/servicetypes/${id}`);
  return null;
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
export function addUser(formData) {
  return post_api('https://localhost:7024/api/users/Add', formData);
}

export async function getUserById(id = 0) {
  if (id > 0) return get_api(`https://localhost:7024/api/users/${id}`);
  return null;
}

export function getBooking() {
  return get_api('https://localhost:7024/api/bookings');
 }
export function getDeleteUser(id) {
  return delete_api(`'https://localhost:7024/api/users/${id}`);
 }



