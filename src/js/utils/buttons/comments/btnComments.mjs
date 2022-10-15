import { fetchApi } from "../../../constant/fetch.mjs";
import * as apiVar from "../../../constant/variables.mjs";

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;

// Retrieving items from storage
const token = localStorage.getItem("token");

export async function showComments() {
  const request = await fetchApi(url + endpointPosts, "GET", token, null);
  if (request.ok) {
    buttonListener(id);
  }
}

function buttonListener(id) {
  const button = document.querySelector("#btn-comments");

  button.addEventListener("click", (e) => {
    e.document.querySelector(`#comments-${id}`);

    if (comments.style == "d-none") {
      comments.classList.remove("d-none");
      comments.classList.add("d-flex");
    }
  });
}
