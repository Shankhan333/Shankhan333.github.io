document.addEventListener('DOMContentLoaded', function() {
    const dynamicContent = document.getElementById('dynamicContent');

    // Create the section element
    const mainSection2 = document.createElement('section');
    mainSection2.id = 'mainSection2';

    // Create the first div (sec_2) with an image container
    const sec_2 = document.createElement('div');
    sec_2.id = 'sec_2';
    sec_2.classList.add('width50')
    const aboutImage = document.createElement('div');
    aboutImage.id = 'AboutImage';
    aboutImage.classList.add('hidden', 'ofsetRight');
    sec_2.appendChild(aboutImage);

    // Create the second div (sec_1) with the description
    const sec_1 = document.createElement('div');
    sec_1.id = 'sec_1';
    sec_1.classList.add('width50')
    const description = document.createElement('div');
    description.id = 'Description';
    description.classList.add('DP_RTL_animation', 'positionOfSet' , 'hidden');
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quasi sapiente. Vitae labore laudantium exercitationem asperiores ipsam dicta corporis repellendus, ipsa deleniti iusto sit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus dolorum incidunt consequuntur impedit at saepe cum, nesciunt cumque tempora culpa magni velit. Qui voluptate maxime tenetur velit facilis blanditiis cupiditate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, distinctio? Saepe pariatur ipsa, rerum, quisquam voluptatum dignissimos non nesciunt officia excepturi sit est inventore nostrum eaque unde, reiciendis molestiae maiores? perferendis ad quasi tenetur nesciunt nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium rem totam cupiditate aperiam fugiat neque esse sint quo, aspernatur voluptates? Laboriosam molestiae quae fuga, facere tempora illum nemo quod!';
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
