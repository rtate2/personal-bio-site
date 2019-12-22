import $ from 'jquery';

import utilities from '../../helpers/utilities';
import technologyData from '../../helpers/data/technologyData';

import './technologies.scss';

const displayTechnologies = () => {
  $('#navToTechnologies').on('click', () => {
    $('#technologiesPage').show();
    $('#projectsPage').hide();
    $('#bioPage').hide();
    $('#home').hide();
  });
};

const printTech = () => {
  technologyData.getTechnologyData()
    .then((technologies) => {
      let techString = '<h1>Technologies</h1>';
      technologies.forEach((technology) => {
        techString += `
        <div class="card technology-card" style="width: 18rem;">
          <div class="card-body">
            <a href="${technology.techUrl}" target="_blank">
              <img src="${technology.image}" class="card-img-top" alt="technology logo" id="techLogo">
            </a>
          </div>
        </div>
        `;
      });
      utilities.printToDom('technologiesPage', techString);
    })
    .catch((error) => console.error(error));
};

export default { printTech, displayTechnologies };
