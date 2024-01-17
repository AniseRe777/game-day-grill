// Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
        const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
        const navbarLinks = document.querySelector('.navbar-links');

        mobileMenuIcon.addEventListener('click', function () {
                navbarLinks.classList.toggle('active');
        });
});

// Nav bar logo link
	document.addEventListener("DOMContentLoaded", function () {
	    // Add an event listener to the logo image
	    var logoImage = document.getElementById("logoImage");
	
	    if (logoImage) {
	        logoImage.addEventListener("mouseover", function () {
	            logoImage.classList.add("hovered");
	        });
	
	        logoImage.addEventListener("mouseout", function () {
	            logoImage.classList.remove("hovered");
	        });
	
	        logoImage.addEventListener("click", function (event) {
	            event.preventDefault();
	
	            // Determine the target section based on the current page
	            var targetSectionId = "home";  // Default to home page
	
	            // Check if the current page is not the home page
	            if (window.location.pathname !== "/game-day-grill/index.html") {
	                // Update the target section for non-home pages
	                targetSectionId = "home";
	            }
	
	            var targetSection = document.getElementById(targetSectionId);
	            if (targetSection) {
	                var offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;
	
	                // Use smooth scroll
	                window.scrollTo({
	                    top: offsetTop,
	                    behavior: 'smooth'
	                });
	            }
	        });
	    }
	});

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
