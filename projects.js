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

// create second function
const createProjectCards = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++) {
        const projectArr = arr[i]
        if (projectArr.available){
            console.log(projectArr.available)
        // question concerning the div id tag to line 26
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

const init = () => {
    createProjectCards(projects);
}
init();