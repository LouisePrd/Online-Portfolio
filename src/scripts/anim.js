window.onload = function () {
  show();
};

function show() {
  let i = 0;
  const images = document.getElementsByTagName("img");
  const interval = setInterval(function () {
    if (i < images.length) {
      images[i].style.visibility = "visible";
      const randomAngle = Math.random() * 30 - 15; 
      images[i].style.transform = `rotate(${randomAngle}deg)`;
      i++;
    } else {
      clearInterval(interval);
      resetImages();
    }
  }, 400);
}

function resetImages() {
  const images = document.getElementsByTagName("img");
  setTimeout(function () {
    for (let img of images) {
      img.style.transform = 'rotate(0deg)';
    }
  }, 800);
}