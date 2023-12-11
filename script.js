// Scroll to top button
        const scrollToTopButton = document.getElementById('scrollToTopBtn');
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        scrollToTopButton.addEventListener('click', scrollToTop);
        window.addEventListener('scroll', function () {
            if (document.documentElement.scrollTop > 100) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });
