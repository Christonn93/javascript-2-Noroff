/**
 *
 * @param {*} elementName Input the HTML element you want to create
 * @param {*} className Input the classname you want the element to have
 * @param {*} elementId Input the element id
 * @returns The element you created. You can use this function to create any type of HTML element you want to
 */

// Creating elements in a neat small reusable function
export function createElement(
  elementName = "",
  className = "",
  elementId = ""
) {
  const element = document.createElement(elementName);
  element.classList.add(className);
  element.id = elementId;
  return element;
}

/**
 *
 * @param {*} elementName Input the HTML element you want to create
 * @param {*} className Input the classname you want the element to have
 * @param {*} elementId Input the element id
 * @param {*} children Here you will use the createChildren function
 * @returns The element you created, and by using createChildren function will you be able to populate elements inside this element. You can use this function to create any type of HTML element you want to
 */
export function createParentElement(
  elementName = "",
  className = "",
  elementId = "",
  children = []
) {
  const element = document.createElement(elementName);
  element.classList.add(className);
  element.id = elementId;
  element.append(children);
  return element;
}

/**
 *
 * @param {*} elementName Input the HTML element you want to create
 * @param {*} className Input the classname you want the element to have
 * @param {*} elementId Input the element id
 * @returns This will return the children that will be placed inside the parent element.
 */
export function createChildren(
  elementName = "",
  className = "",
  elementId = "",
  inner
) {
  const element = document.createElement(elementName);
  element.classList.add(className);
  element.id = elementId;
  element.innerHTML = `${inner}`;
  return element;
}

/**
 *
 * This function is used to populate cards with information from the API call you are making. You can change the innerHTML property of the function to adjust it to what your heart desire
 *
 * @param {*} elementName Input the HTML element you want to create
 * @param {*} className Input the classname you want the element to have
 * @param {*} elementId Input the element id
 * @param {*} image This one is adding profile image for the author of the post
 * @param {*} title Adds the title to the post
 * @param {*} author Adds the author of the post
 * @param {*} created Adds the time the post was created
 * @param {*} body Adds the body content for the card
 * @param {*} media Adds post media if it is any
 * @param {*} updated Adds date when the post was last updated
 * @returns the card with the information you want
 */

export function createCards(
  elementName = "",
  className = "",
  elementId = "",
  image,
  title,
  author,
  created,
  body,
  media,
  tags,
  updated
) {
  const element = document.createElement(elementName);
  element.classList.add(className);
  element.id = elementId;
  element.innerHTML = `
       <div class="card">
       <div class="card-header">
        <div class="container-fluid">
         <div class="row">
          <div class="col-2 m-0 p-0">
           <img src="${image}" class="img-fluid post-image" alt="user profile image" />
          </div>
          <div class="col-9 m-0 p-0">
           <div class="row">
            <h5 class="card-title">${title}</h5>
           </div>
           <div class="row">
            <div class="col">
             <small class="text-muted"> - ${author}</small>
             <cite><small class="text-muted text-small">${created}</small></cite>
            </div>
           </div>
          </div>
          <div class="col-1">
           <div class="dropdown">
            <a class="btn" href="#" role="button" id="settings" data-bs-toggle="dropdown" aria-expanded="false"> <i class="fa-solid fa-gear"></i></a>
            <ul class="dropdown-menu" aria-labelledby="settings">
             <li>
              <button type="submit" class="dropdown-item"><i class="fa-solid fa-pencil"></i> Update</button>
             </li>
             <li>
              <button type="submit" class="dropdown-item"><i class="fa-solid fa-trash-can"></i> Delete</button>
             </li>
            </ul>
           </div>
          </div>
         </div>
        </div>
       </div>
       <div class="card-body">
        <p class="card-text">${body}</p>
        <div id="postImage">
        <a href="#">
         <img src="${media}" class="img-fluid" alt="user uploaded image" id="post_image" />
        </a>
         </div>
       </div>
       <div class="card-footer container">
       <div class="row" id="tags">${tags}</div>
       <div class="row">
        <small class="text-muted">Last updated ${updated}</small>
       </div>
      </div>
      
      </div>
       `;
  return element;
}
