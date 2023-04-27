import { get_api } from "./Method";

export async function getAllServiceType(){

  return get_api (`https://localhost:7024/api/services`)

}