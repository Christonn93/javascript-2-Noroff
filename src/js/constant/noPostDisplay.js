import {
    LoopingCard,
    cardTemplate,
    cardAttributes,
    cardElement,
  } from "../utils/classes/cardClass.mjs";

const feed = document.querySelector("#post-feed");

export function displayIfNoPosts(){
    // Choosing what type of HTML element to render
    const classElement = cardElement();

    // Adding attributes to the HTML element
    const classAttributes = cardAttributes();

    // Laying out the HTMl to render for each card
    const classTemplate = `<div class="container">
    <h3>No posts to display</h3>
    <p>Create a post</p>
    <p>Then just sit eager and wait for someone to respond so your life can feel meaningful and your heart can be happy!</p>
    </div>
    `;

        // Removing loader
        const loader = document.querySelector(".loader");
        loader.style = "display: none;";

    // Creating a new card based on variables defined over.
    const card = new LoopingCard(classElement, classAttributes, classTemplate);
    feed.append(card);
}
