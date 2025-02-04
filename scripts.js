document.getElementById("feedButton").addEventListener("click", function () {
  const catImageContainer = document.getElementById("catEat-container");

  catImageContainer.classList.remove("hidden");

  setTimeout(function () {
    catImageContainer.classList.add("hidden");
  }, 5000);
});
