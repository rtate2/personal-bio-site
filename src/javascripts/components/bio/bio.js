import $ from 'jquery';

import utilities from '../../helpers/utilities';

import './bio.scss';

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
      Hey, thanks for visiting my website!
    </p>
    <p>
      My name is Randy Tate and I was born and raised in Nashville, TN. I grew up heavily involved in sports and my entire life evolved around them. I participated in organized basketball, baseball, 
      soccer, tennis, and any other athletic activity around the neigborhood. I wish I could say that I loved technology since an early age, but I truly was ecapsulated within the sports world.
      I even attended <a href="https://www.utk.edu/" target="_blank">The University of Tennesee, Knoxville</a> and obtained a bachelors degree in Sport Management, planning to become a sports agent. Though I enjoyed my coursework and professors,
      I realized that becoming a sports agent wasn't my calling. After graduating from UT I worked a few years within education and decided to obtain a Masters of Arts in Education degree from
      <a href="https://www.cumberland.edu/" target="_blank">Cumberland University</a>, where I was a Graduate Assistant over Student Affairs, and (also found myself helping out the men's basketball program - go figure). Upon completion of the masters program,
      I started a role as an Admissions Representative for a Nashville-based career college. I really enjoyed most of my time there helping perspective students find value in gaining specialized skills that
      would ultimately help them start rewarding careers. I decided to leave the career college once the tuition rates dramatically increased and made me feel like I was not advising potential
      students ethically. This is when I stumbled upon an opportunity to become an IT Technical Recruiter. 
    </p>

    <p>
      I have spent the last 6+ years, with the last 3 1/2 years at <a href="https://www.staffingmission.com/" target="_blank">Staffing as a Mission</a>, as a Technical Recruiter/Account Executive, developing relationships with decision makers and technical professionals. Throughout those years, I have come across 
      some amazing people. The technology, the projects and the overall impact that's made is intriguing. Those conversations have led me to getting into the field myself. I now understand that 
      software development centers around taking on challenges head-on and working until then solutions are found. I've been doing this my entire life... My sports background has prepared me to face 
      challenges and to work until the problem is solved. I also enjoy wood-working and DIY projects. Initially, I did not see the correlation, but the planning it takes for both DIY projects and 
      woodworking is exactly what it takes to be a good software developer.
    </p>

    <!-- Why do you want to go into development?  -->
    <p>
        I am now enrolled at the <a href="http://nashvillesoftwareschool.com/" target="_blank">Nashville Software School</a> and have enjoyed every minute. This has been one of the most challenging 
        programs, and I have learned so much. I have enjoyed learning the tools required to create front-end centric apps, as well as learning about how the data is used within the apps. I am 
        interested in learning as much as possible while enrolled and even more once I begin my career as a software developer. Learning as long as I am in the field, finding solutions to issues, 
        the ability to positively impact society, working on a team of creative individuals, being able to collaborate, and the cool technology are just a few reasons why I am excited to get into
        software development.
    </p>

    <p>
      Feel free to connect with me if you are interested in learning more about my journey!
      <a href="mailto:randytatejr@gmail.com" target="_blank" class="fas fa-mail-bulk" style="margin: 5px;"></a>
      <a href="https://www.linkedin.com/in/randytatejr" target="_blank" class="fab fa-linkedin-in" style="margin: 5px;"></a>
      <a href="https://github.com/rtate2" target="_blank" class="fab fa-github" style="margin: 5px;"></a>
    </p>
    `;
  utilities.printToDom('bioPage', bioString);
};
printBio();

export default { displayBio };
