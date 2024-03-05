const HomeProjects = () => {
    const container = document.createElement('div');
    container.classList.add("home__project")

    container.innerHTML=`
    <p class="home__project__title">Proyectos</p>
    <div class="home__project__list">
        <div class="home__project__list__bar" id="bar1">
            <a href="">Dorne</a>
            <img class="home__project__list__bar__img" src="../../assets/Dorne.PNG" alt="">
        </div>
        <div class="home__project__list__bar" id="bar2">
            <a class="home__project__list__bar__link" href="">La Cantina</a>
            <img class="home__project__list__bar__imgR" src="../../assets/Cantina.PNG" alt="">
        </div>
        <div class="home__project__list__bar" id="bar3">
            <a href="">Mdo Arquitectura</a>
            <img class="home__project__list__bar__img" src="../../assets/mdo.jpg" alt="">
        </div>
    </div>
    `;

    document.body.appendChild(container);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    });

    const bars = document.querySelectorAll(".home__project__list__bar");
    bars.forEach(bar => {
        observer.observe(bar);
    });

    return container;
};


export default HomeProjects;