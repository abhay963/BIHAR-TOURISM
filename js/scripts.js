// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Form submission event listener for Contact Us form
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Form submission event listener for Suggestions form
    const suggestionsForm = document.querySelector('#suggestions-form');
    if (suggestionsForm) {
        suggestionsForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you for your suggestion!');
            suggestionsForm.reset();
        });
    }

    // Responsive navigation menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});
