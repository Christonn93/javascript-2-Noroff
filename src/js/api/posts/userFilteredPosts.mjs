import { LoopingCard } from "../../utils/classes/cardClass.mjs";
import { changeTimeFormat } from "../../utils/changeTime.mjs";
import { deletePostListener } from "./functions/deletePost.mjs";
import { updatePostListener } from "./functions/updatePost.mjs";
import { retrievingPostData } from "./feed.mjs";
import { createPostFeed } from "./postFeed.mjs";

const postArray = await retrievingPostData();

// Function to retrieve user posts
export async function getUserPosts() {
  const request = postArray;
  if (request) {
    const data = request;
    const dataFilter = data.filter(function (resp) {
      return resp.authorEmail === localStorage.getItem("email");
    });

    createPostFeed(dataFilter);

    deletePostListener(dataFilter.id);
    updatePostListener(dataFilter.id);
    //     dataFilter.forEach((data) => {
    //       const feedContainer = document.querySelector("#post-feed");

    //       const {
    //         id,
    //         title,
    //         created,
    //         body,
    //         authorName,
    //         authorAvatar,
    //         updated,
    //         tag,
    //         postImage,
    //         avatar,
    //         comments,
    //         react,
    //         count,
    //       } = data;

    //       const formattedCreated = changeTimeFormat(created);
    //       const formattedUpdated = changeTimeFormat(updated);

    //       // Constants for DOM manipulations
    //       let userAvatar = "";
    //       let postContentImage = "";
    //       let commentsHtml = "";
    //       let postSettings = "";

    //       // Adding image in the card if the creator of the post have added image in the post.
    //       if (postImage) {
    //         postContentImage = `<a href="#openImageModal"><img src="${postImage}" class="small-image" alt="" loading="lazy" /></a>`;
    //       }

    //       // Looking for comments. Will display the comments if it is added any comments to the post.
    //       if (comments) {
    //         const commentsTimeCreated = changeTimeFormat(
    //           comments.map((e) => e.created)
    //         );

    //         commentsHtml = comments
    //           .map(
    //             (e) => `
    //          <div class="d-flex flex-column p-2">
    //          <h5>Comments</h5>
    //          <div class="container card me-1 p-1" id="commentId-${e.id}">
    //            <div class="card-body">
    //                <p class="card-text">${e.body}</p>
    //            </div>
    //            <div class="card-footer">
    //                <small class="text-muted"> - ${e.owner}</small>
    //                <div class="row">
    //                  <small class="text-muted">Published ${commentsTimeCreated}</small>
    //                </div>
    //          </div>
    //          </div>
    //        `
    //           )
    //           .join("");
    //       }
    //       // Looking for author image. Displaying image if the return value is true
    //       if (authorAvatar) {
    //         userAvatar = `<img src="${authorAvatar}" class="img-thumbnail user-avatar-small" alt="" loading="lazy" />`;
    //       }

    //       // Looking for author.name in the api fetch. Displaying settings wheel if the return value is true
    //       const currentUser = localStorage.getItem("username");
    //       if (currentUser === authorName) {
    //         postSettings = `<span class="settings d-flex justify-content-end">
    //         <div class="dropdown">
    //         <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-gear"></i></a>
    //         <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    //         <li class="updatePost">
    //         <button class="dropdown-item" id="updatePost-${id}" name="update" value="${id}">Update</button>
    //         </li>
    //         <li class="deletePost">
    //         <button class="dropdown-item" id="deletePost-${id}" name="delete" value="${id}">Delete</button>
    //         </li>
    //         </ul>
    //         </div>`;
    //       }

    //       // Choosing what type of HTML element to render
    //       const classElement = "div";

    //       // Adding attributes to the HTML element
    //       const classAttributes = {
    //         id: `post-id-${id}`,
    //         class: "card container-fluid d-flex justify-content-center gap-3 p-0",
    //         "data-id": "postItem",
    //       };

    //       // Laying out the HTMl to render for each card
    //       const classTemplate = `<div class="card-header">
    //     <div class="d-flex flex-fill">
    //       <div class="d-flex flex-fill gap-2 align-items-center">
    //       ${userAvatar}
    //     <h4 class="text-muted"><a href="" class="muted-link text-muted">${authorName}</a></h4>
    //     </div>
    //     ${postSettings}
    //     </div>
    //     </div>
    //     <div class="card-body">
    //     <a href="../posts/index.html?id=${id}" class="h5 text-black text-decoration-none"><h5 class="card-title">${title}</h5></a>
    //     <p class="card-text">${body}.</p>
    //     ${postContentImage}
    //     </div>
    //     <div class="card-footer">
    //     <div class="row">
    //       <small class="text-muted">Published ${formattedCreated}</small>
    //       <small class="text-muted">Last updated ${formattedUpdated}</small>
    //     </div>
    //     <div class="mt-2">
    //      <button class="btn" id="btn-comments"><i class="fa-regular fa-comment"></i> ${count.comments}</button>
    //      <button class="btn" id="btn-like"><i class="fa-solid fa-thumbs-up"></i>  ${count.reactions}</button>
    //     </div>
    //   </div>
    //     </div>
    // <div class="d-none">
    // <div id="comments-${id}">
    // <form action="" class="card p-2 mb-5">
    //  <div class="container">
    //   <div class="mb-3 gap-1">
    //    <textarea class="form-control"></textarea>
    //    <button class="btn float-end" type="submit">Comment</button>
    //   </div>
    //  </div>
    // </form>
    // </div>
    // ${commentsHtml}
    // </div>
    // </div>
    //   `;

    //       // Creating a new card based on variables defined over.
    //       const card = new LoopingCard(
    //         classElement,
    //         classAttributes,
    //         classTemplate
    //       );

    //       // Removing loader
    //       const loader = document.querySelector(".loader");
    //       loader.style = "display: none;";

    //       feedContainer.append(card);

    //       deletePostListener(id);
    //       updatePostListener(id);
    //     });
  }
}
