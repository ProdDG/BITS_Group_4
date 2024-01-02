var modelViewer = document.querySelector('model-viewer');

function zoomIn() {
  // Get the current fieldOfView value
  var fieldOfView = parseFloat(modelViewer.getAttribute('field-of-view'));

  // Decrease the fieldOfView to zoom in
  var newFieldOfView = Math.max(fieldOfView - 6, 12);  // Prevent the fieldOfView from going below 0

  // Set the new fieldOfView value
  modelViewer.setAttribute('field-of-view', `${newFieldOfView}deg`);
}

document.getElementById("zoom-in").addEventListener("click", zoomIn);

function zoomOut() {
    // Get the current fieldOfView value
    var fieldOfView = parseFloat(modelViewer.getAttribute('field-of-view'));
  
    // Increase the fieldOfView to zoom out
    var newFieldOfView = Math.min(fieldOfView + 6, 30);  // Prevent the fieldOfView from going above 180
  
    // Set the new fieldOfView value
    modelViewer.setAttribute('field-of-view', `${newFieldOfView}deg`);
  }
  
  document.getElementById("zoom-out").addEventListener("click", zoomOut);
