const HomeExp = () => {
    const container = document.createElement('div');
    container.classList.add("home__exp")

    container.innerHTML=`
    <p id="exp" class="home__exp__title">Experiencia</p>
    <div class="home__expContainer">
        <ul class="home__exp__list">
            <p class="home__exp__p">Skills</p>
            <li class="home__exp__list__item">
                <img src="../../assets/html.svg" alt="">
            </li>
            <li class="home__exp__list__item">
                <img src="../../assets/css.svg" alt="">
            </li>
            <li class="home__exp__list__item">
                <img src="../../assets/js.svg" alt="">
            </li>
            <li class="home__exp__list__item">
                <img src="../../assets/vue.svg" alt="">
            </li>
        </ul>
        <div class="home__exp__text">
            <div class="home__exp__text__paragraph">
                <h2>HTML</h2>
                <p>Con mis habilidades en HTML5, construyo la estructura de las páginas web utilizando elementos semánticos, asegurando un diseño visualmente atractivo y cumpliendo con los estándares web y pautas de accesibilidad. Mi atención al detalle se evidencia en la optimización del código para garantizar un rendimiento óptimo y una experiencia de usuario fluida. Además, poseo conocimientos sólidos en:</p>
                <li>Implementación de formularios HTML para recopilar datos de manera eficiente.</li>
                <li>Uso de etiquetas específicas como nav, header, footer, y otras para mejorar la semántica y la estructura.</li>
                <li>Integración de multimedia, como imágenes y videos, para enriquecer la experiencia del usuario.</li>
                <li>Conocimiento de las mejores prácticas de SEO al utilizar etiquetas apropiadas y atributos.</li>
                <li>Colaboración efectiva con otros desarrolladores y diseñadores para lograr objetivos comunes en proyectos web.</li>
                <li>Mantenimiento y actualización constante de mis habilidades para estar al tanto de las últimas tendencias y tecnologías en el desarrollo frontend."</li>
            </div>
            <div class="home__exp__text__paragraph">
                <h2>CSS</h2>
                <p>Con mis habilidades en CSS3, desarrollo estilos y diseños que realzan la estructura HTML, creando una experiencia visualmente impactante. Utilizo selectores y propiedades CSS de manera eficiente para lograr un diseño responsivo y atractivo en diversos dispositivos. Además, poseo conocimientos específicos en:</p>
                <li>Creación de diseños flexibles y adaptables mediante técnicas de diseño responsivo y media queries.</li>
                <li>Dominio de flexbox y grid para organizar y posicionar elementos de manera eficiente.</li>
                <li>Implementación de animaciones y transiciones para mejorar la interactividad y dinamismo de la interfaz.</li>
                <li>Personalización de estilos para formularios, botones y otros elementos de formulario.</li>
                <li>Uso de preprocesadores como Sass para mejorar la modularidad y mantenibilidad del código CSS.</li>
                <li>Colaboración estrecha con diseñadores para traducir conceptos visuales en implementaciones precisas.</li>
                <li>Optimización del rendimiento mediante la concatenación y minificación de archivos CSS.</li>
                <li>Integración de prácticas de diseño accesible para garantizar una experiencia inclusiva para todos los usuarios.</li>
                <li>Mantenimiento constante de mi conocimiento en las últimas tendencias y técnicas en diseño web.</li>
            </div>
            <div class="home__exp__text__paragraph">
                <h2>JS</h2>
                <p>Con mis habilidades en JavaScript, colaboro estrechamente con diseñadores y otros desarrolladores para transformar ideas y conceptos en funcionalidades dinámicas y atractivas. Implemento interactividad en las páginas web utilizando eventos, manipulación del DOM y llamadas a API para enriquecer la experiencia del usuario. Además, poseo conocimientos específicos en:</p>
                <li>Utilización de peticiones AJAX para realizar llamadas asíncronas a servidores y actualizar dinámicamente el contenido de las páginas.</li>
                <li>Integración de API externas para acceder y mostrar datos en tiempo real, proporcionando funcionalidades más robustas.</li>
                <li>Manejo de Promesas y el patrón de diseño Observador para gestionar operaciones asíncronas de manera eficiente.</li>
                <li>Desarrollo de funciones reutilizables y modularización del código para mejorar la mantenibilidad y escalabilidad.</li>
                <li>Implementación de técnicas de manejo de errores para garantizar una experiencia de usuario fluida.</li>
                <li>Colaboración en la creación de interfaces de usuario interactivas y amigables.</li>
                <li>Adopción de buenas prácticas de seguridad para prevenir vulnerabilidades comunes en el desarrollo JavaScript.</li>
                <li>Mantenimiento constante de mi conocimiento en las últimas tecnologías y tendencias en el desarrollo frontend.</li>
            </div>
            <div class="home__exp__text__paragraph">
                <h2>VUE</h2>
                <p>Con mis habilidades en Vue.js, especializo el desarrollo de componentes reutilizables que simplifican la construcción de interfaces coherentes y fácilmente mantenibles. Haciendo uso de las características fundamentales de Vue, como las directivas, la gestión del estado y las transiciones, mejoro la interactividad y la experiencia del usuario en cada proyecto. Además, poseo conocimientos específicos en:</p>
                <li>Diseño y desarrollo de aplicaciones web escalables utilizando Vue.js como marco principal.</li>
                <li>Integración de Vue Router para gestionar la navegación y las transiciones entre vistas de manera fluida.</li>
                <li>Implementación de directivas personalizadas para manipular el DOM de manera dinámica y reactiva.</li>
                <li>Creación de animaciones y transiciones utilizando las capacidades de animación de Vue.</li>
                <li>Desarrollo de lógica de componentes y manejo de eventos para mejorar la interactividad.</li>
                <li>Conexión con API mediante llamadas asíncronas para obtener y enviar datos de manera eficiente.</li>
                <li>Mantenimiento constante de mi conocimiento en las últimas actualizaciones y prácticas recomendadas en Vue.js</li>
            </div>
        </div>
    </div>
    `;
    
    document.body.appendChild(container);

    const exp = document.querySelector(".home__exp__text");
    const list = document.querySelector(".home__exp__list");

    const observerExp = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                exp.classList.add("active");
            } else {
                exp.classList.remove("active");
            }
        });
    });

    observerExp.observe(exp);

    const observerList = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                list.classList.add("active");
            } else {
                list.classList.remove("active");
            }
        });
    });

    observerList.observe(list);

    return container;
};


export default HomeExp;