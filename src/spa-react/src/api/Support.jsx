import { put_api } from "./Method";

export async function putCustomerSupport(id = 0, formData) {
  return put_api(`https://localhost:7024/api/supports/${id}`, formData);
}