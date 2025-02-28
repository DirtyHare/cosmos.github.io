// Появление текста при прокрутке
const revealElements = document.querySelectorAll('.reveal-text');

function checkScroll() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Интерактивность анимаций при наведении
const animations = [
    { selector: '.spiral-galaxy', elements: '.spiral-arm', normal: ['7s', '9s', '11s'], fast: '2s' },
    { selector: '.elliptical-galaxy', elements: '.elliptical-particle', normal: '6s', fast: '1.5s' },
    { selector: '.supernova', elements: '.supernova-ring', normal: '4s', fast: '1s' },
    { selector: '.ring-galaxy', elements: '.ring', normal: '5s', fast: '1.5s' },
    { selector: '.pulsar', elements: '.pulsar-beam', normal: '1.5s', fast: '0.4s' }
];

animations.forEach(anim => {
    const container = document.querySelector(anim.selector);
    const elements = container.querySelectorAll(anim.elements);

    container.addEventListener('mouseenter', () => {
        elements.forEach(el => {
            el.style.animationDuration = anim.fast;
        });
    });

    container.addEventListener('mouseleave', () => {
        elements.forEach((el, index) => {
            el.style.animationDuration = Array.isArray(anim.normal) ? anim.normal[index] : anim.normal;
        });
    });
});
