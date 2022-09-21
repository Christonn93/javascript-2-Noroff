import * as apiVar from "../../api/_variables.mjs";

// Declaring variables
const loginForm = document.querySelector("form#login");

// Re-declaring variables from import
const url = apiVar.baseURL;
const login = apiVar.login;

// Register user function
export async function signIn(email, password) {
 try {
  const request = await fetch(url + login, {
   method: "post",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify({ email, password }),
  });
  const response = await request.json();

  if (response) {
   // Creating a shorter const for saving in local storage
   const i = response;

   // Storing response in local storage
   localStorage.setItem("token", i.accessToken);
   localStorage.setItem("username", i.name);
   localStorage.setItem("email", i.email);
   localStorage.setItem("avatar", i.avatar);
  }

  const token = localStorage.getItem("token");

  if (token == undefined) {
   window.location.replace("./");
  } else {
   window.location.replace("../../pages/profile/index.html");
  }
 } catch (err) {
  console.log("Obs! Something went wrong with login function", err);
 }
}