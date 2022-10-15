// Importing function factory
import * as apiVar from "../../constant/variables.mjs";
import { fetchApi } from "../../constant/fetch.mjs";
import { LoopingCard } from "../../utils/classes/cardClass.mjs";
import { getUserPosts } from "../posts/userFeed.mjs";

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;
const fetchUrl = url + endpointPosts;

// Creating function to display user profile
export async function displayProfile() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const authUser = await fetchApi(fetchUrl, "GET", token, null);
  getUserPosts(authUser);
}

const userInfoContainer = document.getElementById("userInfo");
if (userInfoContainer) {
  async function displayUserInformation() {
    try {
      const userInfo = await fetchApi(
        url + apiVar.getProfile + localStorage.getItem("username"),
        "GET",
        localStorage.getItem("token"),
        null
      );

      const { name, avatar, _count: numbers } = userInfo;

      // Card class related variables

      // Defining the HTMl element for the card class
      const cardElement = "div";

      // Defining attributes to the HTML element
      const cardAttributes = {
        id: `profileCard`,
        class: "container-fluid d-flex justify-content-center",
      };

      // Defining the HTMl to render for each card
      const cardTemplate = `<div class="card">
      <div class="card-body">
        <img src="${avatar}" class="image"/>
        <h4 class="card-title">${name}</h4>
        <div class="">
        <ul class="list-group">
           <li class="list-group-item">Posts: ${numbers.posts}</li>
           <li class="list-group-item">Followers: ${numbers.followers}</li>
           <li class="list-group-item">Following: ${numbers.following}</li>
          </ul>
        </div>
       </div>
       </div>`;

      // Calling the card Class and adding the needed variables
      const profileCard = new LoopingCard(
        cardElement,
        cardAttributes,
        cardTemplate
      );

      userInfoContainer.append(profileCard);
    } catch (error) {
      console.log(error);
    }
  }
  displayUserInformation();
}
