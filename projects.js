const bio = document.getElementById('bioPage');
const tech = document.getElementById('technologiesPage');
const project = document.getElementById('projectsPage');

const projects = [
    {
        title: "Product Cards", 
        screenshot: "Images/ProductCards.png", 
        description: "The project focused on building a grid of cards for a company's products.", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, and Version Control with Github",
        available: true,
        url: "https://github.com/rtate2/product-cards", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/rtate2/product-cards"
    },

    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
];

// create a printToDom function - takes two parameters
// divId and textToPrint
const printToDom = (divId, textToPrint) => {
    const containerId = document.getElementById(divId);
    containerId.innerHTML = textToPrint;
};

// create function to build out project cards
const createProjectCards = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++) {
        const projectArr = arr[i]
        if (projectArr.available){
        domString += `
        <div class="projectCard" style="width: 18rem;">
        <img src=${projectArr.screenshot} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${projectArr.title}</h5>
          <p class="card-text">${projectArr.description}</p>
          <p>${projectArr.technologiesUsed}</p>
          <p>${projectArr.available}</p>
          <a>${projectArr.url}</a>
          <a>${projectArr.githubUrl}</a>
        </div>
        `;
        }
    }
    printToDom('projectsPage', domString)
};

// created function to call another function
// const init = () => {
//     createProjectCards(projects);
// }
// init();

// created function to print bio info to the dom
const printBio = () => {
    let bioString = '';
    bioString = `
    <p>
        I have spent the last 6+ years as a Technical Recruiter/Account Executive working in the staffing industry.
    </p>
    <!-- Why do you want to go into development?  -->
    <p>
        My current current has allowed me to conduct extensive research of the technology industry.
    </p>
    <!-- What do you love about development? -->
    <p>
        The ability to find solutions...
    </p>
    `;
    printToDom('bioPage', bioString);
};
printBio();

// created function to call tech information
const printTech = () => {
    let techString = '';
    techString = `
        <h3>Skills and Technologies</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>VisualStudio Code</li>
            <li>Git and GitHub</li>
        </ul>
    `
  printToDom('technologiesPage', techString);
  };

// function to hide and show content from clicked links
const toggle = (e) => {
    e.preventDefault();
    const linkClicked = e.target.id;
    if (linkClicked === 'navToBio') {
        bio.classList.remove('hidden');
        tech.classList.add('hidden');
        project.classList.add('hidden');
    } else if (linkClicked === 'navToTechnologies') {
        bio.classList.add('hidden');
        tech.classList.remove('hidden');
        project.classList.add('hidden');
        printTech();
    } else { 
        (linkClicked === 'navToProjects')
        bio.classList.add('hidden');
        tech.classList.add('hidden');
        project.classList.remove('hidden');
        createProjectCards(projects);
    }
}


const projectLinks = document.getElementById('navLinks');
projectLinks.addEventListener('click',toggle);