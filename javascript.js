// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelectorAll('nav ul li a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Simple contact form handler (no backend, just a thank you message)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = "Thank you for contacting us!";
    this.reset();
});

