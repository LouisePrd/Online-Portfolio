window.onload = function () {
  const htmlelement = document.getElementsByTagName("h1")[0];
  const prompt = "Mes inspirations";
  anim(htmlelement, prompt);
};

function show() {
  i = 0;
  setInterval(function () {
    const images = document.getElementsByTagName("img");
    images[i].style.visibility = "visible";
    i++;
  }, 500);
}

function anim(htmlelement, prompt) {
  let cmpt = 0;

  setInterval(function () {
    if (cmpt < prompt.length) {
      htmlelement.innerHTML += prompt.charAt(cmpt);
      cmpt++;
    } else {
      show();
    }
  }, 100);
}
