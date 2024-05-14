const 
    d = document,
    w = window,
    get = (element, array) => array ? d.querySelectorAll(element) : d.querySelector(element),
    set = (element, parent) => parent ? parent.appendChild(element) : d.createElement(element),
    del = (element, text) => text ? element.innerHTML = "" : d.removeChild(element)

// botones para cambiar de card
function switchCard(container,btnPrev, btnNext, value) {
    btnPrev.addEventListener("click", () => {
        container.scrollLeft -= value;
    });

    btnNext.addEventListener("click", () => {
        container.scrollLeft += value;
    });
}