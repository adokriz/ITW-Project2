document.addEventListener('DOMContentLoaded', function () {
    // Function to handle smooth scrolling with offset
    function smoothScrollWithOffset(target, offset) {
        const element = document.querySelector(target);
        const elementPosition = element.offsetTop - offset;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }

    // Add event listeners to the navigation links
    if (window.innerWidth < 767) {
        console.log('Viewport width is below 768px');
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = this.getAttribute('href');
                const navbarHeight = document.querySelector('#headerDiv').offsetHeight; // Get the height of your navbar
                smoothScrollWithOffset(target, navbarHeight);
            });
        });
    }
});
