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
console.log('record', record)
}
fetchData();