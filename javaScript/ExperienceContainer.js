document.addEventListener('DOMContentLoaded', function() {
    const projectsSection = document.getElementById('experienceSection');

    // Fetch JSON data
    fetch('javaScript/JsonFile/Experience.json')
        .then(response => response.json())
        .then(data => {
            // Iterate through each project
            data.forEach(project => {

                // projectContainer
                const projectContainer = document.createElement('div');
                projectContainer.classList.add('experience');

                // container to divide the projectContainer
                const LeftcontainerBox = document.createElement('div');
                LeftcontainerBox.classList.add('displayflex', 'width50' , 'padding2' , 'height100' , 'leftcontainer');
                
                const Datecont = document.createElement('div');
                Datecont.classList.add('width50' ,'displayflex' ,'justifycontentstart')
                
                // Date for the Left Container
                const Date = document.createElement('p');
                Date.textContent = project.date;
                Date.classList.add('project-date', 'displayflex');

                Datecont.appendChild(Date);
                LeftcontainerBox.appendChild(Datecont);

                // Right Container for name, description, technologies, and job level
                const RightcontainerBox = document.createElement('div');
                RightcontainerBox.classList.add('displayflex', 'flexcolumn', 'alignitem', 'width50', 'height100');

                const projectName = document.createElement('h2');
                projectName.classList.add('project-name');
                projectName.textContent = project.level;
                
                const projectDescription = document.createElement('p');
                projectDescription.classList.add('project-details');
                projectDescription.textContent = project.description;

                const technologiesList = document.createElement('ul');
                technologiesList.classList.add('technologies-list', 'paddingtop');
                project.technologies.forEach(tech => {
                    const techItem = document.createElement('li');
                    techItem.textContent = tech;
                    techItem.classList.add('technology-item');
                    technologiesList.appendChild(techItem);
                });

                RightcontainerBox.appendChild(projectName);
                RightcontainerBox.appendChild(projectDescription);
                RightcontainerBox.appendChild(technologiesList);

                projectContainer.appendChild(LeftcontainerBox);
                projectContainer.appendChild(RightcontainerBox);

                projectsSection.appendChild(projectContainer);
            });
        })
        .catch(error => console.error('Error fetching projects:', error));

});
