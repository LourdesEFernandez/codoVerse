let isLike = false; 
const btnHeart = document.querySelector("#heart");
const showInfoMain = document.querySelector("#show-info-main");
const hiddenInfoMain = document.querySelector("#hidden-info-main");
const infoTwo = document.querySelector("#info-2");
const previousCardInfo = document.querySelector("#previous-info-main");
const nextCardInfo = document.querySelector("#next-info-main");
const contCards = document.querySelector("#cont-list-game-main");
let valuePx = 1160;
let codeGame = 0;

// boton like
const favorite = () =>{
    btnHeart.addEventListener("click", ()=>{
        if (isLike == false) {
            document.getElementById("btn-add-fav").style.display = "block";
            isLike = true;
        } else {
            document.getElementById("btn-add-fav").style.display = "none";
            isLike = false;
        }
    });
}
// boton ver mas para dispositicos mobile
const showInfoExtra = () =>{
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
}
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
    {name:"Final Fantasy VII Remake", 
    code:"",
    img:"../assets/images/game_final_fantasy_VII_remake.jpg",description:"Nueva adaptación de la obra maestra del rol japonés. El remake del séptimo capítulo de la saga nos trasladará al mundo de la entrega original de PlayStation y PC, renovando sus gráficos para la consola PlayStation 4, añadiendo nuevos detalles la historia, así como aportando presumibles cambios jugables al sistema de batallas y de exploración. Este nuevo 'Final Fantasy VII' tiene detrás al mismo equipo creativo del original.",
    price:"50,000",
    info:{
        title:"Ficha técnica de la versión PS4",date:"10/4/2020",players:"1",format:"Blu-ray",texts:"Español",voices:"Inglés/Japonés",online:"No",requirements:"-"
    }},
    {name:"Helldivers 2 ", 
    code:"",
    img:"../assets/images/game_helldivers_2.jpg",
    description:"Es un shooter en tercera persona desarrollado por Arrowhead Game Studios y publicado por Sony Interactive Entertainment para PlayStation 5 y PC. El divertido shooter de doble stick Helldivers vuelve con una ambiciosa secuela que se pasa a una perspectiva en tercera persona, para ofrecer una intensa aventura de acción cooperativa en la que combatimos contra cientos de alienígenas. ",
    price:"39,999",
    info:[
        {title:"Ficha técnica de la versión PS5",date:"8/2/2024",players:"1-4",format:"Descarga",texts:"Español",voices:"Español",online:"Si",requirements:"PC, PS5"}
    ]},
    {name:"The Legend of Zelda: Tears of the Kingdom", 
    code:"",
    img:"../assets/images/game_the_legend_of_zelda.jpg",
    description:"Es el nuevo videojuego para Nintendo Switch de la saga de juegos de The Legend of Zelda, secuela directa de Breath of the Wild. Protagonizada por Link, y con una jugabilidad basada en la acción y el rol en mundo abierto, esta aventura nos devuelve a Hyrule con una búsqueda de la Princesa Zelda que cuenta con mecánicas de fusión de objetos y armas más avanzadas, nuevas zonas por explorar en los cielos y mucho más.",
    price:"59,999",
    info:[
        {title:"Ficha técnica de la versión Switch",date:"12/5/2023",players:"1",format:"Tarjeta",texts:"Español",voices:"Español",online:"-",requirements:"-"}
    ]},
    {name:"Grand Theft Auto V", 
    code:"",
    img:"../assets/images/game_grand_theft_auto_v.jpeg",
    description:"Grand Theft Auto V para PS4 y Xbox One es una versión mejorada y ampliada del videojuego de acción en mundo abierto Grand Theft Auto V desarrollado por Rockstar lanzado en 2013. Esta versión del éxito, más ambiciosa técnicamente, presenta gráficos y nuevo contenido como armas, vehículos o misiones, además de una banda sonora ampliada y más jugadores en el modo online. Vuelve a presentarnos la historia de Michael, Franklin y Trevor en la ciudad de Los Santos y sus alrededores, una de las más celebradas de la historia del videojuego. ",
    price:"72,500",
    info:[
        {title:"Ficha técnica de la versión PS4",date:"18/11/2014",players:"1",format:"Blu-ray",texts:"Español",voices:"Inglés",online:"Si",requirements:"PS4"}
    ]},
    {name:"Elden Ring", 
    code:"",
    img:"../assets/images/game_elden_ring.jpg",
    description:"Es el nuevo videojuego de FromSoftware, creadores de Dark Souls, Sekiro o Bloodborne. Se trata del nuevo título de acción y rol para un jugador ideado por Hidetaka Miyazaki, que en esta ocasión, estrenará un mundo abierto más grande y ambicioso. Su argumento y mitología están firmados por George R.R. Martin, autor de Canción de hielo y fuego. ",
    price:"69,999",
    info:[
        {title:"Ficha técnica de la versión PS4",date:"25/2/2022",players:"1",format:"Blu-ray",texts:"Español",voices:"Inglés",online:"Si",requirements:"PS4"}
    ]},
    {name:"Assassin's Creed Valhalla", 
    code:"",
    img:"../assets/images/game_assassin's_creed_valhalla.jpeg",
    description:"Es la nueva entrega de Assassin’s Creed de Ubisoft, la saga de acción y aventuras en mundo abierto más famosa de la desarrolladora de videojuegos. En esta ocasión, y siguiendo con los toques RPG de las últimas entregas, viajaremos al siglo IX después de Cristo, llegando a una Gran Bretaña invadida por vikingos. Está disponible para Xbox One, Xbox Series S/S, PlayStation 4, PlayStation 5 y PC. ",
    price:"59,999",
    info:[
        {title:"Ficha técnica de la versión PC",date:"6/12/2022",players:"1",format:"Descarga",texts:"Español",voices:"Español",online:"-",requirements:"PC"}
    ]},
]

const createListGames = () =>{}


// llamadas
favorite();
showInfoExtra();
switchCard();