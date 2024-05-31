const
    prevP = get("#previous-p"),
    nextP = get("#next-p"),
    contP = get("#list-p"),
    prevG = get("#previous-g"),
    nextG = get("#next-g"),
    contG = get("#list-g"),
    value = 500,
    url = 'https://opencritic-api.p.rapidapi.com',
    options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1328792987msh8ee371798855733p111214jsn3729fe47c260',
            'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
        }
    };

switchCard(contP,prevP,nextP,value);
switchCard(contG,prevG,nextG,value);

try {
	const responseGenre = await fetch(`${url}/genre`, options);
	const resultGenre = await responseGenre.json();
    resultGenre.forEach((item) => {
        contG.innerHTML += ` <div class="item-p-g">
            <a href="pages/list_games.html">
                <p class="name-p-g">${item.name}</p>
            </a>
        </div> `
    })

    const responsePlatform = await fetch(`${url}/platform`, options)
    const resultPlatform = await responsePlatform.json();
    resultPlatform.forEach((item) => {
        contP.innerHTML += ` <div class="item-p-g">
            <a href="pages/list_games.html">
                <p class="name-p-g">${item.name}</p>
            </a>
        </div> `
    })

	console.log(resultGenre,responsePlatform);
} catch (error) {
	console.error(error);
}

// const urlnew = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
// const optionsnew = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1328792987msh8ee371798855733p111214jsn3729fe47c260',
// 		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(urlnew, optionsnew);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }