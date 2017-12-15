window.addEventListener("keydown", function(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();

  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");

keys.forEach(key => {
  key.addEventListener("transitionend", function(event) {
    if (event.propertyName !== "transform") return;
    event.target.classList.remove("playing");
  })
});

