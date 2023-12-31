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

// var scrollButton = document.getElementById("scrollButton");
// var modelElement = document.getElementById("model");

// function toggleScrollButton() {
// var modelRect = modelElement.getBoundingClientRect();

// // Check if the model element is NOT fully in the viewport
// if (
//     modelRect.top < 0 ||
//     modelRect.bottom > (window.innerHeight || document.documentElement.clientHeight)
// ) {
//     scrollButton.style.display = "none"; // Hide the button
// } else {
//     scrollButton.style.display = "block"; // Show the button
// }
// }

// function handleScroll() {
//     toggleScrollButton();
// }

// window.addEventListener("scroll", handleScroll);
// window.addEventListener("resize", toggleScrollButton);

// Initial check in case the element is already in the viewport on page load
// toggleScrollButton();

// window.addEventListener('scroll', followScroll);

// function followScroll() {
//     var button = document.getElementById("scrollButton");
//     var scrollY = window.scrollY || document.documentElement.scrollTop;

//     // Adjust the top position based on your preference
//     button.style.top = (scrollY + window.innerHeight - button.offsetHeight - 20) + "px";
// }

// function changeModel(num){
//     var modelviewer = document.getElementById("modeldisplay");
//     var F1 = document.getElementsByClassName("F1");
//     var F2 = document.getElementsByClassName("F2");
//     var F3 = document.getElementsByClassName("F3");
//     var F4 = document.getElementsByClassName("F4");
//     var F5 = document.getElementsByClassName("F5");
//     var F6 = document.getElementsByClassName("F6");
//     var F7 = document.getElementsByClassName("F7");
//     var F8 = document.getElementsByClassName("F8");
//     var F9 = document.getElementsByClassName("F9");
//     var F10 = document.getElementsByClassName("F10");
//     var F14 = document.getElementsByClassName("F14");

//     for (const hspot of F1) {
//       hspot.style.visibility = 'hidden';
//       hspot.style.pointerEvents = 'none';
//     }
//     for (const hspot of F2) {
//       hspot.style.visibility = 'hidden';
//     }
//     for (const hspot of F3) {
//       hspot.style.visibility = 'hidden';
//     }
//     for (const hspot of F4) {
//       hspot.style.visibility = 'hidden';
//     }
//     for (const hspot of F5) {
//       hspot.style.visibility = 'hidden';
//     }
//     for (const hspot of F6) {
//       hspot.style.visibility = 'hidden';
//     }
//     for (const hspot of F7) {
//       hspot.style.visibility = 'hidden';
//     }
//     for (const hspot of F8) {
//       hspot.style.visibility = 'hidden';
//     }
//     for (const hspot of F9) {
//       hspot.style.visibility = 'hidden';
//     }
//     for (const hspot of F10) {
//       hspot.style.visibility = 'hidden';
//     }
//     for (const hspot of F14) {
//       hspot.style.visibility = 'hidden';
//     }


//     if (num == 1) {
//       modelviewer.src = "Models/1F-colored.gltf"

//       for (const hspot of F1) {
//         hspot.style.visibility = 'visible';
//         hspot.style.pointerEvents = 'auto';
//       }

//     } else if (num == 2) {
//       modelviewer.src = "Models/2F-coloredNhan.gltf"

//       for (const hspot of F2) {
//         hspot.style.visibility = 'visible';
//       }

//     } else if (num == 3) {
//       modelviewer.src = "Models/3F-coloredNhan.gltf"

//       for (const hspot of F3) {
//         hspot.style.visibility = 'visible';
//       }
      
//     } else if (num == 4) {
//       modelviewer.src= "Models/4F-coloredNhan.gltf"

//       for (const hspot of F4) {
//         hspot.style.visibility = 'visible';
//       }

//     } else if (num == 5) {
//       modelviewer.src= "Models/5F-coloredNhan.gltf"

//       for (const hspot of F5) {
//         hspot.style.visibility = 'visible';
//       }

//     } else if (num == 6) {
//       modelviewer.src= "Models/6F-coloredNhan.gltf"

//       for (const hspot of F6) {
//         hspot.style.visibility = 'visible';
//       }
      
//     } else if (num == 7) {
//       modelviewer.src= "Models/7F-coloredNhan.gltf"

//       for (const hspot of F7) {
//         hspot.style.visibility = 'visible';
//       }

//     } else if (num == 8) {
//       modelviewer.src= "Models/8F-coloredNhan.gltf"

//       for (const hspot of F8) {
//         hspot.style.visibility = 'visible';
//       }

//     } else if (num == 9) {
//       modelviewer.src= "Models/9F-coloredNhan.gltf"

//       for (const hspot of F9) {
//         hspot.style.visibility = 'visible';
//       }

//     } else if (num == 10) {
//       modelviewer.src= "Models/10F-coloredNhan.gltf"

//       for (const hspot of F10) {
//         hspot.style.visibility = 'visible';
//       }
//     } 

//     else if (num == 14) {
//       modelviewer.src= "Models/14F-coloredNhan.gltf"

//       for (const hspot of F14) {
//         hspot.style.visibility = 'visible';
//       }
//     }
// }


