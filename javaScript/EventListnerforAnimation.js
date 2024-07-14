document.addEventListener('DOMContentLoaded', function () {
    const elementToAnimate = document.querySelector('.DP_RTL_animation p');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        console.log('Element top:', rect.top);
        console.log('Element bottom:', rect.bottom);
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        if (isInViewport(elementToAnimate)) {
            elementToAnimate.classList.add('animate');
            console.log('Animation triggered');
            window.removeEventListener('scroll', onScroll); // Remove listener after animation starts
        }
    }

    window.addEventListener('scroll', onScroll);
});
