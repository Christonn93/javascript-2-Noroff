import { fetchApi } from "../../constant/fetch.mjs";
import * as apiVar from "../../constant/variables.mjs";

// Re-declaring variables from import
const fetchUrl = apiVar.baseURL + apiVar.getPosts;

export function translatePostModel(postData) {
  return {
    // Author related
    authorName: postData.author.name,
    authorEmail: postData.author.email,
    authorAvatar: postData.author.avatar,
    // Post related
    title: postData.title,
    id: postData.id,
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

async function postFeedMap() {
  try {
    const response = await fetchApi(
      fetchUrl,
      "GET",
      localStorage.getItem("token"),
      null
    );

    if (localStorage.getItem("token")) {
      return response.map(translatePostModel);
    }
  } catch (err) {
    console.log("There was a problem retrieving the user posts", err);
  }
}

export async function retrievingPostData() {
  if (!localStorage.getItem("token")) {
  return null;
  }
  
  let posts = await postFeedMap();
  return posts;
}
