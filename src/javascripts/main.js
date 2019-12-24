import 'bootstrap';
import '../styles/main.scss';

import technologies from './components/technologies/technologies';
import projects from './components/projects/projects';
import navbar from './components/Navbar/navbar';
import bio from './components/bio/bio';
import home from './components/Home/home';

const init = () => {
  technologies.printTech();
  technologies.displayTechnologies();
  projects.createProjectCards();
  projects.displayProjects();
  bio.displayBio();
  navbar.displayHome();
  home.homePage();
};

init();
