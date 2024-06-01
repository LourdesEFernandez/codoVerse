const
    previousCardInfo = get("#previous-info-main"),
    nextCardInfo = get("#next-info-main"),
    btnPrevGame = get("#prev-game"),
    btnNextGame = get("#next-game"),
    contCards = get("#cont-list-game-main"),
    contGames = get("#game-list"),
    valuePx = w.innerWidth,
    contListGames = get("#cont-list-game-main"),
    urlnew = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=mmorpg&sort-by=release-date',
    optionsnew = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1328792987msh8ee371798855733p111214jsn3729fe47c260',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }

d.addEventListener("DOMContentLoaded", function(){
    // mi contenedor de juego tiene tres partes, imagen y precio, informacion del juego y botones favorito, agregar a carrito y comprar. Crear cada parte por separado y luego insertar todo en un solo contenedor.
    const createListGames = (list) => {
        contListGames.innerHTML = ""
        contGames.innerHTML = ""
        const min = 30
        const max = 90
        const sub = "Ficha técnica para "
        
        list.forEach((item) => {
            let price_random = Math.random()*(max - min)+min
            let price = price_random.toFixed(3)
            contListGames.innerHTML += `<li>
            <div id="${item.id}" class="container-info-main">
            <div class="container-img-game">
                <img class="img-card-main" src=${item.thumbnail} alt="${item.title}">
                <div id="tag-price" class="c-button">$ ${price}</div>
            </div>

            <div class="info-i-m">
                <header id="title-item-i-m">${item.title}</header>
                <div id="info-1">
                        <p id="info-item-i-m">${item.short_description}</p>
                        <button id="" class="btn-info show-info-main">... Ver más</button>
                        <div class="info-2">
                            <p id="subtitle-i-m">${sub}${item.platform}</p>
                            <ul id="data-sheet-i-m">
                            <li>Fecha de lanzamiento: ${item.release_date}</li>
                            <li>Género: ${item.genre}</li>
                            <li>Desarrollador: ${item.developer}</li>
                            <li>Requisitos: ${item.platform}</li>
                            </ul>
                            <button id="" class="btn-info hidden-info-main" type="button">Ver menos</button>
                        </div>
                </div>
            </div>

            <button class="btn-heart" >
                <i  id="btn-fav" class="fa-regular fa-heart"></i>
                <i id="add-fav-${item.id}" class="fa-solid fa-heart"></i>
            </button>

            <div id="buttons-i-m">
                <div id="b-buy" class="c-button">Comprar ahora</div>
                <div id="b-add-cart" class="c-button">
                <i class="fa-solid fa-plus"></i>
                    Agregar al carrito
                </div>
            </div>
            </div> `;

            const contGame = document.getElementById(`${item.id}`);
            contGame.style.setProperty("--bg-pseudo", `url(${item.thumbnail})`);
            get(`#add-fav-${item.id}`).style.display = "none";

            contGames.innerHTML += `
            <div class="contenedor-juego">
                <img class="img-juego-tarjeta" src=${item.thumbnail} alt=${item.title}>
                <h2>${item.title}</h2>
                <div class="contenedor-corazon">
                    <p>$${price}</p>
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>`
        })
    }
    // boton like
    const favorite = () =>{
        let isFavorite = false;
        const btnsHeart = get("button.btn-heart",1);
        btnsHeart.forEach((button) => {
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
            })
    }

    // boton ver mas para dispositivos moviles
    function showInfoExtra() {
        const gamesInfo = get(".info-i-m",1);
        gamesInfo.forEach((info) => {
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
        })
    }

    // llamadas
    switchCard(contCards,previousCardInfo,nextCardInfo,valuePx,1);
    switchCard(contGames,btnPrevGame,btnNextGame,valuePx,1)
    // createListGames();

    async function apirun() {
        try {
            const response = await fetch(urlnew, optionsnew);
            const result = await response.json();
            createListGames(result)
            favorite();
            showInfoExtra();
        } catch (error) {
            console.error(error);
        }
    }

    apirun()
})