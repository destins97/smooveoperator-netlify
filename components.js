export const initAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.from('.hero-text', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.5
    });


    const fadeEls = document.querySelectorAll('.section-fade');
    fadeEls.forEach((el) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
        });
    });


    gsap.to('#hero-bg', {
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: 150,
        ease: 'none'
    });
};

export const initCounter = () => {
    const counterEl = document.getElementById('counter');
    if (!counterEl) return;

    const stats = { val: 0 };
    const target = 50;

    ScrollTrigger.create({
        trigger: '#counter-trigger',
        start: 'top 80%',
        onEnter: () => {
            gsap.to(stats, {
                val: target,
                duration: 2.5,
                ease: 'power2.out',
                onUpdate: () => {
                    counterEl.textContent = Math.floor(stats.val);
                }
            });
        }
    });
};
