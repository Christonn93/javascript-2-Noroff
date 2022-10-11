import { fetchApi } from "../../constant/fetch.mjs";
import * as apiVar from "../../constant/variables.mjs";
import { LoopingCard } from "../../utils/classes/cardClass.mjs";
import { changeTimeFormat } from "../../utils/changeTime.mjs";
import { postFeedImageModal } from "../../utils/imageModal.mjs";
import { displayPageLoader } from "../../utils/loader.mjs";
displayPageLoader()

// Retrieving items from storage
const token = localStorage.getItem("token");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const fetchUrl = url + endpointPosts;

// The array for the sort function and search functions
export let arrayPosts = [];

/**
 * This Function is simply retrieving the post arrays
 */
export async function postFeed() {
  try {
    let request = await fetchApi(fetchUrl + params, "GET", token, null);
    arrayPosts = request;

    createPostFeed(arrayPosts);
  } catch (err) {
    console.log("There was a problem retrieving the user posts", err);
  }
}

/**
 * This function is for populating the HTML with details from post array from the api
 *
 * @param {*} postData This is needed to be able to populate the feed of posts.
 */
function createPostFeed(postData) {
  alert("This function is too large and does too many different things. It needs to be refactored.")
  arrayPosts = postData;

  postData.forEach((data) => {
    const feedContainer = document.querySelector("#post-feed");

    const { id, title, created, body, author, updated, tag, media, avatar, comments, reactions, _count } = data;

    // Time formatting
    const formattedCreated = changeTimeFormat(created);
    const formattedUpdated = changeTimeFormat(updated);

    // Constants for DOM manipulations
    let userAvatar = "";
    let postImage = "";
    let commentsHtml = "";
    let postSettings = "";

    if (media) {
      postImage = `<a href="#openImageModal"><img src="${media}" class="small-image" alt="" loading="lazy" /></a>;`;
    }

    if (comments) {
      const commentsTimeCreated = changeTimeFormat(comments.map((e) => e.created));

      commentsHtml = comments
        .map(
          (e) => `
       <div class="d-flex flex-column p-2"> 
       <h5>Comments</h5>
       <div class="container card me-1 p-1" id="commentId-${e.id}">
         <div class="card-body">
             <p class="card-text">${e.body}</p>
         </div>
         <div class="card-footer">
             <small class="text-muted"> - ${e.owner}</small>
             <div class="row">
               <small class="text-muted">Published ${commentsTimeCreated}</small>
             </div>
       </div> 
       </div>
     `
        )
        .join("");
    }

    if (author.avatar) {
      userAvatar = `<img src="${author.avatar}" class="img-thumbnail user-avatar-small" alt="" loading="lazy" />`;
    }

    const currentUser = localStorage.getItem("username");
    if (currentUser === author.name) {
      postSettings = `<span class="settings d-flex justify-content-end">
     <div class="dropdown">
     <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-gear"></i></a>
     <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
       <li><button class="dropdown-item change-post" id="updatePost-id-${id}">Update</button></li>
       <li><button class="dropdown-item change-post" id="deletePost-id-${id}">Delete</button></li>
     </ul>
   </div>`;
    }

    const card = new LoopingCard(
      "div",
      {
        id: `post-id-${id}`,
        class: "card container-fluid d-flex justify-content-center gap-3 p-0",
        "data-id": "postItem",
      },
      `<div class="card-header">
       <div class="d-flex flex-fill">
        <div class="d-flex flex-fill gap-2 align-items-center">
         ${userAvatar}
         <h4 class="text-muted"><a href="" class="muted-link text-muted">${author.name}</a></h4>
        </div>
        ${postSettings}
       </div>
      </div>
    
      <div class="card-body">
       <a href="../posts/index.html?id=${id}" class="h5 text-black text-decoration-none"><h5 class="card-title">${title}</h5></a>
       <p class="card-text">${body}.</p>
       ${postImage}
      </div>
      <div class="card-footer">
       <div class="row">
        <small class="text-muted">Published ${formattedUpdated}</small>
        <small class="text-muted">Last updated ${formattedUpdated}</small>
       </div>
       <div class="mt-2">
        <button class="btn" id="btn-comments"><i class="fa-regular fa-comment"></i> ${_count.comments}</button>
        <button class="btn" id="btn-like"><i class="fa-solid fa-thumbs-up"></i>  ${_count.reactions}</button>
       </div>
      </div>
     </div>
     <div class="d-none">
      <div id="comments-${id}">
       <form action="" class="card p-2 mb-5">
        <div class="container">
         <div class="mb-3 gap-1">
          <textarea class="form-control"></textarea>
          <button class="btn float-end" type="submit">Comment</button>
         </div>
        </div>
       </form>
      </div>
      ${commentsHtml}
     </div>
    </div>
         `
    );
    // Removing loader
    const loader = document.querySelector(".loader");
    loader.style = "display: none;";

    feedContainer.append(card);
  });
}
