// Model zoom function

// document.getElementById("zoom-in").addEventListener("click", function(){
//     document.getElementById("modeldisplay").removeAttribute("disable-zoom")
// });

// document.getElementById("zoom-out").addEventListener("click", function(){
//     document.getElementById("modeldisplay").setAttribute("disable-zoom","");
// });

var modelViewer = document.querySelector('model-viewer');

function zoomIn() {
  // Get the current fieldOfView value
  var fieldOfView = parseFloat(modelViewer.getAttribute('field-of-view'));

  // Decrease the fieldOfView to zoom in
  var newFieldOfView = Math.max(fieldOfView - 1, 0);  // Prevent the fieldOfView from going below 0

  // Set the new fieldOfView value
  modelViewer.setAttribute('field-of-view', `${newFieldOfView}deg`);
}

document.getElementById("zoom-in").addEventListener("click", zoomIn);

function zoomOut() {
    // Get the current fieldOfView value
    var fieldOfView = parseFloat(modelViewer.getAttribute('field-of-view'));
  
    // Increase the fieldOfView to zoom out
    var newFieldOfView = Math.min(fieldOfView + 1, 180);  // Prevent the fieldOfView from going above 180
  
    // Set the new fieldOfView value
    modelViewer.setAttribute('field-of-view', `${newFieldOfView}deg`);
  }
  
  document.getElementById("zoom-out").addEventListener("click", zoomOut);
