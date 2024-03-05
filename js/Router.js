import Loader from './components/Loader.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Header from './components/Header.js';
import HeaderMobile from './components/HeaderMobile.js';

const container = document.getElementById('root');
const routes = {
    '#/': Home,
    '#/contact': Contact,
};

function renderComponent(component) {
    container.innerHTML = '';
    container.appendChild(Loader());
    container.appendChild(Header());
    container.appendChild(HeaderMobile());

    if (typeof component === 'function') {
        component = component(); 
    }

    if (component instanceof HTMLElement) {
        container.appendChild(component);
    } else {
        console.error('Invalid component:', component);
    }
}

export function renderContent() {
    const path = window.location.hash;
    const route = routes[path] || Home;

    renderComponent(route);
}

window.addEventListener('hashchange', renderContent);
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loader = document.querySelector(".container");

        if (loader) {
            loader.classList.add("off");
        }
    }, 1000);
    renderContent();
});