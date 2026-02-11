// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    }
    
    lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animateElements = document.querySelectorAll(
    '.product-card, .service-card, .feature-card, .cert-card, .industry-card, .brand-category'
);

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Quote Form Handling
const quoteForm = document.getElementById('quoteForm');

quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = {
        companyName: document.getElementById('companyName').value,
        contactPerson: document.getElementById('contactPerson').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        brand: document.getElementById('brand').value,
        quantity: document.getElementById('quantity').value,
        partDescription: document.getElementById('partDescription').value,
        file: document.getElementById('fileUpload').files[0]
    };
    
    // Log form data (in production, this would be sent to a server)
    console.log('Quote Request:', formData);
    
    // Show success message
    showSuccessMessage('Quote request submitted successfully! We will contact you within 24 hours.');
    
    // Reset form
    quoteForm.reset();
    
    // In production, you would send this data to your backend:
    // sendQuoteRequest(formData);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        phone: document.getElementById('contactPhone').value,
        message: document.getElementById('contactMessage').value
    };
    
    // Log form data (in production, this would be sent to a server)
    console.log('Contact Form:', formData);
    
    // Show success message
    showSuccessMessage('Message sent successfully! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
    
    // In production, you would send this data to your backend:
    // sendContactMessage(formData);
});

// Success Message Display Function
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
        ${message}
    `;
    
    document.body.appendChild(successDiv);
    
    // Remove after 5 seconds
    setTimeout(() => {
        successDiv.style.animation = 'slideInRight 0.5s ease reverse';
        setTimeout(() => {
            successDiv.remove();
        }, 500);
    }, 5000);
}

// File upload display
const fileUpload = document.getElementById('fileUpload');
const fileLabel = document.querySelector('.file-upload-label span');

fileUpload.addEventListener('change', (e) => {
    const fileName = e.target.files[0]?.name;
    if (fileName) {
        fileLabel.textContent = fileName;
        fileLabel.style.color = '#27ae60';
    } else {
        fileLabel.textContent = 'Choose File (PDF or Excel)';
        fileLabel.style.color = '';
    }
});

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

function highlightNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNav);

// Brand carousel animation (auto-scroll effect for brand items)
const brandItems = document.querySelectorAll('.brand-item');
let brandIndex = 0;

function highlightBrands() {
    brandItems.forEach((item, index) => {
        item.style.transition = 'all 0.3s ease';
        if (index === brandIndex) {
            item.style.transform = 'scale(1.05)';
        } else {
            item.style.transform = 'scale(1)';
        }
    });
    
    brandIndex = (brandIndex + 1) % brandItems.length;
}

// Start brand animation every 2 seconds
setInterval(highlightBrands, 2000);

// Stats counter animation
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Form validation enhancement
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\+\-\(\)]+$/;
    return re.test(phone);
}

// Add real-time validation to email inputs
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', (e) => {
        if (e.target.value && !validateEmail(e.target.value)) {
            e.target.style.borderColor = '#e74c3c';
            e.target.setCustomValidity('Please enter a valid email address');
        } else {
            e.target.style.borderColor = '#ddd';
            e.target.setCustomValidity('');
        }
    });
});

// Add real-time validation to phone inputs
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('blur', (e) => {
        if (e.target.value && !validatePhone(e.target.value)) {
            e.target.style.borderColor = '#e74c3c';
            e.target.setCustomValidity('Please enter a valid phone number');
        } else {
            e.target.style.borderColor = '#ddd';
            e.target.setCustomValidity('');
        }
    });
});

// Lazy loading for images (when images are added)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// Scroll to top button (optional feature)
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollBtn.className = 'scroll-to-top';
scrollBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--secondary-color);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    z-index: 999;
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollBtn.style.display = 'flex';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollBtn.addEventListener('mouseenter', () => {
    scrollBtn.style.transform = 'scale(1.1)';
});

scrollBtn.addEventListener('mouseleave', () => {
    scrollBtn.style.transform = 'scale(1)';
});

// Console message for developers
console.log('%cEON General Supply Company', 'color: #1a5490; font-size: 24px; font-weight: bold;');
console.log('%cWebsite developed with attention to detail', 'color: #f39c12; font-size: 14px;');
console.log('%cFor inquiries: info@eongeneralsupply.co.za', 'color: #333; font-size: 12px;');

// Initialize all animations on page load
window.addEventListener('load', () => {
    // Trigger initial highlight for navigation
    highlightNav();
    
    // Add loaded class to body for any CSS animations
    document.body.classList.add('loaded');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page is hidden');
    } else {
        console.log('Page is visible');
    }
});

// Performance monitoring (optional)
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    });
}
