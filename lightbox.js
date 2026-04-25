function openLightbox(element) {
  const img = element.querySelector("img");  // get clicked image
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (img) {
    lightboxImg.src = img.src;   // 🔥 set image source
    lightbox.style.display = "flex";
  }
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}