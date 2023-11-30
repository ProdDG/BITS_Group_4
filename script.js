document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded before adding the event listener

    var button = document.querySelector('.btn-primary'); // Change this selector based on your actual button class

    if (button) {
        button.addEventListener('click', function () {
            scrollToSection();
        });
    }
});

function scrollToSection() {
    // You can replace 'targetSection' with the ID of the element you want to scroll to
    var targetSection = document.getElementById("model");

    if (targetSection) {
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}