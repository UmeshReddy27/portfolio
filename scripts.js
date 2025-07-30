// Initialize Lucide icons
lucide.createIcons();

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a, .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if(!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Smooth Scrolling & Active Nav Link Highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header nav a.nav-link');

function activateNavLink() {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Reveal sections on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
// Hiding Header on Scroll
let lastScrollTop = 0;
const header = document.getElementById('header');
const headerHeight = header.offsetHeight;
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
                // Scrolling Down
        header.classList.add('-translate-y-full');
    } else {
                // Scrolling Up
        header.classList.remove('-translate-y-full');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);
