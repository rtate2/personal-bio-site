import $ from 'jquery';

import utilities from '../../helpers/utilities';

const displayBio = () => {
  $('#navToBio').on('click', () => {
    $('#bioPage').show();
    $('#home').hide();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
  });
};

// created function to print bio info to the dom
const printBio = () => {
  let bioString = '';
  bioString = `
    <p>
        I have spent the last 6+ years as a Technical Recruiter/Account Executive working in the staffing industry. Throughout those years, I have come across some amazing professional
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </p>
    <!-- Why do you want to go into development?  -->
    <p>
        My current current has allowed me to conduct extensive research of the technology industry.
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </p>
    <!-- What do you love about development? -->
    <p>
        The ability to find solutions...
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum."
    </p>
    `;
  utilities.printToDom('bioPage', bioString);
};
printBio();

export default { displayBio };
