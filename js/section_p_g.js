const 
    prevP = get("#previous-p"),
    nextP = get("#next-p"),
    contP = get("#list-p"),
    prevG = get("#previous-g"),
    nextG = get("#next-g"),
    contG = get("#list-g"),
    value = 400

// creacion de items de forma dinamica
function createLi(container,listItems) {
    container.innerHTML = "";

    for (item of listItems){
        container.innerHTML += ` <li class="item-p-g">
        <a href="pages/list_games.html">
            <img class="img-p-g" src="${item.img}" alt="${item.title}">
            <p class="name-p-g">${item.title}</p>
        </a>
    </li> `;
    }
}

switchCard(contP,prevP,nextP,value);
switchCard(contG,prevG,nextG,value);
createLi(contP,platforms);
createLi(contG,genders);