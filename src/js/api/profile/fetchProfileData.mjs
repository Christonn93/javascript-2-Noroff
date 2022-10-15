// Importing API variables
import * as apiVar from "../../constant/variables.mjs";
import { message } from "../../constant/message.mjs";

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointProfile = apiVar.profile;

/**
 * This function is fetching endpoint to the API for the profile information. When its running the user is redirected to the profile page.
 * If the user don't have a account in the API, it will redirect back to the login page
 *
 * It runs a try catch block to first try and fetch the url.
 *
 * If it is successful it authenticate the user by token.
 * If it ends up with a error, the user will get a message, and it will show in the error in the console whit "console.error(error)"
 *
 * @param {*} url This is the base url for the API. This is automatic added based on API variable
 * @param {*} endpointProfile This is a variable from the API variable. It is based on the endpoint to the profile in the API
 * @param {*} name The name is retrieved from localStorage and is needed to execute the function. Without this the script will not execute
 * @param {*} token The token is retrieved from localStorage and is needed to execute the function. Without this the script will not execute
 */
export async function fetchData(token, name) {
  try {
    const request = await fetch(url + endpointProfile + `${name}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(),
    });

    const response = await request.json();

    if (!response.ok) {
      console.log("You are logged in", response);
    } else {
      window.location.href = "./";
      console.log(
        "Sorry, you was not registered as a valid user. Please create a account"
      );
      message("invalid");
    }
  } catch (error) {
    console.log(error);
  }
}
