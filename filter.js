var currentfloor = 1

var recreational = document.getElementsByClassName("recreational");
var services = document.getElementsByClassName("services");
var academics = document.getElementsByClassName("academics");
var tech = document.getElementsByClassName("tech");

var modelviewer = document.getElementById("modeldisplay");
var F1 = document.getElementsByClassName("F1");
var F2 = document.getElementsByClassName("F2");
var F3 = document.getElementsByClassName("F3");
var F4 = document.getElementsByClassName("F4");
var F5 = document.getElementsByClassName("F5");
var F6 = document.getElementsByClassName("F6");
var F7 = document.getElementsByClassName("F7");
var F8 = document.getElementsByClassName("F8");
var F9 = document.getElementsByClassName("F9");
var F10 = document.getElementsByClassName("F10");
var F14 = document.getElementsByClassName("F14");

function hideallmarkers(){
      for (const hspot of recreational) {
            hspot.style.visibility = 'hidden';
      }
      for (const hspot of services) {
            hspot.style.visibility = 'hidden';
      }
      for (const hspot of academics) {
            hspot.style.visibility = 'hidden';
      }
      for (const hspot of tech) {
            hspot.style.visibility = 'hidden';
      }
}

function hideallfloors(){
      if (currentfloor != 1) {
          for (const hspot of F1) {
            hspot.style.visibility = 'hidden';
          }
      }
      if (currentfloor != 2) {
          for (const hspot of F2) {
            hspot.style.visibility = 'hidden';
          }
      }
      if (currentfloor != 3) {
          for (const hspot of F3) {
            hspot.style.visibility = 'hidden';
          }
      }
      if (currentfloor != 4) {
          for (const hspot of F4) {
            hspot.style.visibility = 'hidden';
          }
      }
      if (currentfloor != 5) {
          for (const hspot of F5) {
            hspot.style.visibility = 'hidden';
          }
      }
      if (currentfloor != 6) {
          for (const hspot of F6) {
            hspot.style.visibility = 'hidden';
          }
      }
      if (currentfloor != 7) {
          for (const hspot of F7) {
            hspot.style.visibility = 'hidden';
          }
      }
      if (currentfloor != 8) {
          for (const hspot of F8) {
            hspot.style.visibility = 'hidden';
          }
      }
      if (currentfloor != 9) {
          for (const hspot of F9) {
            hspot.style.visibility = 'hidden';
          }
      }
      if (currentfloor != 10) {
          for (const hspot of F10) {
            hspot.style.visibility = 'hidden';
          }
      }
      if (currentfloor != 14) {
          for (const hspot of F14) {
            hspot.style.visibility = 'hidden';
          }
      }
}

function filterSelection(filter){
      hideallmarkers()

  if (filter == "recreational") {
      for (const hspot of recreational) {
        hspot.style.visibility = 'visible';
      }
  } else if (filter == "services") {
      for (const hspot of services) {
        hspot.style.visibility = 'visible';
      }
  } else if (filter == "academics") {
      for (const hspot of academics) {
            hspot.style.visibility = 'visible';
      }  
      
  } else if (filter == "tech") {
      for (const hspot of tech) {
            hspot.style.visibility = 'visible';
      }  
  } else if (filter == "all") {
      for (const hspot of recreational) {
            hspot.style.visibility = 'visible';
          }
      for (const hspot of services) {
            hspot.style.visibility = 'visible';
          }
      for (const hspot of academics) {
            hspot.style.visibility = 'visible';
      }
      for (const hspot of tech) {
            hspot.style.visibility = 'visible';
      }   
  }

      hideallfloors()
}

function changeModel(num){
      currentfloor = num

      hideallfloors()

      if (num == 1) {
        modelviewer.src = "Models/1F-colored.gltf"

        for (const hspot of F1) {
          hspot.style.visibility = 'visible';
          hspot.style.pointerEvents = 'auto';
        }
  
      } else if (num == 2) {
        modelviewer.src = "Models/2F-coloredNhan.gltf"
  
        for (const hspot of F2) {
          hspot.style.visibility = 'visible';
        }
  
      } else if (num == 3) {
        modelviewer.src = "Models/3F-coloredNhan.gltf"
  
        for (const hspot of F3) {
          hspot.style.visibility = 'visible';
        }
        
      } else if (num == 4) {
        modelviewer.src= "Models/4F-coloredNhan.gltf"
  
        for (const hspot of F4) {
          hspot.style.visibility = 'visible';
        }
  
      } else if (num == 5) {
        modelviewer.src= "Models/5F-coloredNhan.gltf"
  
        for (const hspot of F5) {
          hspot.style.visibility = 'visible';
        }
  
      } else if (num == 6) {
        modelviewer.src= "Models/6F-coloredNhan.gltf"
  
        for (const hspot of F6) {
          hspot.style.visibility = 'visible';
        }
        
      } else if (num == 7) {
        modelviewer.src= "Models/7F-coloredNhan.gltf"
  
        for (const hspot of F7) {
          hspot.style.visibility = 'visible';
        }
  
      } else if (num == 8) {
        modelviewer.src= "Models/8F-coloredNhan.gltf"
  
        for (const hspot of F8) {
          hspot.style.visibility = 'visible';
        }
  
      } else if (num == 9) {
        modelviewer.src= "Models/9F-coloredNhan.gltf"
  
        for (const hspot of F9) {
          hspot.style.visibility = 'visible';
        }
  
      } else if (num == 10) {
        modelviewer.src= "Models/10F-coloredNhan.gltf"
  
        for (const hspot of F10) {
          hspot.style.visibility = 'visible';
        }
      } 
  
      else if (num == 14) {
        modelviewer.src= "Models/14F-coloredNhan.gltf"
  
        for (const hspot of F14) {
          hspot.style.visibility = 'visible';
        }
      }
  }