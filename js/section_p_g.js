// propiedad scrollLeft, mueve a la derecha usando += cantidad de px y a la izquierda -= y la cantidad de px
const nextBtn = (id,idList)=>{
    let next = document.querySelector(id);
    let list = document.querySelector(idList);
    next.addEventListener("click", () => {
        list.scrollLeft += 350;
    }); 
}

const previousBtn = (id,idList)=>{
    let prev = document.querySelector(id);
    let list = document.querySelector(idList);
    prev.addEventListener("click", () => {
        list.scrollLeft -= 350;
    }); 
}

// lista de plataformas
const platforms = [
    {title: "Xbox One", img:"assets/images/platform_xbox_one.jpeg"},
    {title: "PC", img:"assets/images/platform_pc.jpg"},
    {title: "Ps4", img:"assets/images/platform_ps4.jpg"},
    {title: "Ps5", img:"assets/images/platform_ps5.jpeg"},
    {title: "Linux", img:"assets/images/platform_linux.jpeg"},
    {title: "Mac", img:"assets/images/platform_mac.jpeg"},
    {title: "Switch", img:"assets/images/platform_switch.jpeg"},
    {title: "GeForce Now", img:"assets/images/platform_geforce_now.jpeg"}
]

// lista de generos
const genders = [
    {title: "Acción", img:"assets/images/genre_accion.jpg"},
    {title: "Arcade", img:"assets/images/genre_arcade.jpg"},
    {title: "Carreras", img:"assets/images/genre_carreras.jpg"},
    {title: "Simulación", img:"assets/images/genre_simulacion.jpg"},
    {title: "Aventura", img:"assets/images/genre_aventura.jpg"},
    {title: "Lucha", img:"assets/images/genre_lucha.jpg"},
    {title: "Wargame", img:"assets/images/genre_wargame.jpg"},
    {title: "Estrategia", img:"assets/images/genre_estrategia.jpg"},
    {title: "Terror", img:"assets/images/genre_terror.jpg"},
]

// creacion de items de forma dinamica

function createLi(id,listItems) {
    const idR = document.querySelector(id);
    idR.innerHTML = "";

    for (item of listItems){
        idR.innerHTML += ` <li class="item-p-g">
        <a href="pages/list_games.html">
            <img class="img-p-g" src="${item.img}" alt="${item.title}">
            <p class="name-p-g">${item.title}</p>
        </a>
    </li> `;
    }
}

// llamadas
nextBtn("#next-p","#list-p");
previousBtn("#previous-p","#list-p");

nextBtn("#next-g","#list-g");
previousBtn("#previous-g","#list-g");

createLi("#list-p",platforms);
createLi("#list-g",genders);