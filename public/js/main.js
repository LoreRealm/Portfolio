document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".project-content img");

  images.forEach((img) => {
    img.addEventListener("click", function (e) {
      e.stopPropagation();
      this.classList.toggle("zoomed");
    });
  });

  document.addEventListener("click", () => {
    images.forEach((img) => {
      img.classList.remove("zoomed");
    });
  });
});
