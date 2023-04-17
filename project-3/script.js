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
	console.log(e);
	const momentum = Math.max(Math.max(e.movementX, e.movementY) / 10, 1);
	cursorLeft = e.clientX;
	cursorTop = e.clientY;
	cursor.style.left = `${cursorLeft}px`;
	cursor.style.top = `${cursorTop}px`;
	cursor.style.transform = `scale(${momentum})`;
});



// HOW TO FETCH DATA ACROSS THE WEB
const url = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=50000';

fetch(url)
  .then(response => response.json())
	.then(data => {
		// And passes the data to the function, above!
		// console.log(data);
})