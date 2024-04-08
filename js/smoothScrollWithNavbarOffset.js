document.addEventListener('DOMContentLoaded', function () {

    // Function to scroll smoothly to the target element with offset
    function smoothScrollWithOffset(target, offset) {
        const element = document.querySelector(target);
        const elementPosition = element.offsetTop - offset;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
    console.log('Viewport width is below 768px');
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (window.innerWidth >= 767) return
            e.preventDefault();
            const target = this.getAttribute('href');
            const navbarHeight = document.querySelector('#headerDiv').offsetHeight; // Get the height of navbar
            smoothScrollWithOffset(target, navbarHeight);
        });
    });
});
