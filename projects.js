const projects = [
    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },

    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    }
]

// create a printToDom function - takes two parameters
// DivID and textToPrint
const printToDom = (divID, textToPrint) => {
    containerID = document.getElementById(divID);
    containerID.innerHTML = textToPrint;
};

// create second function
const createProjectCards = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++) {
        // question concerning the div id tag to line 26
        domString += `
         <div class='projectCard'>
            <h2>${arr[i].title}</h2>
            <img src=${arr[i].screenshot}></img>
            <p>${arr[i].description}</p>
            <p>${arr[i].technologiesUsed}</p>
            <p>${arr[i].available}</p>
            <img src=${arr[i].url}></img>
            <img src=${arr[i].githubUrl}></img>
        </div>
        `
    }

    // calling printToDom
    printToDom('projectsPage', domString)
};

createProjectCards(projects);