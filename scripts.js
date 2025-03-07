document.getElementById("feedButton").addEventListener("click", function () {
  const catImageContainer = document.getElementById("catEat-container");
  const crunchSound = new Audio("img/crunchy.mp3");

  catImageContainer.classList.remove("hidden");
  crunchSound.play();

  setTimeout(function () {
    catImageContainer.classList.add("hidden");
  }, 7000);
});
