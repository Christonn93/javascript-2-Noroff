import { retrievingPostData } from "../feed.mjs";
const postArray = await retrievingPostData();

// Selecting html element for use in function
const searchInput = document.getElementById("postSearch");

// Retrieving array from fetch
const searchArray = postArray;

/**
 * A search function that reacts on user input in search field on page.
 */
export function userSearch() {
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const value = e.target.value.toLowerCase();
      searchArray.forEach((post, index) => {
        const isVisible =
          post.title.toLowerCase().includes(value) ||
          post.authorName.toLowerCase().includes(value) ||
          post.body.toLowerCase().includes(value);
        document
          .querySelector("#post-feed")
          .children[index].classList.toggle("d-none", !isVisible);
      });
    });
  }
}
