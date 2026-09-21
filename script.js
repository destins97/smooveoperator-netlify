import { initAnimations, initCounter } from './components.js';

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initAnimations();
    initCounter();

    const initTilt = () => {
        const containers = document.querySelectorAll('.machine-container');
        
        containers.forEach(container => {
            const tiltEl = container.querySelector('.machine-tilt');
            
            container.addEventListener('mousemove', (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;

                gsap.to(tiltEl, {
                    rotationX: rotateX,
                    rotationY: rotateY,
                    duration: 0.5,
                    ease: 'power2.out',
                    transformPerspective: 1000
                });
            });

            container.addEventListener('mouseleave', () => {
                gsap.to(tiltEl, {
                    rotationX: 0,
                    rotationY: 0,
                    duration: 0.8,
                    ease: 'elastic.out(1, 0.3)'
                });
            });
        });
    };

    if (window.innerWidth > 1024) {
        initTilt();
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Transmitting...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = 'Message Sent.';
                btn.classList.add('bg-white', 'text-black');
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.classList.remove('bg-white', 'text-black');
                }, 3000);
            }, 1200);
        });
    }


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', () => {
        const nav = document.getElementById('main-nav');
        if (window.scrollY > 50) {
            nav.classList.add('py-3');
            nav.classList.remove('py-5');
        } else {
            nav.classList.add('py-5');
            nav.classList.remove('py-3');
        }
    });
});
