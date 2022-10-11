import * as apiVar from "../../constant/variables.mjs";
import { fetchApi } from "../../constant/fetch.mjs";

// Re-declaring variables from import
const url = apiVar.baseURL;
const createNew = apiVar.createNewPost;

const postUrl = url + createNew;

async function createPosts(postData) {
   try {
      if (postData) {
         let newPostData = {};

         if (postData.media === "") {
            delete postData.media
         }
         newPostData = postData;
         const request = await fetchApi(postUrl, "POST", localStorage.getItem("token"), newPostData);
         console.log(request);
      }
   } catch (error) {
      console.log(error)
   }
}

export function createPostListener() {
   const form = document.querySelector("#createPost");

   if (form) {
      form.addEventListener("submit", (event) => {
         event.preventDefault();

         const form = event.target;
         const formData = new FormData(form);
         const newData = Object.fromEntries(formData.entries());

         console.log("New form data", newData);
         // send it to API
         createPosts(newData);
      });
   }
}