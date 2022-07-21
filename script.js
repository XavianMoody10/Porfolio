const projectsData = [
  {
    name: "Weather App",
    images: ["weather-app-0.gif", "weather-app-1.gif", "weather-app-2.gif"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl. Tempor orci eu lobortis elementum nibh tellus molestie nunc. ",
    sourceLink: "https://github.com/XavianMoody10/MyWeather-App",
    liveLink: "https://xavian-weather-app.netlify.app/",
    slide: 0,
  },
  {
    name: "Todo App",
    images: ["weather-app-0.gif", "weather-app-1.gif", "weather-app-2.gif"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl. Tempor orci eu lobortis elementum nibh tellus molestie nunc. ",
    sourceLink: "https://github.com/XavianMoody10/MyWeather-App",
    liveLink: "https://xavian-weather-app.netlify.app/",
    slide: 0,
  },
  {
    name: "PROGFASHION",
    images: ["weather-app-0.gif", "weather-app-1.gif", "weather-app-2.gif"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl. Tempor orci eu lobortis elementum nibh tellus molestie nunc. ",
    sourceLink: "https://github.com/XavianMoody10/MyWeather-App",
    liveLink: "https://xavian-weather-app.netlify.app/",
    slide: 0,
  },
  {
    name: "Expense Tracker",
    images: ["weather-app-0.gif", "weather-app-1.gif", "weather-app-2.gif"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl. Tempor orci eu lobortis elementum nibh tellus molestie nunc. ",
    sourceLink: "https://github.com/XavianMoody10/MyWeather-App",
    liveLink: "https://xavian-weather-app.netlify.app/",
    slide: 0,
  },
  {
    name: "PROJECT NAME",
    images: ["weather-app-0.gif", "weather-app-1.gif", "weather-app-2.gif"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl. Tempor orci eu lobortis elementum nibh tellus molestie nunc. ",
    sourceLink: "https://github.com/XavianMoody10/MyWeather-App",
    liveLink: "https://xavian-weather-app.netlify.app/",
    slide: 0,
  },
  {
    name: "PROJECT NAME",
    images: ["weather-app-0.gif", "weather-app-1.gif", "weather-app-2.gif"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl. Tempor orci eu lobortis elementum nibh tellus molestie nunc. ",
    sourceLink: "https://github.com/XavianMoody10/MyWeather-App",
    liveLink: "https://xavian-weather-app.netlify.app/",
    slide: 0,
  },
];

// This is a ongoing loop for the animation background in the Home section
const homeBackgroundAnimations = () => {
  const backgroundCircles = document.querySelectorAll(".home-bg svg circle");

  setInterval(() => {
    backgroundCircles.forEach((circle) => {
      const firstNum = Math.floor(Math.random() * 100);
      const secondNum = Math.floor(Math.random() * 100);
      circle.style.transform = `translate(${firstNum}%, ${secondNum}%)`;
      clearInterval(10000);
    });
  }, 10000);
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const pageNavigationControls = () => {
  const pageLinks = document.querySelectorAll(".page-links li a");
  const sections = document.querySelectorAll("section");

  const toggleNavigationStyle = (target, index) => {
    pageLinks.forEach((link) => {
      link.classList.remove("current");
    });
    pageLinks[index].classList.add("current");
  };

  const pageTracking = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let entryTarget = entry.target;
          let entryIndex = [...sections].indexOf(entry.target);
          toggleNavigationStyle(entryTarget, entryIndex);
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => {
    pageTracking.observe(section);
  });
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const addProjectData = () => {
  const projectsGrid = document.querySelector(".projects-grid");
  const projects = document.querySelectorAll(".projects");
  const reverseDataOrder = [...projectsData];
  reverseDataOrder.reverse();

  const createProjectElements = (data) => {
    const html = `<div class="projects">
    <i class="fas fa-angle-left arrows"></i>
    <i class="fas fa-angle-right arrows"></i>
    <div class="bars">
      <div class="bar active"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div class="project-info">
      <p class="project-name">${data.name}</p>

      <div class="icon-links">
        <a href="${data.sourceLink}">
          <i class="fa-brands fa-github-square"></i>
        </a>

        <a href="${data.liveLink}">
          <i class="fas fa-desktop-alt"></i>
        </a>
      </div>
    </div>
  </div>`;

    projectsGrid.insertAdjacentHTML("afterbegin", html);
  };

  reverseDataOrder.forEach((data) => {
    createProjectElements(data);
  });

  // Add Images to Projects
  const pro = [...document.querySelectorAll("*")].filter((el) =>
    el.classList.contains("projects")
  );

  pro.forEach((projects) => {
    const index = pro.indexOf(projects);
    // "/Images/weather-app-0.gif"
    projects.style.backgroundImage = `url("/Images/${reverseDataOrder[index].images[0]}")`;
  });
};

const projectSlideShow = () => {
  const projects = document.querySelectorAll(".projects");
  const leftArrows = document.querySelectorAll(".fa-angle-left");
  const rightArrows = document.querySelectorAll(".fa-angle-right");
  const slideBars = document.querySelectorAll(".bars");
  const slides = [0, 0, 0, 0, 0, 0];
  const bars = [0, 0, 0, 0, 0, 0];

  leftArrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const project = arrow.closest(".projects");

      // project.style.backroundImage =
      console.log(project);
    });
  });
};

addProjectData();
homeBackgroundAnimations();
pageNavigationControls();
projectSlideShow();
