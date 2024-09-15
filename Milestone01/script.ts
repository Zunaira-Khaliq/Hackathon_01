// Query all buttons with the class 'toggle'
const skillButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.toggle');

// Loop through each button and add event listeners
skillButtons.forEach(button => {
    // Add hover effect when the mouse enters
    button.addEventListener('mouseenter', () => {
        button.classList.add('toggle-hover');  // Apply the hover class
    });

    // Remove hover effect when the mouse leaves
    button.addEventListener('mouseleave', () => {
        button.classList.remove('toggle-hover');  // Remove the hover class
    });
});
