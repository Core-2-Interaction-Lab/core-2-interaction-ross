// VARIABLES

// this is the old-school way of defining variables
var myVariable = 1; // numbers
var myVariable = 'Ross'; // string
var myVariable = true; // boolean
var myVariable = [1,2,3,4,5]; // array
var myVariable = {
	"name": "Ross", // key: value
	"location": "Brooklyn"
}; // object

const consistentVariable = 1; // no changing allowed
let flexibleVariable = 2; // changing IS allowed
flexibleVariable = 3; // this is allowed;
console.log(flexibleVariable);

// METHODS
const mySection = document.querySelector('section'); // query selector for grabbing HTML
mySection.classList.add('is-active');
mySection.classList.remove('is-active');
mySection.classList.toggle('is-active');
console.log(mySection)

// appendChild() inserts HTML TAG usually via createElement
// insertAdjacentHTML() inserts pure HTML (more than one tag)

Math.abs(-1) // absolute value
Math.round(3.4) // round value
Math.max(3,4,10,999) // get max
Math.min(3,4,10,999) // get min


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// grab the middle three
animals.slice(2,4);
console.log(animals.slice(2,4))

let myString = 'Array.prototype.slice()';
myString = myString.replace('prototype','');
console.log(myString)

window.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});

window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
});


// regular way to run and if/else condition
const isItSunny = true;
let endClassEarly = false;
let assignHomework = false;

if (isItSunny) {
	// do somthing if it's sunny
	endClassEarly = true;

} else {
	assignHomework = true;
}

console.log({endClassEarly});

// shorthand way to run an if/else condition
isItSunny ? endClassEarly = true : assignHomework = true;


// EVENTS
// - click
// - wheel
// - scroll
// - mousemove
// - resize


// yourElement.addEventListener('event listener name', (event) => {
	// the stuff you want to do when that event firest
// } )

// document.addEventListener('click', e => {
// 	console.log(e);
// })


// useful for hacking into scrolling (whether you want to do it horizontally or do something else)
// window.addEventListener('wheel', e => {
// 	console.log(e);
// })

// useful for listening to (successful) scrolling
// window.addEventListener('scroll', e => {
// 	console.log(e);
// })

const cursor = document.querySelector('.cursor');
let cursorLeft = 0;
let cursorTop = 0;

window.addEventListener('mousemove', e => {
	// console.log(e);
	const momentum = Math.max(Math.max(e.movementX, e.movementY) / 10, 1);
	cursorLeft = e.clientX;
	cursorTop = e.clientY;
	cursor.style.left = `${cursorLeft}px`;
	cursor.style.top = `${cursorTop}px`;
	cursor.style.transform = `translate(-50%,-50%) scale(${momentum})`;
});


// HOW TO FETCH DATA ACROSS THE WEB
const url = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=50000';

fetch(url)
  .then(response => response.json())
	.then(data => playWithData(data))
	.then(() => {
		// And passes the data to the function, above!
		addAudio()
	
})

const playWithData = data => {
	console.log(data);
	
	const quaas = data.filter(item => item.quaas == true);
	console.log(quaas);

	// get all of the dates
	const dates = data.map(item => {
		const month = (item.date).slice(0,2);
		const day = (item.date).slice(2,4);
		const year = (item.date).slice(4,8);
		const formattedDate = `${month}/${day}/${year}`;
		const date = new Date(formattedDate);
		return date;
	});

	const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
	const makeDateFriendly = unfriendlyDate => {
		return new Date(unfriendlyDate).toLocaleDateString('en-US', options);
	}

	const startingDate = Math.min(...dates);
	const endingDate = Math.max(...dates);

	console.log({startingDate});
	console.log({endingDate});

	const friendlyStartingDate = makeDateFriendly(startingDate);
	const friendlyEndingDate = makeDateFriendly(endingDate);
	console.log({friendlyStartingDate,friendlyEndingDate});
	const oneDay = 1000 * 60 * 60 * 24;

	// plot out all of the dates
	const totalDays = 14;

	const dataList = document.querySelector('.data-list');

	for (let index = 0; index <= totalDays; index++) {
		// with each loop, add one day to the calendar
		const newDay = startingDate + (oneDay * index);
		const formattedDay = makeDateFriendly(newDay);
		const originalFormattedDay = formattedDay.replaceAll('/','');

		const quaasOnDate = quaas.filter(item => item.date == originalFormattedDay);
		console.log(quaasOnDate)
		let quaasHTML = ``;
		quaasOnDate.forEach(() => {
			quaasHTML += `<button class="tick"></button>`
		})

		const html = `
			<li class="data-row">
				<span class="data-day">${formattedDay}</span>
				${quaasHTML}
			</li>
		`;

		dataList.insertAdjacentHTML('beforeEnd', html);

	}

	// figure out and plot how many quaas land on each of those dates
}

const addAudio = () => {
		const buttons = document.querySelectorAll('.tick');
		const audio = document.querySelector('.data-sound');

		buttons.forEach(button => {
			button.addEventListener('click', () => {
				audio.play();
			})
		})
}