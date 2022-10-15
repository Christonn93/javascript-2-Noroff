import * as apiVar from "../../constant/variables.mjs";
import { authUser } from "./auth.mjs";

// Re-declaring variables from import
const url = apiVar.baseURL + apiVar.login;

/**
 *
 * This is the main sign in fetch function, it needs to params that, the params is user inputs in the form,
 * and its taking the input from the login form, sending it over via the eventlistener.
 *
 * After the eventlistener, and the input is validated it will save items in localstorage for later use.
 * NB! If the fetch response don't have "accessToken" in the json results, the script don't run and the auth function will not run and will display a message for the user.
 *
 * @param {*} email The user's email
 * @param {*} password The user's password
 */
export async function signIn(email, password) {
  try {
    const request = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const response = await request.json();

    if (response.accessToken) {
      // Creating a shorter const for saving in local storage
      const i = response;

      // Storing response in local storage
      localStorage.setItem("token", i.accessToken);
      localStorage.setItem("username", i.name);
      localStorage.setItem("email", i.email);
      localStorage.setItem("avatar", i.avatar);
    }

    // Retrieving items from storage
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("username");

    // Looking for a token, if the token is there it sends the request to auth to authenticate the user information
    if (token) {
      authUser(token, name);
    }
  } catch (err) {
    console.log("Obs! Something went wrong with login function", err);
  }
}
