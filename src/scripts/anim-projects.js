let cmpt = 0;

window.onload = function () {
  const htmlelement = document.getElementsByTagName("h1")[0];
  const prompt = "Mes projets";
  anim(htmlelement, prompt);
};

function anim(htmlelement, prompt) {
  setInterval(function () {
    if (cmpt < prompt.length) {
      htmlelement.innerHTML += prompt.charAt(cmpt);
      cmpt++;
    } else {
    }
  }, 100);
}

const btnInformatique = document.getElementById("btnInfo");
const informatique = document.getElementById("informatique");
const btnProduction = document.getElementById("btnProd");
const production = document.getElementById("production");

btnInformatique.addEventListener("click", function () {
  console.log("clickinfo");
});

btnProduction.addEventListener("click", function () {
  console.log("clickprod");
});
