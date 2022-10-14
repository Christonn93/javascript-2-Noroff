import { fetchApi } from "../../constant/fetch.mjs";
import * as apiVar from "../../constant/variables.mjs";
import { createPostFeed } from "./postFeed.mjs";
// Retrieving items from storage
const token = localStorage.getItem("token");

// Retrieving url params
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");
const paramId = postId + `?_author=true&_comments=true&_reactions=true`;

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPostsById;
const fetchUrl = url + endpointPosts + `${paramId}`;

// Function to retrieve user posts
export async function postItemByID() {
  try {
    const request = await fetchApi(fetchUrl, "GET", token, null);
    createPostFeed(request);
  } catch (err) {
    console.log("There was a problem retrieving the user posts", err);
  }
}
