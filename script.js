// =======================================================
// ==== "BACKEND" TOGGLE: SET TO 'true' FOR CAROUSEL, 'false' FOR STATIC IMAGE ====
const useCarousel = true; 

// --- SECTION VISIBILITY TOGGLE ---
// Set any section to 'false' to hide it from the website.
const sectionVisibility = {
    skills: true,
    experience: true,
    about: true,
    contact: true
};
// =======================================================


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle menu on hamburger click
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Close menu when a link is clicked
navLinks.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// Typing Animation
document.addEventListener('DOMContentLoaded', function() {
    // --- Typing Animation Logic (existing) ---
    const typingText = document.querySelector('.typing-text');
    const words = ["Programmer","Software Engineer","Application Developer","Web Developer","Full-Stack Developer","Problem Solver"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        
        typingText.textContent = currentChar;

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(type, 1200);
        }
    }
    if (typingText) {
        type();
    }


// --- START: Conditional Carousel Logic ---
    const heroSection = document.querySelector('.hero');
    const toggleButton = document.getElementById('carousel-toggle');

    if (useCarousel) {
        // If carousel is ON, run the carousel logic
        heroSection.classList.add('hero-carousel');
        
        const carouselContainer = document.querySelector('.carousel-container');
        const slides = document.querySelectorAll('.carousel-slide');

        if (carouselContainer && slides.length > 0 && toggleButton) {
            const toggleIcon = toggleButton.querySelector('i');
            let slideIndex = 0;
            let isPaused = false;
            let carouselInterval;
            const totalSlides = slides.length;

            function nextSlide() {
                slideIndex = (slideIndex + 1) % totalSlides;
                carouselContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
            }

            function playCarousel() {
                isPaused = false;
                if(toggleIcon) {
                    toggleIcon.classList.remove('fa-play');
                    toggleIcon.classList.add('fa-pause');
                }
                toggleButton.setAttribute('aria-label', 'Pause Carousel');
                carouselInterval = setInterval(nextSlide, 5000);
            }

            function pauseCarousel() {
                isPaused = true;
                if(toggleIcon) {
                    toggleIcon.classList.remove('fa-pause');
                    toggleIcon.classList.add('fa-play');
                }
                toggleButton.setAttribute('aria-label', 'Play Carousel');
                clearInterval(carouselInterval);
            }

            toggleButton.addEventListener('click', () => {
                if (isPaused) {
                    playCarousel();
                } else {
                    pauseCarousel();
                }
            });
            
            playCarousel(); // Start the carousel
        }
    } else {
        // If carousel is OFF, prepare for a static background
        heroSection.classList.add('hero-static');
    }
    // --- END: Conditional Carousel Logic ---
});

// Resume Modal Logic
const resumeModal = document.getElementById('resumeModal');
const viewResumeBtn = document.getElementById('viewResumeBtn');
const closeBtn = document.querySelector('.close-button');

// Function to open the modal
function openModal() {
    resumeModal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    resumeModal.style.display = 'none';
}

// Event listeners
viewResumeBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Close modal if user clicks on the overlay
window.addEventListener('click', (event) => {
    if (event.target === resumeModal) {
        closeModal();
    }
});

function alertvisitor(){
    alert("Thank you, will get back to you soon!.");
}


// Smooth scrolling without changing the URL
document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links that point to an ID on the page
    const internalLinks = document.querySelectorAll('a.nav-link[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // 1. Prevent the default browser action (jumping and changing the URL)
            event.preventDefault();

            // 2. Get the target section's ID from the link's href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // 3. If the section exists, scroll to it smoothly
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


// ADD this code to the bottom of your script.js file

// Expand/Collapse "About Me" bio
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-bio-btn');
    const moreText = document.getElementById('more-bio-text');
    const ellipsis = document.getElementById('bio-ellipsis');

    if (toggleBtn && moreText && ellipsis) {
        toggleBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the link from jumping

            // Check if the extra text is currently hidden
            if (moreText.classList.contains('hidden-bio')) {
                // If hidden, show it
                moreText.classList.remove('hidden-bio');
                ellipsis.style.display = 'none'; // Hide the "..."
                toggleBtn.textContent = 'Show Less';
            } else {
                // If visible, hide it
                moreText.classList.add('hidden-bio');
                ellipsis.style.display = 'inline'; // Show the "..."
                toggleBtn.textContent = 'Read More...';
            }
        });
    }
});



// Experience Section Show More/Less
document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-duties-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent link from jumping

            // Find the parent panel of the clicked button
            const parentPanel = button.closest('.timeline-content');
            if (parentPanel) {
                // Find the duties within that specific panel
                const extraDuties = parentPanel.querySelectorAll('.extra-duty');

                // Toggle visibility of the duties
                extraDuties.forEach(duty => {
                    duty.classList.toggle('hidden-duty');
                });

                // Update the button text
                if (button.textContent === 'Show More...') {
                    button.textContent = 'Show Less';
                } else {
                    button.textContent = 'Show More...';
                }
            }
        });
    });
});

 // --- UPDATED Section Toggling Logic ---
    function toggleSections() {
        for (const sectionId in sectionVisibility) {
            if (Object.prototype.hasOwnProperty.call(sectionVisibility, sectionId)) {
                const isVisible = sectionVisibility[sectionId];
                const sectionElement = document.getElementById(sectionId);
                const navLinkElement = document.querySelector(`.nav-link[href="#${sectionId}"]`);

                if (!isVisible) {
                    // Hide the section by adding the CSS class
                    if (sectionElement) {
                        sectionElement.classList.add('hidden-by-toggle');
                    }
                    // Hide the nav link by adding the class to its parent <li>
                    if (navLinkElement) {
                        navLinkElement.parentElement.classList.add('hidden-by-toggle');
                    }
                }
            }
        }
    }

toggleSections(); // Run the function when the page loads

const days = [
  "Sunday", "Monday", "Tuesday",
  "Wednesday", "Thursday", "Friday", "Saturday"
];

const messages = {
  Sunday: "Relax & recharge this Sunday 🌴",
  Monday: "Start strong this Monday 💪",
  Tuesday: "Have a great Tuesday 🚀",
  Wednesday: "Happy Hump Day 🐪",
  Thursday: "Almost there — Happy Thursday ✨",
  Friday: "Cheers to Friday 🎉",
  Saturday: "Enjoy your Saturday 😎"
};

const today = new Date();
const dayName = days[today.getDay()];

document.getElementById("greetingText").textContent = messages[dayName];

// Header shrink on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});
