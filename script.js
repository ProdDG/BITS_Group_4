// const { keyword } = require("color-convert");

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
      modelviewer.src = "Models/1F.gltf"

      for (const hspot of F1) {
        hspot.style.visibility = 'visible';
      }

      for (const hspot of F2) {
        hspot.style.visibility = 'hidden';
      }

    } else if (num == 2){
      modelviewer.src = "Models/2F.gltf"

      for (const hspot of F1) {
        hspot.style.visibility = 'hidden';
      }

      for (const hspot of F2) {
        hspot.style.visibility = 'visible';
      }

    }
}

let keywords = [
  'Library',
  'Classroom',
  'Mac Lab',
  'Windows Lab',
  'Duo OS Lab',
  'Self Study Room',
  'Innovation Hub',
  'Gym',
  'Reception',
  'Security',
  'Design Studio',
  'Collaboration Study Space',
  'Teacher & Research',
  'T&H Management Classroom',
  'SAS',
  'Financial Trading Lab',
  'Canteen',
  'AV Theatre',
  'Student Connect',
  'Wellbeing',
  'Office',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
  let result = [];
  let input = inputBox.value;
  if(input.length){
    result = keywords.filter((keyword)=>{
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result)
  }
  display(result);

  if(!result.length){
    resultsBox.innerHTML = '';
  }
}

function display(result){
  const content = result.map((list)=>{
    return "<li>" + list + "</li>";
  });

  resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

//when user clicks on the ul, it will href to the corresponding page
// Create a mapping of list item text content to URLs
var urlMapping = {
  'Library': 'library.html',
  'Classroom': 'room_detail.html',
  'Mac Lab': 'mac-lab.html',
  'Windows Lab': 'windows-lab.html',
  'Duo OS Lab': 'duo-os-lab.html',
  'Self Study Room': 'self-study-room.html',
  'Innovation Hub': 'innovation-hub.html',
  'Gym': 'gym.html',
  'Reception': 'reception.html',
  'Security': 'security.html',
  'Design Studio': 'design-studio.html',
  'Collaboration Study Space': 'student_space_detail.html',
  'Teacher & Research': 'teacher-research.html',
  'T&H Management Classroom': 'th-management-classroom.html',
  'SAS': 'sas_detail.html',
  'Financial Trading Lab': 'financial_detail.html',
  'Canteen': 'canteen.html',
  'AV Theatre': 'av_theatre_detail.html',
  'Student Connect': 'student_connect.html',
  'Wellbeing': 'wellbeing_details.html',
  'Office': 'office_detail.html',
};

resultsBox.addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    // Use the text content of the clicked list item to get the corresponding URL from the mapping
    var url = urlMapping[e.target.textContent];
    if(url){
      window.location.href = url;
    }
    resultsBox.innerHTML = '';
  }
})




