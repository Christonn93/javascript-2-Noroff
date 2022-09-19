// Importing function factory and variables
import * as factory from "../../../constant/factory.mjs";
import * as apiVar from "../../../api/_variables.mjs";
const card = factory.createCards;

// Retrieving items from storage
const token = localStorage.getItem("token");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;

// Function to retrieve user posts
export async function getUserPosts() {
 try {
  const request = await fetch(url + endpointPosts + `?_author=true&_comments=true&_reactions=true`, {
   method: "get",
   headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
   },
   body: JSON.stringify(),
  });
  const response = await request.json();

  // Making a if statement to check if response is there
  // If the response is not, the user will receive a pop up alert
  if (response) {
   const data = response;

   data.forEach((el) => {
    const feedContainer = document.querySelector("#post-feed");

    // Creating card content
    const displayCard = card("div", "card", `post-${el.id}`, `${el.title}`, `${el.body}`, `${el.author.name}`, `${el.created}`);

    // Appending content to new div
    feedContainer.append(displayCard);
   });

   console.log("This is the filtered response", data);
  } else {
   // Alerting the user if any problems
   alert("OBS! Some bugs have joined the party. Please try again");
   console.log("Something went wrong when loading post data");
  }
 } catch (err) {
  console.log("There was a problem retrieving the user posts", err);
 }
}