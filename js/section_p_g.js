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
    {title: "Xbox One", img:""},
    {title: "PC", img:""},
    {title: "Ps4", img:""},
    {title: "Ps5", img:""},
    {title: "Linux", img:""},
    {title: "Mac", img:""},
    {title: "Switch", img:""},
    {title: "GeForce Now", img:""}
]

// lista de generos
const genders = [
    "Acción","Arcade","Carreras","Simulación","Terror","Aventura","VR","Lucha","Wargame"
]

// creacion de items de forma dinamica
