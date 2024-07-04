let cmpt = 0;

function anim(htmlelement, prompt) {
  setInterval(function () {
    if (cmpt < prompt.length) {
      htmlelement.innerHTML += prompt.charAt(cmpt);
      cmpt++;
    }
  }, 120);
}

const btnStart = document.getElementById("btnStart");

btnStart.addEventListener("click", function () {
  circle.classList.add("active");
  setTimeout(function () {
    window.location.href = "/pages/inspirations.html";
  }, 800);
});
