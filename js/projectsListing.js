const projectList = document.getElementById('project-list');
const descriptionColumn = document.getElementById('description');

projectList.addEventListener('click', function (event) {
    event.preventDefault();
    const target = event.target;
    if (target.tagName === 'A') {

        const focusedAnchor = document.querySelector('a.focused');
        if (focusedAnchor) {
            focusedAnchor.classList.remove('focused');
        }

        const description = target.getAttribute('data-description');
        descriptionColumn.innerHTML = `<h3>Description:</h3><div id="paragraphWrapper"><p>${description}</p><div>`;

        target.classList.add('focused');
    }
});
