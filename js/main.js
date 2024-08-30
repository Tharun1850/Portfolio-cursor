// Add your JavaScript code here
console.log("Portfolio website loaded");

// Example: Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Add animation to project cards
const projectCards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

projectCards.forEach(card => {
    observer.observe(card);
});

// Dynamic copyright year
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Your Name. All rights reserved.`;

// Add this to your existing JavaScript file
console.log("Portfolio website loaded");