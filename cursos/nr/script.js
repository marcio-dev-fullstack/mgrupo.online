// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.preloader').classList.add('hidden');
    }, 2500);
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu
const btnMobile = document.querySelector('.btn-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const btnCloseMobile = document.querySelector('.btn-close-mobile');

btnMobile.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

btnCloseMobile.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Counter animation
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-count'));
        const increment = target / speed;
        
        const updateCount = () => {
            const count = parseFloat(counter.innerText);
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target + (target === 98 ? '' : '+');
            }
        };
        
        updateCount();
    });
};

// Intersection Observer for counters
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    observer.observe(statsSection);
}

// Service cards hover effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        card.style.setProperty('--x', `${x}%`);
        card.style.setProperty('--y', `${y}%`);
    });
});

// Cursos filter
const categoriaBtns = document.querySelectorAll('.categoria-btn');
const cursoCards = document.querySelectorAll('.curso-card');

categoriaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoriaBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        cursoCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeInUp 0.5s ease forwards';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe elements
document.querySelectorAll('.service-card, .curso-card, .estagio-card, .depoimento-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    scrollObserver.observe(el);
});