import { retrievingPostData } from "./feed.mjs";
import { createPostFeed } from "./postFeed.mjs";
import { displayIfNoPosts } from "../../constant/noPostDisplay.js";

const postArray = await retrievingPostData();

// Function to retrieve user posts
export async function getUserPosts() {
  const request = postArray;
  if (request) {
    const data = request;
    const dataFilter = data.filter(function (resp) {
      return resp.authorEmail === localStorage.getItem("email");
    });

    if (dataFilter) {
      createPostFeed(dataFilter);
    }

    if (dataFilter.length == 0) {
      displayIfNoPosts();
    }
  }
}
