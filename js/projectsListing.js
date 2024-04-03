// Get reference to the project list
const projectList = document.getElementById('project-list');
// Get reference to the description column
const descriptionColumn = document.getElementById('description');

// Add click event listener to project list
projectList.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    const target = event.target;
    if (target.tagName === 'A') {

        const focusedAnchor = document.querySelector('a.focused');
        if (focusedAnchor) {
            focusedAnchor.classList.remove('focused');
        }

        // Get description from data attribute
        const description = target.getAttribute('data-description');
        // Update description column content
        descriptionColumn.innerHTML = `<h3>Description:</h3><div id="paragraphWrapper"><p>${description}</p><div>`;

        target.classList.add('focused');
    }
});
