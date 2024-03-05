function Header() {
    const content = document.createElement("div");

    content.classList.add("header");
    content.innerHTML = `
        <h2>J.S Calleros</h2>
        <nav class="header__list">
            <ul>
                <li class="header__list__link">
                    <a href="#/">Inicio</a>
                </li>
                <li class="header__list__link">
                    <a href="#exp">Experiencia</a>
                </li>
                <li class="header__list__link">
                    <a href="#sobre">Sobre mi</a>
                </li>
                <li class="header__list__link">
                    <a href="#/contact">Contacto</a>
                </li>
            </ul>
        </nav>
    `;
    
    document.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const headerSection = document.querySelector(".header");

        const scrollThreshold = 10;

        if (scrollPosition > scrollThreshold) {
            headerSection.classList.add("move");
        } else {
            headerSection.classList.remove("move");
        }
    });

    return content;
}

export default Header;