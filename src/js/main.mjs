// Importing all modules

// User related imports
import * as user from "./api/index.mjs";
import { displayProfile } from "./api/profile/profile.mjs";
import { checkUserStatus } from "./constant/statcheck.mjs";
import { setRegisterFormListener as setRegisterFormListener } from "./utils/listener/register.mjs";
import { logOut } from "./api/auth/logout.mjs";

// Post related imports
import { postFeed } from "./api/posts/postFeed.mjs";
import { createPostListener } from "./api/posts/functions/createPost.mjs";
import { userSearch } from "./api/posts/functions/search.mjs";
import { filterButtonListener } from "./api/posts/functions/filter.mjs";
import { postItemByID } from "./api/posts/postItemByID.mjs";

// Importing layout
import { display404Page } from "./constant/404page.mjs";
import { displayPageLoader } from "./utils/loader.mjs";

// Creating variables to use in the if statement under
const logOutButton = document.querySelector("#logout");

// Executing logout function if the logout button is present
if (logOutButton) {
  logOut();
}

// Setting default page title
const defaultTitle = "The social universe";

/**
 *
 */
async function router() {
  const routeName = document.body.id;

  switch (routeName) {
    // Executing sign in function if the location is based on the log in location
    case "index":
      // register form
      setRegisterFormListener();
      user.formEvent();
      checkUserStatus(localStorage.getItem("token"));
      document.querySelector("title").innerText = defaultTitle + ` || Homepage`;
      break;

    // Executing the the function for the profile page layout
    case "profile":
      displayProfile();
      createPostListener();
      displayPageLoader();
      document.querySelector("title").innerText =
        defaultTitle + ` || ` + localStorage.getItem("username");
      break;

    // Executing the the function for the feed page
    case "allPosts":
      displayPageLoader();
      postFeed();
      userSearch();
      filterButtonListener();
      document.querySelector("title").innerText =
        defaultTitle + ` || Feed wall`;
      break;

    // Executing the the function for the displaying post by id
    case "postItemByID":
      postItemByID();
      displayPageLoader();
      document.querySelector("title").innerText = defaultTitle + ` || Post`;
      break;

    // Executing the the function for the testing page
    case "testing":
      postFeed();
      document.querySelector("title").innerText =
        defaultTitle + ` || Feed wall`;
      break;

    // Executing the the function for a page if it does not exist
    case "404":
    default:
      display404Page();
  }
}
router();
