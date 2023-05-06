import { get_api } from "./Method";

export async function getAllDashboard(){
  return get_api(`https://localhost:7024/api/dashboard`)
}