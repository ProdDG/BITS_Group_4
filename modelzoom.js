// Model zoom function

document.getElementById("zoom-in").addEventListener("click", function(){
    document.getElementById("modeldisplay").removeAttribute("disable-zoom")
});

document.getElementById("zoom-out").addEventListener("click", function(){
    document.getElementById("modeldisplay").setAttribute("disable-zoom","");
});