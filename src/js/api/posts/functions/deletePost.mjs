import * as apiVar from "../../../constant/variables.mjs";
import { fetchApi } from "../../../constant/fetch.mjs";
import { message } from "../../../constant/message.mjs";
import { retrievingPostData } from "../feed.mjs";
const postArray = await retrievingPostData();

if (postArray) {
  const { postID } = postArray;
}

let id = "";

// Re-declaring variables from import
const url = apiVar.baseURL;
const postDetails = apiVar.getPostsById + id;
const deletePost = apiVar.deletePost;

/**
 *
 * A button listener for deleting form
 *
 * @param {*} postID takes postID from fetched array
 */

export function deletePostListener(postID) {
  document
    .querySelector(`#deletePost-id-${postID}`)
    .addEventListener("click", (e) => {
      displayAlert(postID);
    });
}

async function displayAlert(postId) {
  try {
    const request = await fetchApi(
      url + postDetails + postId,
      "GET",
      localStorage.getItem("token"),
      null
    );
    const { title, id } = request;

    const main = document.querySelector("#confirm-action");

    const displayContent = document.createElement("div");
    displayContent.id = "actionForm";
    displayContent.innerHTML = `<form class="container-fluid d-flex gap-5 mt-5 mb-5 justify-content-center" id="deletePost-${id}">
  <div class="d-flex flex-column card p-5">
   <div class="d-flex flex-column">
      <h4 class="align-self-center">Delete post</h4>
      <p class="align-self-center">Are you sure you want to delete the post with title - ${title}?</p>
   </div>
   <div class="d-flex gap-2 justify-content-center">
      <button id="accept" class="btn btn-theme-bg-sec" name="confirm" value="yes">Yes</button>
      <button id="reject" class="btn btn-theme-bg-sec" name="confirm" value="no">no</button>
   </div>
  </div>
 </form>`;

    main.append(displayContent);

    if (displayContent) {
      eventListener(postId);
    }
  } catch (error) {
    console.log(error);
  }
}

function eventListener(id) {
  const form = document.querySelector(`#deletePost-${id}`);
  const accept = document.querySelector("#accept");
  const reject = document.querySelector("#reject");
  const formContainer = document.querySelector("#actionForm");

  if (form) {
    accept.addEventListener("click", (event) => {
      event.preventDefault();
      // send it to API
      removePost(id);
    });

    reject.addEventListener("click", (action) => {
      formContainer.remove();
    });
  }
}

async function removePost(id) {
  try {
    const request = await fetchApi(
      url + deletePost + id,
      "DELETE",
      localStorage.getItem("token"),
      null
    );
    window.location.reload();
  } catch (error) {
    message("Error");
  }
}

function createDeleteForm(id, title) {
  const displayContent = document.createElement("div");
  displayContent.id = "actionForm";
  displayContent.innerHTML = `<form class="container-fluid d-flex gap-5 mt-5 mb-5 justify-content-center" id="deletePost-${id}">
<div class="d-flex flex-column card p-5">
 <div class="d-flex flex-column">
    <h4 class="align-self-center">Delete post</h4>
    <p class="align-self-center">Are you sure you want to delete the post with title - ${title}?</p>
 </div>
 <div class="d-flex gap-2 justify-content-center">
    <button id="accept" class="btn btn-theme-bg-sec" name="confirm" value="yes">Yes</button>
    <button id="reject" class="btn btn-theme-bg-sec" name="confirm" value="no">no</button>
 </div>
</div>
</form>`;

  return displayContent;
}
