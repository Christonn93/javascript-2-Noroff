import { changeTimeFormat } from "../../utils/changeTime.mjs";

/**
 *
 */
export class LoopingCard {
  /**
 * 
 * @param {*} elementName The name on the element, it can be f.eks "div"
 * @param {*} attributes Add class, id, attributes etc
 * @param {*} template  This is what will render in the html
 * @example
 * ``` 
 * "div",
     ```
 * @returns Elements 
 */
  constructor(elementName, attributes = {}, template = "") {
    this.element = document.createElement(elementName);
    this.addAttributes(attributes);
    this.addTemplate(template);
    return this.element;
  }

  /**
   * 
   * @param {*} attributes
   * @example
   * ```
   * {
    id: `post-id-${id}`,
    class: "card container-fluid d-flex justify-content-center p-0 m-0",
    "data-id": "postItem",
   },
   ``` 
   */
  addAttributes(attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      this.element.setAttribute(key, value);
    });
  }

  /**
   * 
   * @param {*} template 
   * @example
   *  ```   
   * `<div class="card-header">
      <div class="d-flex flex-fill">
       <div class="d-flex flex-fill gap-2 align-items-center">
        ${userAvatar}
        <h4 class="text-muted"><a href="" class="muted-link text-muted">${author.name}</a></h4>
       </div>
       ${postSettings}
      </div>
     </div>
     <div class="card-body">
      <a href="../posts/index.html?id=${id}" class="h5 text-black text-decoration-none"><h5 class="card-title">${title}</h5></a>
      <p class="card-text">${body}.</p>
      ${postImage}
     </div>
     <div class="card-footer">
      <div class="row">
       <small class="text-muted">Published ${formattedUpdated}</small>
       <small class="text-muted">Last updated ${formattedUpdated}</small>
      </div>
      <div class="mt-2">
       <button type="button" class="btn" id="btn-comments" name="openComments"><i class="fa-regular fa-comment"></i> ${_count.comments}</button>
       <button class="btn" id="btn-like"><i class="fa-solid fa-thumbs-up"></i>  ${_count.reactions}</button>
      </div>
     </div>
    </div>
     <div class="d-none" id="comments">
      <form action="" class="card p-2 mb-5">
       <div class="container">
        <div class="mb-3 gap-1">
         <textarea class="form-control"></textarea>
         <button class="btn float-end" type="submit">Comment</button>
        </div>
       </div>
      </form>
      ${commentsHtml}
     </div>`
      ```
   */
  addTemplate(template) {
    this.element.innerHTML = `${template}`;
  }
}

// Choosing what type of HTML element to render
export function cardElement() {
  return "div";
}

// Adding attributes to the HTML element
export function cardAttributes(id) {
  const classAttributes = {
    id: `post-id-${id}`,
    class:
      "card shadow-sm container-fluid d-flex justify-content-center gap-3 p-0",
    "data-id": "postItem",
  };
  return classAttributes;
}

// Laying out the HTMl to render for each card
export function cardTemplate(
  userAvatar,
  authorName,
  postSettings,
  id,
  title,
  body,
  postImage,
  authorAvatar,
  postContentImage,
  created,
  updated,
  reactNum,
  commNum,
  com,
  commentsHtml
) {
  // Time formatting
  let formattedCreated = changeTimeFormat(created);
  let formattedUpdated = changeTimeFormat(updated);

  // Adding image in the card if the creator of the post have added image in the post.
  if (postImage) {
    postContentImage = `<a href="#openImageModal"><img src="${postImage}" class="small-image" alt="" loading="lazy" /></a>`;
  }

  // Looking for comments. Will display the comments if it is added any comments to the post.
  if (com) {
    const commentsTimeCreated = changeTimeFormat(com.map((e) => e.created));

    commentsHtml = com.map(
      (e) => `
       <div class="d-flex flex-column p-2"> 
       <h5>Comments</h5>
       <div class="container card me-1 p-1" id="commentId-${e.id}">
         <div class="card-body">
             <p class="card-text">${e.body}</p>
         </div>
         <div class="card-footer">
             <small class="text-muted"> - ${e.owner}</small>
             <div class="row">
               <small class="text-muted">Published ${commentsTimeCreated}</small>
             </div>
       </div> 
       </div>
     `
    );
  }

  // Looking for author image. Displaying image if the return value is true
  if (authorAvatar) {
    userAvatar = `<img src="${authorAvatar}" class="img-thumbnail user-avatar-small" alt="" loading="lazy" />`;
  }

  const classTemplate = `<div class="card-header">
  <div class="d-flex flex-fill">
    <div class="d-flex flex-fill gap-2 align-items-center">
    ${userAvatar}
  <h4 class="text-muted"><a href="" class="muted-link text-muted">${authorName}</a></h4>
  </div>
  ${postSettings}
  </div>
  </div>
  <div class="card-body">
  <a href="../posts/index.html?id=${id}" class="h5 text-black text-decoration-none"><h5 class="card-title">${title}</h5></a>
  <p class="card-text">${body}.</p>
  ${postContentImage}
  </div>
  <div class="card-footer">
  <div class="row">
    <small class="text-muted">Published ${formattedCreated}</small>
    <small class="text-muted">Last updated ${formattedUpdated}</small>
  </div>
  <div class="mt-2">
   <button class="btn" id="btn-comments"><i class="fa-regular fa-comment"></i> ${commNum}</button>
   <button class="btn" id="btn-like"><i class="fa-solid fa-thumbs-up"></i>  ${reactNum}</button>
  </div>
</div>
  </div>
  <div id="comments-container-id-${id}">
  <div class="container-fluid d-flex flex-column gap-3 mb-2">
  <div class="container-fluid d-flex flex-column gap-3" id="addComments">
    <h4>Comments this post</h4>
    <form class="d-flex flex-column gap-1">
                <div class="mb-3">
              <textarea class="form-control" disabled></textarea>
            </div>
            <div class="mb-3">
            <button class="btn float-end" type="submit" disabled>Comment</button>
          </div>
    </form>
  </div>
  <div class="card mb-2 d-none">
    <div class="card-header">
      <h4 class="card-title">Comments</h4>
    </div>
    <div class="card-body">
    ${commentsHtml}
      <button class="btn" disabled>Comment</button>
    </div>
  </div>  
  </div>
</div>  
  <!-- end of card -->
</div>
`;

  return classTemplate;
}
