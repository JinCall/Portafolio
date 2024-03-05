import HomeProfile from "./HomeProfile.js";
import HomeAbout from "./HomeAbout.js";

const HomeContainer = () => {

    const container = document.createElement('div');
    container.classList.add("home__container");

    container.appendChild(HomeProfile());
    container.appendChild(HomeAbout());


    return container;
};

export default HomeContainer;