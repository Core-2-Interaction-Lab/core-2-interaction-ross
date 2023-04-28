// GETTING STARTED WITH THE GOOGLE MAPS JAVASCRIPT API

// SETUP
// 1. Go to console.cloud.google.com
// 2. Create a 'new project'
// 3. You can leave "organization" and "location" blank
// 4. Google will start creating the project for you (will take a moment)
// 5. Select the project
// 6. Open up the navigation and click on "APIs & Services > Library"
// 7. Click on Maps JavaScript API > Enable
// 8. Agree to terms and services
// 9. Save your API key in your scripts.js file. If you don't see it, go to "APIs & Services > Credentials > Create Credentials > API Key"
// 10. If you are prompted to "restrict the API key", ignore it

// LOAD THE MAP
// 1. new google.maps.Map
// 2. to set your own style, go to https://mapstyle.withgoogle.com/
// 3. paste the JSON into Map Styles > Import JSON > Save
// 4. create a Map ID in Map Management
// 5. in Map Styles, assign the new Map ID to the style > Save
// 6. paste the mapID below
// If you hit trouble, check https://www.youtube.com/watch?v=CdDXbvBFXLY

// SET PINS
// 1. get all of the lat and longs you need and store them as an array of objects
// 2. iterate through the array
// 3. for each item in the array, run new google.maps.Marker

// Initialize and add the map


// playground-385101
// AIzaSyA73BD5cjaAZwPjI7L5a4kJzP_DmZxfcR8


// HOW TO FETCH DATA ACROSS THE WEB
const url = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=50000';

fetch(url)
  .then(response => response.json())
	// pass the data to the function!
	.then(data => playWithData(data))


// QUERY, MANIPULATE, VISUALIZE THE DATASET
const playWithData = data => {
	
	// how many instances were QUAA-ING?
	const quaas = data.filter(item => item.quaas == true);
	console.log(quaas);

	// first, load the map 
	const NYCposition = { lat: 40.7831, lng: -73.9712 };

	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 14.5,
		center: NYCposition,
		mapId: 'f488800617b627e7'
	})

	let lastPopupMessage = false;
	
	quaas.forEach(squirrel => {

		const squirrelPosition = { lat: parseFloat(squirrel.y), lng: parseFloat(squirrel.x) };

		const marker = new google.maps.Marker({
			map: map,
			position: squirrelPosition,
			icon: {
				url: 'png-squirrel.png',
				scaledSize: new google.maps.Size(35, 35), // size
			},
			animation: google.maps.Animation.DROP
		})

		let popupMessage = `
			<ul>
				<li>eating: ${squirrel.eating}</li>
				<li>indifferent: ${squirrel.indifferent}</li>
				<li>lat: ${squirrel.y}</li>
				<li>lng: ${squirrel.x}</li>
				<li>location: ${squirrel.location}</li>
			<ul>
		`;

		// if (squirrel.eating == true) {
		// 	popupMessage = "don't bother me, i'm eating";
		// } else if (squirrel.indifferent == true) {
		// 	popupMessage = "don't bother me, i'm indifferent";
		// }
		
		const popupContent = new google.maps.InfoWindow({
			content: popupMessage
		});

		google.maps.event.addListener(marker, 'click', () => {
			if (lastPopupMessage) {
				lastPopupMessage.close();
			};
			lastPopupMessage = popupContent;
			popupContent.open(map, marker);			
		})



	})

	


	

}