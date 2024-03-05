const HomeProfile = () => {
    const container = document.createElement('div');
    container.classList.add("home__profile")

    container.innerHTML = `
        <div class="home__profile__info">
            <img class="photo" src="/assets/profile.jpg" alt="ProfilePicture" id="photo">
            <div class="home__profile__info__container">
                <div class="home__profile__info__container__name">
                    <h2>James Calleros</h2>
                    <h3>Frontend Developer JR</h3>
                </div>
                <div class="home__profile__info__container__links">
                    <div class="home__profile__info__container__btn">
                        <button>Download CV</button>
                        <a href="#/contact"><button>Contact Info</button></a>
                    </div>
                    <div class="home__profile__info__container__page">
                        <a href="https://www.linkedin.com/in/james-santiago-calleros-palacios-a21444258/">
                            <img src="../../assets/linkedin.svg" alt="LinkedIn">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(container);
    setTimeout(() => {
        const photo = document.querySelector("#photo");
        photo.classList.add("active");
    }, 1000);
        

    return container;
};

export default HomeProfile;