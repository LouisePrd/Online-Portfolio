let cmpt = 0;

function anim(htmlelement, prompt) {
  setInterval(function () {
    if (cmpt < prompt.length) {
      htmlelement.innerHTML += prompt.charAt(cmpt);
      cmpt++;
    } else {
      setTimeout(function () {
        document.getElementsByClassName("star")[0].style.display = "flex";
        clearInterval();
      }, 300);
    }
  }, 120);
}

window.onload = function () {
  document.getElementsByClassName("star")[0].style.display = "none";
  const htmlelement = document.getElementsByTagName("h1")[0];
  const prompt = "Creative portfolio";
  anim(htmlelement, prompt);
};

const btnStart = document.getElementById("btnStart");

btnStart.addEventListener("click", function () {
  circle.classList.add("active");
  setTimeout(function () {
    window.location.href = "/pages/inspirations.html";
  }, 800);
});
