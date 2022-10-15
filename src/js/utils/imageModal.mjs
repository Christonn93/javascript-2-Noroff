// Creating a image modal for the images in the post
export function postFeedImageModal() {
  const images = document.querySelectorAll(".post-image");

  images.forEach((img) => {
    function onClick() {
      const image = document.getElementById("image");
      image.src = img.src;
      document.getElementById("image-modal").style.display = "block";
    }

    img.addEventListener("click", onClick);
  });
}
