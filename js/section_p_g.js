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

// mostrar lista

const itemSection = document.querySelector("#show-list");
const listGame = document.querySelector("#list-game");

const show = () => listGame.style.display = "flex";

itemSection.addEventListener("click", show);

// itemSection.removeEventListener("click", show);
