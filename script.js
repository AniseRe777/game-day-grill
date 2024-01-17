// Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
        const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
        const navbarLinks = document.querySelector('.navbar-links');

        mobileMenuIcon.addEventListener('click', function () {
                navbarLinks.classList.toggle('active');
        });
});

// Nav bar logo link
	document.addEventListener("DOMContentLoaded", function() {
	    var logoImage = document.getElementById("logoImage");
	
	    if (logoImage) {
	        // Add event listeners for mouseover and mouseout
	        logoImage.addEventListener("mouseover", function() {
	            // On mouseover, add the 'hovered' class
	            logoImage.classList.add("hovered");
	        });
	
	        logoImage.addEventListener("mouseout", function() {
	            // On mouseout, remove the 'hovered' class
	            logoImage.classList.remove("hovered");
	        });
	
	        // Add a click event to navigate to the home page
	        logoImage.addEventListener("click", function() {
	            window.location.href = "index.html";
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
