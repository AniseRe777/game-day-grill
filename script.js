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

// Event overlay size
document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded

    // Get all elements with the class 'event-overlay'
    var overlays = document.querySelectorAll('.event-overlay');

    // Initialize max height
    var maxHeight = 0;

    // Loop through each overlay to find the max height
    overlays.forEach(function (overlay) {
        var overlayHeight = overlay.offsetHeight;
        if (overlayHeight > maxHeight) {
            maxHeight = overlayHeight;
        }
    });

    // Set the same height for all overlays
    overlays.forEach(function (overlay) {
        overlay.style.height = maxHeight + 'px';
    });
});


// For switching between sections
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
      section.classList.remove('active');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
  }
