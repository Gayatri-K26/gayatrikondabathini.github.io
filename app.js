// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Cursor tracking for background glow effect
    document.addEventListener('mousemove', function(e) {
        // Update CSS variables with cursor position
        document.documentElement.style.setProperty('--x', e.clientX + 'px');
        document.documentElement.style.setProperty('--y', e.clientY + 'px');
    });
    
    // For touch devices
    document.addEventListener('touchmove', function(e) {
        if (e.touches.length > 0) {
            document.documentElement.style.setProperty('--x', e.touches[0].clientX + 'px');
            document.documentElement.style.setProperty('--y', e.touches[0].clientY + 'px');
        }
    });
    
    // Navigation menu functionality
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('.section');
    const welcomeCard = document.querySelector('.welcome-card');
    
    // Check for hash in URL when page loads (for direct links)
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        // If the hash is for experience-card, scroll to it
        if (targetId === 'experience-card') {
            const experienceCard = document.getElementById('experience-card');
            if (experienceCard) {
                setTimeout(function() {
                    experienceCard.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else if (document.getElementById(targetId)) {
            // For other section IDs, switch to that section
            switchSection(targetId);
        }
    }
    
    // Function to switch active section
    function switchSection(id) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the selected section
        document.getElementById(id).classList.add('active');
        
        // Update active nav link
        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
                link.parentElement.classList.add('active');
            }
        });
        
        // If switching to home section, reset welcome card
        if (id === 'home') {
            if (welcomeCard && welcomeCard.querySelector('.welcome-card-content').classList.contains('flipped')) {
                welcomeCard.querySelector('.welcome-card-content').classList.remove('flipped');
            }
        }
    }
    
    // Add click event to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only prevent default for hash links (internal page navigation)
            if (this.getAttribute('href').includes('#') && !this.getAttribute('href').includes('.html')) {
                e.preventDefault();
                const sectionId = this.getAttribute('href').substring(1);
                
                // Special handling for About link
                if (sectionId === 'about') {
                    // Go to home section and flip the card
                    switchSection('home');
                    if (welcomeCard) {
                        welcomeCard.querySelector('.welcome-card-content').classList.add('flipped');
                    }
                } else {
                    // Switch to the selected section
                    switchSection(sectionId);
                }
            }
            // For links to other pages (containing .html), let the default behavior happen
        });
    });
    
    // Portfolio item hover effect
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.portfolio-overlay').style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.portfolio-overlay').style.opacity = '0';
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically handle the form submission with AJAX
            // For now, we'll just show an alert
            alert('Thanks for your message! This is a demo form, so no message was actually sent.');
            this.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            switchSection(sectionId);
        });
    });
    
    // Get all project cards
    const projectCards = document.querySelectorAll('.project');
    
    // Add entrance animations with staggered delay
    projectCards.forEach((card, index) => {
        // Set initial state (invisible)
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Animate entrance with staggered delay
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index); // Staggered delay based on index
        
        // Add hover effects
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('flipped')) {
                card.style.transform = 'scale(1.02)';
                card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('flipped')) {
                card.style.transform = 'scale(1)';
                card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }
        });
        
        // Add click event for flip animation
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
            
            // Reset hover effects when flipped
            if (this.classList.contains('flipped')) {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 15px 25px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)';
            } else {
                // Restore hover effect if mouse is still over the card
                if (this.matches(':hover')) {
                    this.style.transform = 'scale(1.02)';
                    this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
                } else {
                    this.style.transform = 'scale(1)';
                    this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                }
            }
        });
    });
    
    // Add image hover effects
    const projectImages = document.querySelectorAll('.image-box img, .image-box video');
    projectImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.05)';
        });
        
        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });
    
    // Fetch and load navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            navbarPlaceholder.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
});