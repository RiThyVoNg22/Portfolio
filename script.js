// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            // Account for top navigation bar height (80px)
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate skill bars when skills section is visible
            if (entry.target.classList.contains('skill-item') || entry.target.closest('.skills')) {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe all sections and skill items
document.querySelectorAll('section, .skill-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(element);
});

// Animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (width && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 100);
        }
    });
}

// Scroll event listener
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Update navigation active state
    updateActiveNav();
    
    lastScrollTop = scrollTop;
});

// Update active navigation link based on scroll position
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}` || (current === 'home' && href === '#home')) {
            link.classList.add('active');
        }
    });
}

// Handle profile image placeholder
const profileImg = document.getElementById('profile-img');
if (profileImg) {
    profileImg.onerror = function() {
        this.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.className = 'profile-placeholder';
        placeholder.innerHTML = '<i class="fas fa-user"></i>';
        placeholder.style.cssText = `
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4em;
            color: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
        `;
        this.parentElement.appendChild(placeholder);
    };
}

// Add parallax effect to sidebar
window.addEventListener('scroll', () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && window.innerWidth > 1024) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        sidebar.style.transform = `translateY(${rate}px)`;
    }
});

// Add typing effect to name (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Trigger skill bar animation if skills section is already visible
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            animateSkillBars();
        }
    }
    
    // Add smooth entrance animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add print stylesheet for printing
const printStyle = document.createElement('style');
printStyle.textContent = `
    @media print {
        body {
            background: white;
        }
        .container {
            box-shadow: none;
        }
        .sidebar {
            background: #1e3a5f !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }
        .main-content {
            background: #f5f5f5 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }
        .top-nav {
            display: none;
        }
    }
`;
document.head.appendChild(printStyle);

// Add hover effect to contact items
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Add click to copy email functionality
const emailElement = document.querySelector('.contact-item span');
if (emailElement && emailElement.textContent.includes('@')) {
    emailElement.style.cursor = 'pointer';
    emailElement.title = 'Click to copy email';
    emailElement.addEventListener('click', function() {
        const email = this.textContent.trim();
        navigator.clipboard.writeText(email).then(() => {
            const originalText = this.textContent;
            this.textContent = '✓ Copied!';
            this.style.color = '#10b981';
            setTimeout(() => {
                this.textContent = originalText;
                this.style.color = '';
            }, 2000);
        });
    });
}
