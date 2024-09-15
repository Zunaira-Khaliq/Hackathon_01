// Query all buttons with the class 'toggle'
var skillButtons = document.querySelectorAll('.toggle');
// Loop through each button and add event listeners
skillButtons.forEach(function (button) {
    // Add hover effect when the mouse enters
    button.addEventListener('mouseenter', function () {
        button.classList.add('toggle-hover'); // Apply the hover class
    });
    // Remove hover effect when the mouse leaves
    button.addEventListener('mouseleave', function () {
        button.classList.remove('toggle-hover'); // Remove the hover class
    });
});
