/**
 * Main JavaScript for Portfolio Website
 */
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Don't prevent default for links to other pages
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Fade-in animation for sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
    
    // Portfolio item hover effect
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const img = item.querySelector('img');
        const details = item.querySelector('.portfolio-details');
        
        if (img && details) {
            item.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.05)';
                details.style.opacity = '1';
            });
            
            item.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
                details.style.opacity = '0.8';
            });
        }
    });
    
    // Add CSS for the fade-in animation (doing this in JS to keep styles together)
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-section.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .portfolio-item img {
            transition: transform 0.3s ease;
        }
        
        .portfolio-details {
            opacity: 0.8;
            transition: opacity 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Mobile navigation toggle
    const createMobileNav = () => {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');
        
        if (nav && navLinks) {
            const mobileToggle = document.createElement('button');
            mobileToggle.classList.add('mobile-nav-toggle');
            mobileToggle.innerHTML = '<span></span><span></span><span></span>';
            nav.insertBefore(mobileToggle, navLinks);
            
            mobileToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                mobileToggle.classList.toggle('active');
            });
            
            // Close mobile menu when link is clicked
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    mobileToggle.classList.remove('active');
                });
            });
            
            // Add CSS for mobile navigation
            const mobileStyle = document.createElement('style');
            mobileStyle.textContent = `
                @media (max-width: 767px) {
                    .nav-links {
                        display: none;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background-color: white;
                        flex-direction: column;
                        padding: 1rem 0;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                        z-index: 100;
                    }
                    
                    .nav-links.active {
                        display: flex;
                    }
                    
                    .nav-links li {
                        width: 100%;
                        text-align: center;
                    }
                    
                    .mobile-nav-toggle {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        width: 30px;
                        height: 21px;
                        background: transparent;
                        border: none;
                        cursor: pointer;
                        padding: 0;
                        z-index: 10;
                    }
                    
                    .mobile-nav-toggle span {
                        display: block;
                        width: 100%;
                        height: 3px;
                        background-color: var(--primary-color);
                        transition: all 0.3s ease;
                    }
                    
                    .mobile-nav-toggle.active span:nth-child(1) {
                        transform: translateY(9px) rotate(45deg);
                    }
                    
                    .mobile-nav-toggle.active span:nth-child(2) {
                        opacity: 0;
                    }
                    
                    .mobile-nav-toggle.active span:nth-child(3) {
                        transform: translateY(-9px) rotate(-45deg);
                    }
                }
                
                @media (min-width: 768px) {
                    .mobile-nav-toggle {
                        display: none;
                    }
                }
            `;
            document.head.appendChild(mobileStyle);
        }
    };
    
    // Initialize mobile navigation
    createMobileNav();
}); 