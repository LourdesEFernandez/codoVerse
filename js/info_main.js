const 
    previousCardInfo = get("#previous-info-main"),
    nextCardInfo = get("#next-info-main"),
    contCards = get("#cont-list-game-main"),
    valuePx = w.innerWidth,
    contListGames = get("#cont-list-game-main")

d.addEventListener("DOMContentLoaded", function(){

    // mi contenedor de juego tiene tres partes, imagen y precio, informacion del juego y botones favorito, agregar a carrito y comprar. Crear cada parte por separado y luego insertar todo en un solo contenedor.
    const createListGames = () => {
        contListGames.innerHTML = "";
        let codeGame = 0;

        for (game of listGames){

            game.code += codeGame;

            contListGames.innerHTML += `<li>
            <div id="${game.code}" class="container-info-main">
            <div id="container-img-game">
                <img class="img-card-main" src=${game.img} alt="${game.name}">
                <div id="tag-price" class="c-button">$ ${game.price}</div>
            </div>

            <div class="info-i-m">
                <header id="title-game-i-m">${game.name}</header>
                <div id="info-1">
                        <p id="info-game-i-m">${game.description}</p>
                        <button id="" class="btn-info show-info-main">... Ver más</button>
                        <div class="info-2">
                            <p id="subtitle-i-m">${game.infoTitle}</p>
                            <ul id="data-sheet-i-m">
                            <li>Fecha de lanzamiento: ${game.date}</li>
                            <li>Jugadores: ${game.players}</li>
                            <li>Formato: ${game.format}</li>
                            <li>Textos: ${game.texts}</li>
                            <li>Voces: ${game.voices}</li>
                            <li>Online: ${game.online}</li>
                            <li>Requisitos: ${game.requirements}</li>
                            </ul>
                            <button id="" class="btn-info hidden-info-main" type="button">Ver menos</button>
                        </div>
                </div>
            </div>

            <button class="btn-heart" > 
                <i  id="btn-fav" class="fa-regular fa-heart"></i>
                <i id="add-fav-${game.code}" class="fa-solid fa-heart"></i>
            </button>

            <div id="buttons-i-m">
                <div id="b-buy" class="c-button">Comprar ahora</div>
                <div id="b-add-cart" class="c-button">
                <i class="fa-solid fa-plus"></i>
                    Agregar al carrito
                </div>
            </div>
            </div> `;

            const contGame = document.getElementById(`${game.code}`);
            contGame.style.setProperty("--bg-pseudo", `url(../${game.img})`);

            get(`#add-fav-${game.code}`).style.display = "none";

            codeGame++;
        }
    }
    // boton like
    const favorite = () =>{
        let isFavorite = false;
        const btnsHeart = get("button.btn-heart",1);
        for (button of btnsHeart){
            const id = button.querySelector("button.btn-heart > .fa-solid");
            button.addEventListener("click", ()=>{
                if(isFavorite == false){
                    id.style.setProperty("display", "block");
                    isFavorite = true;
                } else{
                    id.style.setProperty("display", "none");
                    isFavorite = false;
                }
                });
            }
    }

    // boton ver mas para dispositivos moviles
    function showInfoExtra() {
        const gamesInfo = get(".info-i-m",1);
        for (info of gamesInfo){
            const 
                showInfoMain = info.querySelector(".show-info-main"),
                hiddenInfoMain = info.querySelector(".hidden-info-main"),
                infoTwo = info.querySelector(".info-2"),
                d = "display",
                n = "none",
                b = "block",
                f = "flex"

            if (w.matchMedia("(max-width: 425px)").matches) {
                infoTwo.style.setProperty(d, n);
                showInfoMain.style.setProperty(d, f);

                showInfoMain.addEventListener("click", () => {
                    infoTwo.style.setProperty(d, b);
                    hiddenInfoMain.style.setProperty(d, f);
                    showInfoMain.style.setProperty(d, n);
                });
                
                hiddenInfoMain.addEventListener("click", () => {
                    infoTwo.style.setProperty(d, n);
                    showInfoMain.style.setProperty(d, f);
                });

            } else {
                infoTwo.style.setProperty(d, b);
            }
        
        }
    }

    // llamadas
    switchCard(contCards,previousCardInfo,nextCardInfo,valuePx,1);
    createListGames();
    favorite();
    showInfoExtra();
}) 