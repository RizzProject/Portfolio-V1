// JavaScript for Portfolio Landing Page

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
    
    // Add floating animation to profile image
    const profileImage = document.querySelector('.profile-hover');
    if (profileImage) {
        profileImage.classList.add('float-animation');
    }
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.classList.add('backdrop-blur-fallback');
        } else {
            navbar.classList.remove('backdrop-blur-fallback');
        }
    });
    
    // Add hover effects to social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click handler for "Let's Talk" button
    const letsTalkBtn = document.querySelector('button');
    if (letsTalkBtn) {
        letsTalkBtn.addEventListener('click', function() {
            // You can customize this action
            alert('Terima kasih! Silakan hubungi saya melalui kontak yang tersedia.');
        });
    }
    
    // Add click handler for Download CV link
    const downloadCvLink = document.querySelector('a[href="#"]:last-of-type');
    if (downloadCvLink && downloadCvLink.textContent.includes('Curriculum Vitae')) {
        downloadCvLink.addEventListener('click', function(e) {
            e.preventDefault();
            // You can customize this action
            alert('CV akan segera diunduh. Fitur ini dapat dikustomisasi sesuai kebutuhan.');
        });
    }
    
    // Add typing effect to the main title (optional enhancement)
    const titleElement = document.querySelector('h1');
    if (titleElement) {
        // Add a subtle fade-in animation
        titleElement.style.opacity = '0';
        titleElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            titleElement.style.transition = 'all 0.8s ease-out';
            titleElement.style.opacity = '1';
            titleElement.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Add staggered animation to content elements
    const contentElements = document.querySelectorAll('.order-2 > *');
    contentElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
    
    // Add parallax effect to decorative elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const decorativeElements = document.querySelectorAll('.absolute.animate-pulse');
        
        decorativeElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.2);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});

