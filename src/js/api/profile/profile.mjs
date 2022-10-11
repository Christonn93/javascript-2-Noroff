// Importing function factory
import * as apiVar from "../../constant/variables.mjs";
import { fetchApi } from "../../constant/fetch.mjs";
import { LoopingCard } from "../../utils/classes/cardClass.mjs";
import { getUserPosts } from "../posts/userFilteredPosts.mjs";

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;
const fetchUrl = url + endpointPosts;

// Creating function to display user profile
export async function displayProfile() {
  const token = localStorage.getItem("token");

  const authUser = await fetchApi(fetchUrl, "GET", token, null);
  getUserPosts(authUser);
}

const userInfoContainer = document.getElementById("userInfo");
if (userInfoContainer) {
  async function displayUserInformation() {
    try {
      const userInfo = await fetchApi(url + apiVar.getProfile + localStorage.getItem("username"), "GET", localStorage.getItem("token"), null);

      const { name, avatar, banner, _count } = userInfo;
      const profileCard = new LoopingCard(
        "div",
        {
          id: `profileCard`,
          class: "container-fluid d-flex justify-content-center",
        },
        `<div class="card">
    <div class="card-body">
      <img src="${avatar}" class="image"/>
      <h4 class="card-title">${name}</h4>
      <div class="">
      <ul class="list-group">
         <li class="list-group-item">Posts: ${_count.posts}</li>
         <li class="list-group-item">Followers: ${_count.followers}</li>
         <li class="list-group-item">Following: ${_count.following}</li>
        </ul>
      </div>
     </div>
     </div>`
      );

      userInfoContainer.append(profileCard);
    } catch (error) {
      console.log(error);
    }
  }
  displayUserInformation();
}
