import {
  LoopingCard,
  cardTemplate,
  cardAttributes,
  cardElement,
} from "../../utils/classes/cardClass.mjs";
import { retrievingPostData } from "./feed.mjs";

import { deletePostListener } from "./functions/deletePost.mjs";
import { updatePostListener } from "./functions/updatePost.mjs";

const postArray = await retrievingPostData();

/**
 * This Function is simply retrieving the post arrays
 */
export async function postFeed() {
  try {
    let request = postArray;
    createPostFeed(request);
  } catch (err) {
    console.log("There was a problem retrieving the user posts", err);
  }
}

/**
 * This function is for populating the HTML with details from post array from the api
 *
 * @param {*} postData This is needed to be able to populate the feed of posts.
 */
export function createPostFeed(postArray) {
  postArray.forEach((data) => {
    const feedContainer = document.querySelector("#post-feed");

    const {
      id,
      title,
      created,
      body,
      authorName,
      authorAvatar,
      posted,
      updated,
      tag,
      postImage,
      avatar,
      commNum,
      comments,
      reactNum,
      react,
      count,
    } = data;

    // Constants for DOM manipulations
    let userAvatar = "";
    let postContentImage = "";
    let postSettings = "";

    // Looking for author.name in the api fetch. Displaying settings wheel if the return value is true
    const currentUser = localStorage.getItem("username");
    if (currentUser === authorName) {
      postSettings = `<span class="settings d-flex justify-content-end">
       <div class="dropdown">
       <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-gear"></i></a>
       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
         <li><button class="dropdown-item change-post" id="updatePost-id-${id}">Update</button></li>
         <li><button class="dropdown-item change-post" id="deletePost-id-${id}">Delete</button></li>
       </ul>
     </div>`;
    }

    // Choosing what type of HTML element to render
    const classElement = cardElement();

    // Adding attributes to the HTML element
    const classAttributes = cardAttributes(id);

    // Laying out the HTMl to render for each card
    const classTemplate = cardTemplate(
      userAvatar,
      authorName,
      postSettings,
      id,
      title,
      body,
      postImage,
      authorAvatar,
      postContentImage,
      created,
      updated,
      react,
      reactNum,
      commNum,
      comments
    );

    // Creating a new card based on variables defined over.
    const card = new LoopingCard(classElement, classAttributes, classTemplate);

    // Removing loader
    const loader = document.querySelector(".loader");
    loader.style = "display: none;";

    feedContainer.append(card);

    if (currentUser === authorName) {
      deletePostListener(id);
      updatePostListener(id);
    }
  });
}
