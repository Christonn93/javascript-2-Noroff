// Importing function factory
import { Card } from "../../utils/classes/cardClass.mjs";
import { getUserPosts } from "../posts/userFilteredPosts.mjs";
import { fetchData } from "./fetchProfileData.mjs"; 

// Creating function to display user profile
export async function displayProfile() {

const token = localStorage.getItem("token")
const name = localStorage.getItem("username")

const authUser = await fetchData(token, name);

getUserPosts(authUser);

// const card = new Card("div", "profile-card card", "profile-card", `${title}`, null,`${body}`, null, null, null)


}





















 //    if (response) {
 //   const profileInfo = document.querySelector("#profile-info");

 //   // Creating profile card with factory function
 //   const newCard = element("div", "profile-card", "profile-card");

 //   // Creating card content
 //   newCard.innerHTML = `
 //           <div class="card h-100">
 //              <img src="${response.avatar}" class="card-img-top image" alt="User profile image">
 //              <div class="card-body">
 //                <h5 class="card-title">${response.name}</h5>
 //                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
 //              </div>
 //            </div>`;

 //   // Appending content to new div
 //   profileInfo.append(newCard);
 //  } else {
 //   // Alerting the user if any problems
 //   alert("OBS! Some bugs have joined the party. Please try again");
 //   console.log("Something went wrong when loading profile data");
 //  }