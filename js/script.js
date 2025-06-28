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

// Typing Effect for Hero Section
const typingElement = document.getElementById('typing-effect');
const typingCursor = document.querySelector('.typing-cursor');
const wordsToType = ["CREATIVE", "INNOVATIVE", "ROBUST", "OPTIMIZED"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150; // milliseconds
const deletingSpeed = 100; // milliseconds
const pauseBetweenWords = 1500; // milliseconds

function typeEffect() {
    const currentWord = wordsToType[wordIndex];
    let displayText = '';

    if (isDeleting) {
        // Deleting
        displayText = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Typing
        displayText = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (typingElement) {
        typingElement.textContent = displayText;
    }

    let timeToNextChar = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
        // Word fully typed
        timeToNextChar = pauseBetweenWords;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Word fully deleted
        isDeleting = false;
        wordIndex = (wordIndex + 1) % wordsToType.length; // Move to next word, loop
        timeToNextChar = typingSpeed; // Speed up start of next word slightly
    }

    setTimeout(typeEffect, timeToNextChar);
}

// Start typing effect if the element exists
if (typingElement) {
    setTimeout(typeEffect, typingSpeed); // Initial call
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
const mainNav = document.getElementById('main-nav');

if (mobileNavToggle && mainNav) { // Check if elements exist
    mobileNavToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active'); // Toggle .active class on the nav links container
        // Optional: Toggle ARIA attribute for accessibility
        const isExpanded = mainNav.classList.contains('active');
        mobileNavToggle.setAttribute('aria-expanded', isExpanded);
        // Optional: Change hamburger icon to X and back
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

// REMOVED Navbar scroll effect as navbar is now consistently dark

// New Mobile Menu Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mainNav = document.getElementById('main-nav');

if (mobileNavToggle && mainNav) { // Check if elements exist
    mobileNavToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active'); // Toggle .active class on the nav links container
        // Optional: Toggle ARIA attribute for accessibility
        const isExpanded = mainNav.classList.contains('active');
        mobileNavToggle.setAttribute('aria-expanded', isExpanded);
        // Optional: Change hamburger icon to X and back
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


function openMenu(){
  document.getElementById("topbarMenu").style.left = "0px"
}

function closeMenu(){
  document.getElementById("topbarMenu").style.left = "-280px"
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

