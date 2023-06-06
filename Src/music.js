const button = document.getElementById("play");
const music = new Audio("music.3gp");

button.addEventListener("click", function () {
  //Toggles music and button
  switch (button.value) {
    case "Play":
      music.play();
      music.loop = true;
      music.volume = 0.5;
      button.value = "Stop";
      button.alt = "Stop";
      button.src = "../Images/play.png";
      break;
    case "Stop":
      music.pause();
      button.value = "Play";
      button.alt = "Play";
      button.src = "../Images/pause.png";
      break;
  }
});
