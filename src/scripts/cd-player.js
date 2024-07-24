document.addEventListener("DOMContentLoaded", function () {
  let cdPlayer = document.getElementsByClassName("cd-player")[0];
  let cd = document.getElementsByClassName("cd")[0];
  let audio = document.querySelector("audio");

  cdPlayer.addEventListener("click", function () {
    if (cd.classList.contains("play")) {
      cd.classList.remove("play");
      cd.classList.add("pause");
      cdPlayer.classList.remove("play");
      cdPlayer.classList.add("pause");
      cdPlayer.style.transform = "rotate(180deg)";
      audio.pause();
    } else {
      cd.classList.remove("pause");
      cd.classList.add("play");
      cdPlayer.classList.remove("pause");
      cdPlayer.classList.add("play");
      cdPlayer.style.transform = "rotate(140deg)";
      audio.play();
      audio.loop = true;
      audio.volume = 0.5;
    }
  });
});
