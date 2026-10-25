const projects = [
    {
        name: "IT Service Management",
        description: "A hackathon project developed to demonstrate a practical IT service management solution.",
        link: "https://github.com/allu121212/service_management"
    },
    {
        name: "SHL Conversational Assessment Recommender",
        description: "A conversational chatbot project designed to recommend relevant assessments.",
        link: "https://github.com/allu121212/shl-chatbot"
    },
    {
        name: "Pest Classification",
        description: "A deep learning project using ResNet-18 to classify pest images.",
        link: "https://github.com/allu121212/Pest-Classifier"
    }
];

const projectList = document.getElementById("projects");

if (projectList) {
    const projectContainer = document.createElement("div");
    projectContainer.className = "project-list";

    projects.forEach((project) => {
        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.name;

        const description = document.createElement("p");
        description.textContent = project.description;

        const link = document.createElement("a");
        link.href = project.link;
        link.textContent = "View on GitHub";
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        card.append(title, description, link);
        projectContainer.appendChild(card);
    });

    projectList.appendChild(projectContainer);
}