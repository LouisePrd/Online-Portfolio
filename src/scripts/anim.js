window.onload = function () {
  const htmlelement = document.getElementsByTagName("h1")[0];
  const prompt = "Mes inspirations";
  anim(htmlelement, prompt);
};

function show() {
  let i = 0;
  const images = document.getElementsByTagName("img");
  const interval = setInterval(function () {
    if (i < images.length) {
      images[i].style.visibility = "visible";
      const randomAngle = Math.random() * 30 - 15; 
      images[i].style.transform = `rotate(${randomAngle}deg)`;
      images[i].addEventListener('mouseover', function() {
        images[i].classList.add('hover-scale');
      });
      images[i].addEventListener('mouseout', function() {
        images[i].classList.remove('hover-scale');
      });
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
  }, 2000);
}

function anim(htmlelement, prompt) {
  let cmpt = 0;

  const interval = setInterval(function () {
    if (cmpt < prompt.length) {
      htmlelement.innerHTML += prompt.charAt(cmpt);
      cmpt++;
    } else {
      clearInterval(interval);
      show();
    }
  }, 100);
}
