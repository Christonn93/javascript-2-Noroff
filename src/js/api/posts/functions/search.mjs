import { fetchApi } from "../../../constant/fetch.mjs";
import * as apiVar from "../../../constant/variables.mjs";
import { translatePostModel } from "../feed.mjs";

// Retrieving items from storage
const token = localStorage.getItem("token");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;
const fetchUrl = url + endpointPosts;

const searchInput = document.querySelector("[data-search]");

let posts = [];

export function userSearch() {
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    posts.forEach((post, index) => {
      const isVisible = post.title.toLowerCase().includes(value) || post.authorName.toLowerCase().includes(value);
      document.querySelector("#post-feed").children[index].classList.toggle("d-none", !isVisible);
    });
  });
}

async function postFeed() {
  try {
    let request = await fetchApi(fetchUrl, "GET", token, null);
    posts = request.map(translatePostModel);
  } catch (err) {
    console.log("There was a problem retrieving the user posts", err);
  }
}
postFeed();
