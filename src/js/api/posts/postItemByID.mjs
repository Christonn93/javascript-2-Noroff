import { fetchApi } from "../../constant/fetch.mjs";
import * as apiVar from "../../constant/variables.mjs";
import {
  LoopingCard,
  cardTemplate,
  cardAttributes,
  cardElement,
} from "../../utils/classes/cardClass.mjs";
import { retrievingPostData } from "./feed.mjs";
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

    if (id === postId) {
      const postArray = await retrievingPostData();
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
      } = postArray;
      // Constants for DOM manipulations
      let userAvatar = "";
      let postContentImage = "";
      let postSettings = "";

      const feedContainer = document.querySelector("#post-feed");
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
      const card = new LoopingCard(
        classElement,
        classAttributes,
        classTemplate
      );

      // Removing loader
      const loader = document.querySelector(".loader");
      loader.style = "display: none;";

      feedContainer.append(card);
    }
  } catch (err) {
    console.log("There was a problem retrieving the user posts", err);
  }
}
