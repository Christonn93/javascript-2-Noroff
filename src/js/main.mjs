// // Importing all modules
import * as user from "./user/index.mjs";
import { logOut } from "./user/login/logout.mjs";
import { displayProfile } from "./user/profile/profile.mjs";
import { display404Page } from "./constant/404page.mjs";
import { checkUserStatus } from "./constant/statcheck.mjs";

// // Creating variables to use in the if statement under
const logOutButton = document.querySelector("#logout");

//Executing logout function if the logout button is present
if (logOutButton) {
 logOut();
}

async function router() {
 const routeName = document.body.id;

 switch (routeName) {
  // Executing sign in function if the location is based on the log in location
  case "index":
   user.formEvent();
   checkUserStatus(localStorage.getItem("token"))
   break;

   // Executing the the function for the profile page layout
  case "profile":
   displayProfile();
   break;

  case "404":
  default:
   display404Page();
 }
}
router()