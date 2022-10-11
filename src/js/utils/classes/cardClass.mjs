export class Card {
   constructor(elementName = "", className = "", elementId = "", title, created, body, post_image, author, updated) {
      this.element = document.createElement(elementName);
      element.classList.add(className);
      element.id = elementId;
      element.innerHTML = ``;
   }
}


export class LoopingCard {
   /**
    * 
    * @param {*} elementName The name on the element, it can be f.eks "div"
    * @param {*} attributes Add class, id, attributes etc
    * @param {*} template  This is what will render in the html
    * @example
    * ``` 
    * "div",
    * {
       id: `post-id-${id}`,
       class: "card container-fluid d-flex justify-content-center p-0 m-0",
       "data-id": "postItem",
      },
      `<div class="card-header">
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
        </div>
        ```
    * 
    * @returns Elements 
    */
   constructor(elementName, attributes = {}, template = "") {
      this.element = document.createElement(elementName);
      this.addAttributes(attributes);
      this.addTemplate(template);
      return this.element;
   }

   addAttributes(attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
         this.element.setAttribute(key, value);
      });
   }

   addTemplate(template) {
      this.element.innerHTML = `${template}`;
   }
}
