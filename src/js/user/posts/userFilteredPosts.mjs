import { fetchApi } from "../../constant/fetch.mjs";
import * as apiVar from "../../constant/variables.mjs";
import { Card } from "../../utils/classes/cardClass.mjs";

// Retrieving items from storage
const token = localStorage.getItem("token");
const localEmail = localStorage.getItem("email");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;

// Function to retrieve user posts
export async function getUserPosts() {
 try {
  const response = await fetchApi(url + endpointPosts, "GET", token, null)
  
  if (response) {
   const data = response;

   const dataFilter = data.filter(function (resp) {
    return resp.author.email == localEmail;
   });

   dataFilter.forEach((el) => {

    const card = new Card("div", "profile-card card", "profile-card", `${el.title}`, null,`${el.body}`, null, null, null)

    const feedContainer = document.querySelector("#post-feed");
    feedContainer.append(card);
   });

   console.log("This is the filtered response", dataFilter);
  }
 } catch (err) {
  console.log("There was a problem retrieving the user posts", err);
 }
}

