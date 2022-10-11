import * as apiVar from "../../constant/variables.mjs";
import { fetchApi } from "../../constant/fetch.mjs";
import { message } from "../../constant/message.mjs";

let id = "";

// Re-declaring variables from import
const url = apiVar.baseURL;
const postDetails = apiVar.getPostsById + id;
const updatePostUrl = apiVar.deletePost + id;

export function updatePostListener(id) {
  document.querySelector(`button[id=updatePost-${id}]`).addEventListener("click", (e) => {
    displayAlert(id);
  });
}

async function displayAlert(postId) {
  const main = document.querySelector("#confirm-action");
  const displayContent = document.createElement("div");

  try {
    let request = await fetchApi(url + postDetails + postId, "GET", localStorage.getItem("token"), null);
    const { id, title, body, tag, media } = request;

    if (request) {
      let requestBody = {};
      request = await fetchApi(url + postDetails + id, "GET", localStorage.getItem("token"), requestBody);
    }

    const response = await request;

    let requestBody = response;

    //   console.log("Console logging requestBody", requestBody);
    //   console.log("Console logging request", requestBody);

    displayContent.innerHTML = `
  <form class="card bg-theme-bg-sec p-2 mb-5" id="updatePost">
  <div class="container">
   <div class="mb-3">
    <label for="post_title" class="form-label">Title</label>
    <input type="text" class="form-control" id="post_title" placeholder="Title" value="${title}" name="title"/>
   </div>
   <div class="mb-3">
    <label class="form-label">New post</label>
    <textarea class="form-control" id="FormControlTextarea" rows="3" name="body">${body}</textarea>
   </div>
   <div class="mb-3">
    <label for="post_tags" class="form-label">Tags</label>
    <input type="text" class="form-control" id="post_tags" placeholder="Tags" value="${tag}" name="tag"/>
   </div>
   <button type="submit" class="btn btn-theme-btn" id="formButton">Update post</button>
  </div>
 </form>`;

    main.append(displayContent);
    formListener(id);
  } catch (error) {
    console.log(error);
  }
}

function formListener(id) {
  const form = document.querySelector("#updatePost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const newData = Object.fromEntries(formData.entries());

      // console.log("New form data", newData);
      // send it to API
      updatePost(id, newData);
    });
  }
}

async function updatePost(id, content) {
  const callUrl = url + updatePostUrl + id;
  const userToken = localStorage.getItem("token");
  try {
    const request = await fetchApi(callUrl, "PUT", userToken, content);
    window.location.reload();
  } catch (error) {
    message("Error");
  }
}
