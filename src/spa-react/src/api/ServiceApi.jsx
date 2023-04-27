import { get_api } from "./Method";

export async function getAllService(){

  return get_api (`https://localhost:7024/api/services`)

}

export async function getServiceBySlug(urlSlug = ''){
  return get_api (`https://localhost:7024/api/services/slug/${urlSlug}`)
}