const Loader = () => {
    const container = document.createElement('div');
    
    container.classList.add("container")
    container.innerHTML = ` 
        <div class="loader">
        
        </div>
    `;

    setTimeout(() => {
        const loader = document.querySelector(".container");

        if (loader) {
            loader.classList.add("off");
        }
    }, 1000);

    return container;
};

export default Loader;