const previousCardInfo = document.querySelector("#previous-info-main");
const nextCardInfo = document.querySelector("#next-info-main");
const contCards = document.querySelector("#cont-list-game-main");
let valuePx = window.innerWidth;

// boton like
// const favorite = () =>{
//     btnHeart.addEventListener("click", () =>{
//         if (isLike == false) {
//             document.querySelector("#btn-add-fav").style.display = "block";
//             isLike = true;
//         } else {
//             document.querySelector("#btn-add-fav").style.display = "none";
//             isLike = false;
//         }
//     });
// }

// botones para cambiar de card
const switchCard = () =>{
    previousCardInfo.addEventListener("click", () => {
        contCards.scrollLeft -= valuePx;
    });

    nextCardInfo.addEventListener("click", () => {
        contCards.scrollLeft += valuePx;
    });
}

// lista de juegos 
// atributos de un juego nombre, info principal, info complementaria, id, imagen,precio,descuento,stock,genero,tipo de plataforma
const listGames = [
    {name:"Resident Evil 3 Remake", 
    code: "game",
    img:"assets/images/game_resident_evil_3.jpeg",
    description:"Resident Evil 3 Remake es la reinterpretación del clásico de Capcom, Resident Evil 3: Nemesis, la tercera parte de la trilogía original de survival horror. Siguiendo con las pasos de la segunda parte, y con un aspecto jugable y gráfico renovado en base a las actuales plataformas, nos contará la historia de Jill Valentine y su huida de la ciudad de Raccoon City infestada por el virus T. Incluirá el modo multijugador Resident Evil Resistance. ",
    price:"59,999",
    infoTitle:"Ficha técnica de la versión PS4",
    date:"3/4/2020",
    players:"1",
    format:"Blu-ray",
    texts:"Español",
    voices:"Español",
    online:"Si",
    requirements:"PC"
    },
    {name:"Red Dead Redemption 2", 
    code: "game",
    img:"assets/images/game_red_dead_redemption_2.jpeg",
    description:"Red Dead Redemption 2 es la secuela del videojuego de éxito de Rockstar Red Dead Redemption (2010), considerado como uno de los mejores títulos de la compañía. Se trata de la tercera entrega de la saga Red Dead, iniciada en 2004 con Red Dead Revolver y nos trasladará de nuevo al Salvaje Oeste para ponernos en el escenario de mundo abierto más grande jamás creado por los padres de Grand Theft Auto y contarnos una historia sobre forajidos, venganza y atracos en un escenario de gran realismo en PlayStation 4 y Xbox One. ",
    price:"69,999",
    infoTitle:"Ficha técnica de la versión PS4",
    date:"26/10/2018",
    players:"1",
    format:"Blu-ray",
    texts:"Español",
    voices:"Inglés",
    online:"Si",
    requirements:"PC"
    },
    
    {name:"Final Fantasy VII Remake", 
    code: "game",
    img:"assets/images/game_final_fantasy_VII_remake.jpg",description:"Nueva adaptación de la obra maestra del rol japonés. El remake del séptimo capítulo de la saga nos trasladará al mundo de la entrega original de PlayStation y PC, renovando sus gráficos para la consola PlayStation 4, añadiendo nuevos detalles la historia, así como aportando presumibles cambios jugables al sistema de batallas y de exploración. Este nuevo 'Final Fantasy VII' tiene detrás al mismo equipo creativo del original.",
    price:"50,000",
    infoTitle:"Ficha técnica de la versión PS4",
    date:"10/4/2020",
    players:"1",
    format:"Blu-ray",
    texts:"Español",
    voices:"Inglés/Japonés",
    online:"No",
    requirements:"-"
    },

    {name:"Helldivers 2 ", 
    code:"game",
    img:"assets/images/game_helldivers_2.jpg",
    description:"Es un shooter en tercera persona desarrollado por Arrowhead Game Studios y publicado por Sony Interactive Entertainment para PlayStation 5 y PC. El divertido shooter de doble stick Helldivers vuelve con una ambiciosa secuela que se pasa a una perspectiva en tercera persona, para ofrecer una intensa aventura de acción cooperativa en la que combatimos contra cientos de alienígenas. ",
    price:"39,999",
    infoTitle:"Ficha técnica de la versión PS5",
    date:"8/2/2024",
    players:"1-4",
    format:"Descarga",
    texts:"Español",
    voices:"Español",
    online:"Si",
    requirements:"PC, PS5"},

    {name:"The Legend of Zelda: Tears of the Kingdom", 
    code:"game",
    img:"assets/images/game_the_legend_of_zelda.jpg",
    description:"Es el nuevo videojuego para Nintendo Switch de la saga de juegos de The Legend of Zelda, secuela directa de Breath of the Wild. Protagonizada por Link, y con una jugabilidad basada en la acción y el rol en mundo abierto, esta aventura nos devuelve a Hyrule con una búsqueda de la Princesa Zelda que cuenta con mecánicas de fusión de objetos y armas más avanzadas, nuevas zonas por explorar en los cielos y mucho más.",
    price:"59,999",
    infoTitle:"Ficha técnica de la versión Switch",
    date:"12/5/2023",
    players:"1",
    format:"Tarjeta",
    texts:"Español",
    voices:"Español",
    online:"-",
    requirements:"-"},

    {name:"Elden Ring", 
    code:"game",
    img:"assets/images/game_elden_ring.jpg",
    description:"Es el nuevo videojuego de FromSoftware, creadores de Dark Souls, Sekiro o Bloodborne. Se trata del nuevo título de acción y rol para un jugador ideado por Hidetaka Miyazaki, que en esta ocasión, estrenará un mundo abierto más grande y ambicioso. Su argumento y mitología están firmados por George R.R. Martin, autor de Canción de hielo y fuego. ",
    price:"69,999",
    infoTitle:"Ficha técnica de la versión PS4",date:"25/2/2022",players:"1",format:"Blu-ray",texts:"Español",voices:"Inglés",online:"Si",requirements:"PS4"},

    {name:"Assassin's Creed Valhalla", 
    code: "game",
    img:"assets/images/game_assassin's_creed_valhalla.jpeg",
    description:"Es la nueva entrega de Assassin’s Creed de Ubisoft, la saga de acción y aventuras en mundo abierto más famosa de la desarrolladora de videojuegos. En esta ocasión, y siguiendo con los toques RPG de las últimas entregas, viajaremos al siglo IX después de Cristo, llegando a una Gran Bretaña invadida por vikingos. Está disponible para Xbox One, Xbox Series S/S, PlayStation 4, PlayStation 5 y PC. ",
    price:"59,999",
    infoTitle:"Ficha técnica de la versión PC",date:"6/12/2022",players:"1",format:"Descarga",texts:"Español",voices:"Español",online:"-",requirements:"PC"},

    {name:"Resident Evil 2 Remake ", 
    code:"game",
    img:"assets/images/game_resident_evil_2.jpeg",
    description:"Es la puesta al día del clásico original del género survival horror para Xbox One, PlayStation 4 y PC, que coincide con el vigésimo aniversario de la saga Resident Evil. Supone un cambio de perspectiva jugable, de estilo de juego y de ambientación, un concepto muy ambicioso desde el plano técnico y artístico pero que mantendrá la esencia del emblemático videojuego que marcó un antes y un después. ",
    price:"59,999",
    infoTitle:"Ficha técnica de la versión PC",
    date:"25/1/2019",
    players:"1",
    format:"DVD",
    texts:"Español",
    voices:"Español",
    online:"-",
    requirements:"PC"}
]

// mi contenedor de juego tiene tres partes, imagen y precio, informacion del juego y botones favorito, agregar a carrito y comprar. Crear cada parte por separado y luego insertar todo en un solo contenedor.

const createListGames = () => {
    const contListGames = document.querySelector("#cont-list-game-main");
    contListGames.innerHTML = "";
    let codeGame = 0;

    for (game of listGames){

        game.code += codeGame;

        contListGames.innerHTML += `<li>
        <div id="${game.code}" class="container-info-main">
        <div id="container-img-game">
            <img class="img-card-main" src="${game.img}" alt="${game.name}">
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
        contGame.style.setProperty("--bg-pseudo", `url(${game.img})`);

        const fav = document.querySelector(`#add-fav-${game.code}`).style.display = "none";

        codeGame++;
    }
} 




// llamadas
switchCard();
createListGames();

let isFavorite = false;
const btnsHeart = document.querySelectorAll("button.btn-heart");

const favorite = () =>{
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

favorite();

// const btnHeart = document.querySelector(".heart");
// favorite();


// boton ver mas para dispositicos mobile
const gamesInfo = document.getElementsByClassName("info-i-m");
console.log(gamesInfo);

const showInfoExtra = () =>{
    for (info of gamesInfo){

        const showInfoMain = info.querySelector(".show-info-main");
        const hiddenInfoMain = info.querySelector(".hidden-info-main");
        const infoTwo = info.querySelector(".info-2");

        if (window.matchMedia("(max-width: 425px)").matches) {
            infoTwo.style.setProperty("display", "none");
            showInfoMain.style.setProperty("display", "flex");
        } else {
            infoTwo.style.setProperty("display", "block");
        }
    
        showInfoMain.addEventListener("click", () => {
            infoTwo.style.setProperty("display", "block");
            hiddenInfoMain.style.setProperty("display", "flex");
            showInfoMain.style.setProperty("display", "none");
        });
        
        hiddenInfoMain.addEventListener("click", () => {
            infoTwo.style.setProperty("display", "none");
            showInfoMain.style.setProperty("display", "flex");
        });
    }
}
showInfoExtra();
