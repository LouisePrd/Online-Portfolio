window.onload = function () {
    const htmlelement = document.getElementsByTagName("h1")[0];
    const prompt = "Mes projets";
    anim(htmlelement, prompt);
  };

function anim(htmlelement, prompt) {
  let cmpt = 0;

  setInterval(function () {
    if (cmpt < prompt.length) {
      htmlelement.innerHTML += prompt.charAt(cmpt);
      cmpt++;
    } else {
    }
  }, 100);
}
