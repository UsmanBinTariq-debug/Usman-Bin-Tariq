document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        let name = document.getElementById('name').value;

        // Append email to the message in the textarea
        message += `\n\nEmail: ${email}`;
        message += `\n\nName: ${name}`;
        
        // Set the updated message back to the message textarea
        document.getElementById('message').value = message;
        console.log(message);
        emailjs.sendForm('service_vazw5m9', 'template_56biljs', form)
            .then(() => {
                alert('Thank you for your message!');
                form.reset();
            }, (error) => {
                console.error('Failed to send message:', error);
                alert('Failed to send message. Please try again later.');
            });
    });

    const exploreButton = document.querySelector('.cover a');
    exploreButton.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#portfolio').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lazy loading for images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('loading');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });

    // Fade-in effect for sections
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Remove image slideshow for cover page
    const coverElement = document.querySelector('.cover');
    coverElement.style.backgroundImage = 'url("./chart-1905225.jpg")';

    // Add any additional JavaScript interactivity here
});

// Initialize EmailJS
(function() {
    emailjs.init('ihaXdVcv1L96Q6O1e');
})();
