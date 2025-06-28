// Accordion script from original file (if still needed for other pages/parts)
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar-section');
if (navbar) { // Check if navbar exists
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Add 'scrolled' class after 50px scroll
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// New Mobile Menu Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mainNav = document.getElementById('main-nav'); // Make sure 'main-nav' is the ID of your nav ul/div

if (mobileNavToggle && mainNav) { // Check if elements exist
    mobileNavToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active'); // Toggle .active class on the nav links container
        const isExpanded = mainNav.classList.contains('active');
        mobileNavToggle.setAttribute('aria-expanded', isExpanded);
        const icon = mobileNavToggle.querySelector('i');
        if (isExpanded) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Typing Effect for Hero Section
const typingElement = document.getElementById('typing-effect');
// const typingCursor = document.querySelector('.typing-cursor'); // Cursor is part of HTML now, styled with CSS

const wordsToType = ["CREATIVE", "INNOVATIVE", "ROBUST", "OPTIMIZED"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const pauseBetweenWords = 1500;

function typeEffect() {
    if (!typingElement) return; // Exit if element doesn't exist

    const currentWord = wordsToType[wordIndex];
    let displayText = '';

    if (isDeleting) {
        displayText = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        displayText = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    typingElement.textContent = displayText;

    let timeToNextChar = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
        timeToNextChar = pauseBetweenWords;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % wordsToType.length;
        timeToNextChar = typingSpeed;
    }

    setTimeout(typeEffect, timeToNextChar);
}

// Start typing effect if the element exists on the page
if (typingElement) {
    setTimeout(typeEffect, typingSpeed);
}
