const HomeAbout = () => {
    const container = document.createElement('div');
    container.classList.add("home__about")

    container.innerHTML = `
        <h2 id="sobre">Sobre mi</h2>
        <div class="home__about__container">
            <div class="home__about__container__exp">
                <img src="../../assets/medal.svg" alt="">
                <p>Experiencia</p>
            </div>
            <p>Como desarrollador frontend junior, he tenido el privilegio de contribuir a proyectos diversos que destacan mi versatilidad y creatividad en el ámbito del desarrollo web. He participado en la creación de una página de citas para moteles y restaurantes llamada DORNE, donde utilicé HTML, CSS y JavaScript para proporcionar una interfaz atractiva y funcional.</p>
            <p>Además, acutalice la pagina web Mdo Arquitectura para una reconocida empresa del sector. En este proyecto, me especialicé en Vue.js para construir una aplicación web eficiente y reactiva que destacó la visión y proyectos arquitectónicos de la empresa.</p>
            <p>
            <p>Como parte de mi crecimiento y práctica, he creado la página de práctica "La Cantina" utilizando Vue.js. Esta experiencia me permitió aplicar y mejorar mis habilidades en el desarrollo frontend, desde la creación de componentes reutilizables hasta la gestión eficaz del estado de la aplicación.</p>
            <p>Estos proyectos reflejan mi capacidad para adaptarme a diferentes contextos y utilizar tecnologías como HTML, CSS, JavaScript y Vue.js para construir experiencias web impactantes. Estoy emocionado por seguir creciendo y enfrentando nuevos desafíos en el fascinante mundo del desarrollo frontend. Cada línea de código es un paso más en mi trayectoria hacia la excelencia en el diseño y la funcionalidad web.</p>
        </div>
    `;

    document.body.appendChild(container);

    const about = document.querySelector(".home__about");
    about.classList.add("active");

    return container;
};

export default HomeAbout;