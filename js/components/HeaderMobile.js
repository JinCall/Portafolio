function HeaderMobile() {
    const container = document.createElement("div");
    container.classList.add("headerMobile");
    container.innerHTML = `
        <a href="#/" class="headerMobile__logo">J.S Calleros</a>
        <div class="toggler" id="toggler">
            <span class="togglerBar"></span>
            <span class="togglerBar"></span>
            <span class="togglerBar"></span>
        </div>
        <nav class="headerMobile__list" id="togglerMenu">
            <ul>
            <li class="headerMobile__list__link">
                <a href="#/">Inicio</a>
            </li>
            <li class="headerMobile__list__link">
                <a href="#exp">Experiencia</a>
            </li>
            <li class="headerMobile__list__link">
                <a href="#sobre">Sobre mi</a>
            </li>
            <li class="headerMobile__list__link">
                <a href="#/contact">Contacto</a>
            </li>
            </ul>
        </nav>
    `;

    document.body.appendChild(container);

    document.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const headerSectionM = document.querySelector(".headerMobile");

        const scrollThreshold = 10;

        if (scrollPosition > scrollThreshold) {
            headerSectionM.classList.add("move");
        } else {
            headerSectionM.classList.remove("move");
        }
    });

    const toggler = document.querySelector(".toggler");
    const toggleMenu = document.querySelector(".headerMobile__list");


    toggler.addEventListener("click", function () {
        toggler.classList.toggle("active");
        toggleMenu.classList.toggle("active");
    });

    function closeMenus() {
        toggler.classList.remove("active");
        toggleMenu.classList.remove("active");
    }
    
    document.body.addEventListener("click", (event) => {
        const target = event.target;
    
        if (!target.closest("#toggler") && !target.closest("#togglerMenu")) {
            closeMenus();
        } else if (target.closest("#togglerMenu")) {
            closeMenus();
        }
    });

    return container;

}


export default HeaderMobile;