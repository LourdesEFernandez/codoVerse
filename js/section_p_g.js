// archivo para mover items
const nextBtnP = document.querySelector("#next-p");
const previousBtnP = document.querySelector("#previous-p");

const contentList = document.querySelector("#list-p");

const nextBtnG = document.querySelector("#next-g");
const previousBtnG = document.querySelector("#previous-g");

const contentListg = document.querySelector("#list-g");


// propiedad scrollLeft, mueve a la derecha usando += cantidad de px y a la izquierda -= y la cantidad de px

nextBtnP.addEventListener("click", () => {
    contentList.scrollLeft += 350;
}); 

previousBtnP.addEventListener("click", () => {
    contentList.scrollLeft -= 350;
}); 

nextBtnG.addEventListener("click", () => {
    contentListg.scrollLeft += 350;
}); 

previousBtnG.addEventListener("click", () => {
    contentListg.scrollLeft -= 350;
}); 

// lista de plataformas
const platforms = [
    {title: "Xbox One", img:"../assets/images/platform_xbox_one.jpeg"},
    {title: "PC", img:"../assets/images/platform_pc.jpg"},
    {title: "Ps4", img:"../assets/images/platform_ps4.jpg"},
    {title: "Ps5", img:"../assets/images/platform_ps5.jpeg"},
    {title: "Linux", img:"../assets/images/platform_linux.jpeg"},
    {title: "Mac", img:"../assets/images/platform_mac.jpeg"},
    {title: "Switch", img:"../assets/images/platform_switch.jpeg"},
    {title: "GeForce Now", img:"../assets/images/platform_geforce_now.jpeg"}
]

// lista de generos
const genders = [
    {title: "Acción", img:"../assets/images/platform_xbox_one.jpeg"},
    {title: "Arcade", img:"../assets/images/platform_xbox_one.jpeg"},
    {title: "Carreras", img:"../assets/images/platform_xbox_one.jpeg"},
    {title: "Simulación", img:"../assets/images/platform_xbox_one.jpeg"},
    {title: "Aventura", img:"../assets/images/platform_xbox_one.jpeg"},
    {title: "VR", img:"../assets/images/platform_xbox_one.jpeg"},
    {title: "Lucha", img:"../assets/images/platform_xbox_one.jpeg"},
    {title: "Wargame", img:"../assets/images/platform_xbox_one.jpeg"},
]

// creacion de items de forma dinamica

function createLi(id,listItems) {
    const idR = document.querySelector(id);
    idR.innerHTML = "";

    for (item of listItems){
        idR.innerHTML += ` <li class="item-p-g">
        <a href="pages/list_games.html">
            <img class="img-p-g" src=${item.img} alt=${item.title}>
            <p class="name-p-g">${item.title}</p>
        </a>
    </li> `;
    }
}

createLi("#list-p",platforms);
createLi("#list-g",genders);