const 
    d = document,
    w = window,
    get = (element, array) => array ? d.querySelectorAll(element) : d.querySelector(element),
    set = (element, parent) => parent ? parent.appendChild(element) : d.createElement(element),
    del = (element, text) => text ? element.innerHTML = "" : d.removeChild(element)

// botones para cambiar de card
function switchCard(container,btnPrev, btnNext, value, mobile) {
    if (w.matchMedia("(max-width:425px)").matches & mobile == true){
        
        container.addEventListener("touchmove", e => {
            this.scrollLeft += 0 - e.clientX;
        })

    } else {
        btnPrev.addEventListener("click", () => {
            container.scrollLeft -= value;
        });
    
        btnNext.addEventListener("click", () => {
            container.scrollLeft += value;
        });
    }
}

