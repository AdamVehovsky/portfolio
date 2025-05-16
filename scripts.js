document.addEventListener('mousemove', (event) => {
    const particles = document.querySelectorAll('.particle');
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    particles.forEach(particle => {
        const rect = particle.getBoundingClientRect();
        const particleX = rect.left + rect.width / 2;
        const particleY = rect.top + rect.height / 2;

        const deltaX = mouseX - particleX;
        const deltaY = mouseY - particleY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const maxDistance = 300; // Increased interaction range
        const force = Math.max(0, (maxDistance - distance) / maxDistance);

        const translateX = deltaX * force * 0.3; // Adjusted force multiplier
        const translateY = deltaY * force * 0.3;

        particle.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let hasScrolled = false;

window.addEventListener('scroll', function () {
    if (!hasScrolled) {
        const jmenoSection = document.querySelector('#jmeno');
        const aboutSection = document.querySelector('#about');

        if (window.scrollY > 0 && window.scrollY < jmenoSectionSection.offsetHeight) {
            aboutSection.scrollIntoView({
                behavior: 'smooth'
            });
            hasScrolled = true; // Prevent further automatic scrolling
        }
    }
});
