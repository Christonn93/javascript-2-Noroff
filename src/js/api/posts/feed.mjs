import { fetchApi } from "../../constant/fetch.mjs";
import * as apiVar from "../../constant/variables.mjs";
// Retrieving items from storage
const token = localStorage.getItem("token");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;
const fetchUrl = url + endpointPosts;

export let posts = []

export function translatePostModel(postData) {
  return {
    // Author related
    authorName: postData.author.name,
    authorEmail: postData.author.email,
    authorAvatar: postData.author.avatar,
    // Post related
    title: postData.title,
    body: postData.body,
    postId: postData.id,
    postImage: postData.media,
    // Dates
    posted: postData.created,
    updated: postData.updated,
    // Numbers related to post
    count: postData._count, // This is an array
    reactNum: postData._count.reactions,
    commNum: postData._count.comments,
    // Comments on post
    com: postData.comments, // This is an array
    // Reaction to post
    react: postData.reactions, // This is an array
    // Post Tags
    tag: postData.tags, // This is an array
  };
}

export async function postFeedMap() {
  try {
    const response = await fetchApi(fetchUrl, "GET", token, null);
    return response.map(translatePostModel)
  } catch (err) {
    console.log("There was a problem retrieving the user posts", err);
  }
}

alert("Instead of calling postFeedMap here, import it somewhere else and call it there. This keeps your modules reusable.")
postFeedMap()