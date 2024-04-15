let isLike = false; 
let showInfoMain = document.querySelector("#show-info-main");
let hiddenInfoMain = document.querySelector("#hidden-info-main");
let infoTwo = document.querySelector("#info-2");

function like() {
    if (isLike == false) {
        document.getElementById("btn-add-fav").style.display = "block";
        isLike = true;
    } else {
        document.getElementById("btn-add-fav").style.display = "none";
        isLike = false;
    }
}

if (window.matchMedia("(max-width: 425px)").matches) {
    infoTwo.style.display = "none";
    showInfoMain.style.display = "flex";
} else {
    infoTwo.style.display = "block";
}

showInfoMain.addEventListener("click", () => {
    infoTwo.style.display = "block";
    hiddenInfoMain.style.display = "flex";
    showInfoMain.style.display = "none";
});

hiddenInfoMain.addEventListener("click", () => {
    infoTwo.style.display = "none";
    showInfoMain.style.display = "flex";
})