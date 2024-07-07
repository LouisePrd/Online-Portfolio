document.addEventListener("DOMContentLoaded", function () {
  cdPlayer = document.getElementsByClassName("cd-player")[0];
  cd = document.getElementsByClassName("cd")[0];

  cdPlayer.addEventListener("click", function () {
    if (cd.classList.contains("play")) {
      cd.classList.remove("play");
      cd.classList.add("pause");
      cdPlayer.classList.remove("play");
      cdPlayer.classList.add("pause");
      cdPlayer.style.transform = "rotate(180deg)";
    } else {
      cd.classList.remove("pause");
      cd.classList.add("play");
      cdPlayer.classList.remove("pause");
        cdPlayer.classList.add("play");
      cdPlayer.style.transform = "rotate(140deg)";
    }
  });
});
