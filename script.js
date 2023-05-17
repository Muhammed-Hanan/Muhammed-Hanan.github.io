// Get all the expand buttons
const expandButtons = document.querySelectorAll('.expand-btn');

// Add click event listener to each button
expandButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the corresponding project information row
    const projectInfoRow = button.parentElement.parentElement.nextElementSibling;
    
    // Toggle the visibility of the project information
    projectInfoRow.classList.toggle('show');
  });
});
