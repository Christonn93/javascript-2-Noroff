
export async function setCommentButtonListener() {
 const commentsBtn = document.querySelector("#btn-comments");

 if (!commentsBtn) {
  commentsBtn.addEventListener("click", openComments());
 }
}

function openComments() {
 const commentsContainer = document.querySelector("#comments");
 commentsContainer.style.display = "flex";
}
