import $ from 'jquery';

import './navbar.scss';

const displayHome = () => {
  $('#home-link').on('click', () => {
    $('#home').show();
    $('#projectsPage').hide();
    $('#technologiesPage').hide();
    $('#bioPage').hide();
  });
};

export default { displayHome };
