
import HomeContainer from "./HomeContainer.js";
import HomeExp from "./HomeExp.js";
import HomeProjects from "./HomeProjects.js";

const Home = () => {

    const container = document.createElement('div');
    container.classList.add("home");

    container.appendChild(HomeContainer());
    container.appendChild(HomeExp());
    container.appendChild(HomeProjects());

    return container;
};

export default Home;