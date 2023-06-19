function showProjects() {
  document.getElementById("projects").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "none";

  // Fetch JSON data
  fetch("projects.json")
    .then(response => response.json())
    .then(data => {
      const projectsContainer = document.getElementById("projects-container");
      projectsContainer.innerHTML = "";

      // Loop through projects and create HTML elements
      data.projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");

        const titleElement = document.createElement("h3");
        titleElement.textContent = project.title;
        projectElement.appendChild(titleElement);

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = project.description;
        projectElement.appendChild(descriptionElement);

        const imageElement = document.createElement("img");
        imageElement.src = project.image;
        imageElement.alt = project.title;
        projectElement.appendChild(imageElement);

        projectsContainer.appendChild(projectElement);
      });
    })
    .catch(error => {
      console.log("Error fetching projects:", error);
    });
}


function showAbout() {
  document.getElementById("projects").style.display = "none";
  document.getElementById("about").style.display = "block";
  document.getElementById("contact").style.display = "none";
}

function showContact() {
  document.getElementById("projects").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "block";
}

// Event listeners for navigation links
document.querySelector("nav ul li:nth-child(1) a").addEventListener("click", showProjects);
document.querySelector("nav ul li:nth-child(2) a").addEventListener("click", showAbout);
document.querySelector("nav ul li:nth-child(3) a").addEventListener("click", showContact);

// Show projects section by default
//showProjects();
