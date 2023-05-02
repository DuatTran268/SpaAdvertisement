import { put_api } from "./Method";

export async function putCustomerSupport(formData) {
  return put_api(`https://localhost:7024/api/supports`, formData);
}