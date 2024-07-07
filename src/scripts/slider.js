document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.getElementById("slides-container");
  const slide = document.querySelector(".slide");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");

  nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });

  prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });

  window.addEventListener("resize", () => {
    slideWidth = slide.clientWidth;
  });

  window.addEventListener("load", () => {
    slideWidth = slide.clientWidth;
  });

  // slide on hover
  let isHovering = false;
  slidesContainer.addEventListener("mouseover", () => {
    isHovering = true;
    console.log("hovering");
  });
});
