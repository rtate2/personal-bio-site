import $ from 'jquery';

import utilities from '../../helpers/utilities';
import projectData from '../../helpers/data/projectData';

import './projects.scss';

const displayProjects = () => {
  $('#navToProjects').on('click', () => {
    $('#projectsPage').show();
    $('#technologiesPage').hide();
    $('#bioPage').hide();
    $('#home').hide();
  });
};

const createProjectCards = () => {
  projectData.getProjectData()
    .then((projects) => {
      let domString = '<h1 class="projects-heading">Projects</h1>';
      domString += '<div id="projects-section" class="d-flex flex-wrap text-center offset-2">';
      projects.forEach((project) => {
        domString += `
        <div class="card projectCard">
            <img src=${project.screenshot} class="card-img-top project-screenshot" alt="...">
            <div class="card-body cardBody">
              <h5 class="card-title cardTitle ${project.available}">${project.title}</h5>
              <p class="card-text">${project.description}</p>
              <p>Tech Used:${project.technologiesUsed}</p>
              <a href="${project.url}" target="_blank">
                <button class="btn btn-dark">View Project</button>
              </a>
              <a href="${project.githubUrl}" target="_blank">
                <button class="btn btn-dark">View GitHub Repo</button>
              </a>
            </div>
          </div>
        `;
      });
      domString += '</div>';
      utilities.printToDom('projectsPage', domString);
    })
    .catch((error) => console.error(error));
};


export default { createProjectCards, displayProjects };
