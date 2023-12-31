// const { keyword } = require("color-convert");

document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded before adding the event listener

  var button = document.getElementById("discover"); // Change this selector based on your actual button class

  if (button) {
    button.addEventListener("click", function () {
      scrollToSection();
    });
  }
});

function scrollToSection() {
  var targetSection = document.getElementById("model");

  if (targetSection) {
    var targetPosition = targetSection.offsetTop;
    console.log("targetPosition:", targetPosition);

    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  }
}


