// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond accordingly on click.

function activateGallery() {
  // let thumbnails = document.querySelector("#gallery_thumbs").
                            // querySelectorAll("img");
  // let mainImage = document.querySelector("#gallery_photo").querySelector("img");
  let thumbnails = document.querySelectorAll("#gallery_thumbs > div > img");
  let mainImage  = document.querySelector("#gallery_photo > img");                   // selects div with id

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {                              // go through all thumbnails, addEventListener
      // Set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);

      // Change which image is current.
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");

      // Update image info.
      let galleryInfo = document.querySelector("#gallery_info");
      let title       = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");

      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}
