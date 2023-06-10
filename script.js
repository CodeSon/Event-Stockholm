async function fetchData(){
const options = {
	method: 'GET',
	headers: {
		    'X-RapidAPI-Key': '222be69a2dmsh91fb2f4cb92d279p1f655bjsna53cc537594d',
		    'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
	}
};

const response = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/venue/past?name=Hollywood%20bowl&minDate=2022-01-25&maxDate=2023-01-30&page=1',options);
const record = await response.json()
document.getElementById("Events").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');

}
fetchData();


/**
 * Upcoming Events in Stockholm
Dynamic chart 2022
IShowSpeed
The Smashing Pumpkins
Adassa
Adassa
Zac Brown Band
The Who
Danny Elfman
Danny Elfman
AUDACY'S 9th Annual WE CAN SURVIVE 2022
Florence + The Machine
Florence + The Machine
Maren Morris
RÜFÜS DU SOL
New Order
New Order
Yeah Yeah Yeahs
Wu-Tang Clan
Stevie Nicks
Jack Johnson
 */