const likeBtn = document.querySelector(".heart");
let heart = document.querySelector("#icon-heart");

let clicked = false;

likeBtn.addEventListener("click", () => {
    if (!clicked){
        heart.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        clicked = true;
    } else{
        heart.innerHTML = `<i class="fa-regular fa-heart"></i>`;
        clicked = false;
    }
});

