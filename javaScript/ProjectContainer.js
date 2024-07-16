document.addEventListener('DOMContentLoaded', function() {
    const projectsSection = document.getElementById('projectsSection');

    // Fetch JSON data
    fetch('javaScript/JsonFile/projects.json')
        .then(response => response.json())
        .then(data => {
            // Iterate through each project
            data.forEach(project => {

                // projectContainer
                const projectContainer = document.createElement('div');
                projectContainer.classList.add('project');

                // container to divide the porjectContainer
                const LeftcontainerBox = document.createElement('div');
                LeftcontainerBox.classList.add('displayflex','flexcolumn','width50','height100');
                
                // image for the Left Container
                const image = document.createElement('img');
                image.src = `CSS/IMG/Projects/${project.ImageName}`;
                image.classList.add('project-image' , 'displayflex');

                LeftcontainerBox.appendChild(image);

                // Right Container for name description and technologies
                const RightcontainerBox = document.createElement('div');
                RightcontainerBox.classList.add('displayflex','flexcolumn' , 'alignitem' ,'width50','height100');

                const projectName = document.createElement('h2');
                projectName.classList.add('project-name');
                projectName.textContent = project.name;
                
                const projectDescription = document.createElement('p');
                projectDescription.classList.add('project-details');
                projectDescription.textContent = project.description;

                const technologiesList = document.createElement('ul');
                technologiesList.classList.add('technologies-list' , 'paddingtop');
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
