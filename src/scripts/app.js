function anim(htmlelement, prompt) {
  let cmpt = 0;

  setInterval(function () {
    if (cmpt < prompt.length) {
      htmlelement.innerHTML += prompt.charAt(cmpt);
      cmpt++;
    }
  }, 120);
}

window.onload = function () {
  const htmlelement = document.getElementsByTagName("h1")[0];
  const prompt = "Portfolio creatif";
  anim(htmlelement, prompt);
};
