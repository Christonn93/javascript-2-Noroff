// Importing API variables
import * as apiVar from "../../constant/variables.mjs";
import { message } from "../../constant/message.mjs";
import { fetchApi } from "../../constant/fetch.mjs";

// Re-declaring variables from import
const url = apiVar.baseURL + apiVar.login;

/**
 *
 * @param {*} email
 * @param {*} password
 */
export async function authUser(email, password) {
  const data = {
    email: `${email}`,
    password: `${password}`,
  };

  try {
    await fetchApi(url, "POST", null, data);
    window.location.href = "./pages/profile/index.html";
  } catch (error) {
    message("invalid");
  }
}
