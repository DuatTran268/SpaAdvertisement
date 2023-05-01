import axios from 'axios';
import { get_api } from './Methods';
import { post_api } from './Methods';

export function getUser() {
    return get_api('https://localhost:7024/api/users');
   }

   export function postUser() {
    return post_api('https://localhost:7024/api/users');
   }

// export function postUser(
//     fullName = "",
//     email = "",
//     password = "",
//     address = "",
//     roleId = "",
//   ) {
//     let url = new URL("https://localhost:7024/api/users");
//     fullName !== "" && url.searchParams.append("fullName", fullName);
//     email !== "" && url.searchParams.append("Email", email);
//     password !== "" && url.searchParams.append("Password", password);
//     address !== "" && url.searchParams.append("Address", address);
//     roleId !== "" && url.searchParams.append("roleId", roleId);
//     return post_api(url.href);
//   }