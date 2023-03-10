const string = 'plain old text'
const integer = 2;
const Boolean = true; // (or false)
const array = [1,2,3,4,5,6];
const array2 = ['2 chainz','action bronson'];
const object = {
    'name': '2 chainz',
    'adLib': '/2chainz.ogg',
    'yearStarted': 2010,
};
const rapperCollection = [
    {
        'name': '2 chainz',
        'adLib': '/2chainz.ogg',
        'yearStarted': 2010,
    },
    {
        'name': 'Action Bronson',
        'adLib': '/actionbronson.ogg',
        'yearStarted': 2010,
    }
];

const matchingRappers = rapperCollection.filter(rapper => rapper.name == "2 chainz");

console.log(matchingRappers)

// JSON = javascript object notation



const rappers = document.querySelectorAll('.grid-item');

rappers.forEach(rapper => {
    rapper.addEventListener('click', () => {
        // do stuff / play audio file
        const audio = rapper.querySelector('audio');
        audio.play();
        rapper.classList.add('jiggle');
        setTimeout(() => {
            rapper.classList.remove('jiggle');
        }, 1200);
    });
});


// hide everything that doesn't match and show everything that does match
// if the filter is 'ALL', just show everything

const filterButtons = document.querySelectorAll('.filter-button');

const toggleRapper = (elements, showHide) => {
    // do something
    elements.forEach(el => {
        if (showHide == 'show') {
            el.classList.remove('is-hidden');
        } else {
            el.classList.add('is-hidden');
        }
    });
};

filterButtons.forEach(button => {
    // click on filter button
    button.addEventListener('click', () => {
        // get the data-attribute
        const filterValue = button.getAttribute('data-filter');
        // find all of the matching rappers (any grid item that has the same data-attribute)
        const matchingRappers = document.querySelectorAll(`.grid-item[data-filter="${filterValue}"]`);
        // first, loop through EVERYTHING and assume it doesn't match (i.e. hide it)
        toggleRapper(rappers, 'hide');
        // second, loop through MATCHING elements and show them (remove the 'is-hidden' class we just applied)
        toggleRapper(matchingRappers, 'show');

        if (button.getAttribute('data-filter') == 'All') {
            toggleRapper(rappers, 'show');
        };
    });
});