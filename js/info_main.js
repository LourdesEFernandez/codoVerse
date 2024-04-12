let isLike = false; 

function like() {
    if (isLike == false) {
        document.getElementById("btn-add-fav").style.display = "block";
        isLike = true;
    } else {
        document.getElementById("btn-add-fav").style.display = "none";
        isLike = false;
    }
}