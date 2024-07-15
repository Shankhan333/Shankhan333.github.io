document.addEventListener('DOMContentLoaded', function() {
    const animatedSection = document.getElementsByClassName('DP_RTL_animation');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedSection.classList.add('visible');
                observer.unobserve(animatedSection); // Stop observing after the animation starts
            }
        });
    }, { threshold: 0.1 });

    observer.observe(animatedSection);
});
