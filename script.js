document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded before adding the event listener

  var button = document.querySelector(".btn-primary"); // Change this selector based on your actual button class

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

var scrollButton = document.getElementById("scrollButton");
var modelElement = document.getElementById("model");

function toggleScrollButton() {
var modelRect = modelElement.getBoundingClientRect();

// Check if the model element is NOT fully in the viewport
if (
    modelRect.top < 0 ||
    modelRect.bottom > (window.innerHeight || document.documentElement.clientHeight)
) {
    scrollButton.style.display = "none"; // Hide the button
} else {
    scrollButton.style.display = "block"; // Show the button
}
}

function handleScroll() {
    toggleScrollButton();
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", toggleScrollButton);

// Initial check in case the element is already in the viewport on page load
toggleScrollButton();

// window.addEventListener('scroll', followScroll);

// function followScroll() {
//     var button = document.getElementById("scrollButton");
//     var scrollY = window.scrollY || document.documentElement.scrollTop;

//     // Adjust the top position based on your preference
//     button.style.top = (scrollY + window.innerHeight - button.offsetHeight - 20) + "px";
// }

function changeModel(num){
    var modelviewer = document.getElementById("modeldisplay");
    var F1 = document.getElementsByClassName("F1");
    var F2 = document.getElementsByClassName("F2");

    if (num == 1) {
      modelviewer.src = "1F.gltf"

      for (const hspot of F1) {
        hspot.style.visibility = 'visible';
      }

      for (const hspot of F2) {
        hspot.style.visibility = 'hidden';
      }

    } else if (num == 2){
      modelviewer.src = "2F.gltf"

      for (const hspot of F1) {
        hspot.style.visibility = 'hidden';
      }

      for (const hspot of F2) {
        hspot.style.visibility = 'visible';
      }

    }
}