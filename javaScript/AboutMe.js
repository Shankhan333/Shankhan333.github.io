document.addEventListener('DOMContentLoaded', function() {
    const dynamicContent = document.getElementById('dynamicContent');

    // Create the section element
    const mainSection2 = document.createElement('section');
    mainSection2.id = 'mainSection2';

    // Create the first div (sec_2) with an image container
    const sec_2 = document.createElement('div');
    sec_2.id = 'sec_2';
    sec_2.classList.add('width50')
    const aboutImage = document.createElement('img');
    aboutImage.id = 'AboutImage';
    aboutImage.src = 'CSS/IMG/about.png'; // Placeholder image
    aboutImage.setAttribute('data-src', 'CSS/IMG/about.jpg'); // High-resolution image
    aboutImage.alt = 'About Image';
    aboutImage.classList.add('hidden', 'ofsetRight', 'lazyload');
    aboutImage.loading = 'lazy';
    sec_2.appendChild(aboutImage);

    // Create the second div (sec_1) with the description
    const sec_1 = document.createElement('div');
    sec_1.id = 'sec_1';
    sec_1.classList.add('width50')
    const description = document.createElement('div');
    description.id = 'Description';
    description.classList.add('DP_RTL_animation', 'positionOfSet' , 'hidden');
    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'With a passion for learning and innovation, I have been honing my skills in various frameworks and libraries. Currently, I am expanding my knowledge in backend development to further enhance my skill set. In my free time, I enjoy experimenting with new technologies and contributing to open-source projects.<br><br><b>"I believe that programming is not just a job, but a hobby that allows me to continually challenge myself and grow as a developer."</b>';
    description.appendChild(paragraph);
    sec_1.appendChild(description);

    // Append both divs to the section
    mainSection2.appendChild(sec_2);
    mainSection2.appendChild(sec_1);

    // Append the section to the dynamic content container
    dynamicContent.appendChild(mainSection2);

    // Observer for scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after the animation starts
            }
        });
    }, { threshold: 0.1 });

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible2');
                imageObserver.unobserve(entry.target); // Stop observing after the animation starts
            }
        });
    }, { threshold: 0.1 });

    observer.observe(description);
    imageObserver.observe(aboutImage);
});
