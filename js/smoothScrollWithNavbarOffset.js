document.addEventListener('DOMContentLoaded', function () {

    // Known issue: This problem when change resolution from desktop to mobile need to refresh the page

    // Enable offset for smooth scrolling on mobile devices
    if (window.innerWidth < 767) {
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
                e.preventDefault();
                const target = this.getAttribute('href');
                const navbarHeight = document.querySelector('#headerDiv').offsetHeight; // Get the height of your navbar
                smoothScrollWithOffset(target, navbarHeight);
            });
        });
    }
});
