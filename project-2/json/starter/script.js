// create a function to loop through the data and spit out HTML
const createCollectionHTML = data => {
    
    // store the collection grid variable so that we know where to inset the HTML later
    const collectionGrid = document.getElementById('collection');

    // iterate each item of the returned JSON
    data.forEach(item => {
        console.log(item);
        const listItemHTML = `
            <li>
                <p class="item-title">${item.name}</p>
                <p class="item-year">${item.year}</p>
                <p class="item-description">${item.description}</p>
                <img src="${item.image}" alt="${item.name}">
            </li>
        `
        collectionGrid.insertAdjacentHTML('beforeend', listItemHTML);
    });
}


fetch('collection.json')
    // first, check if the request is approved/"OK" or if something bad happened
    // return the documen in JSON format
    .then(response => response.json())
    // now that we have the document in JSON format, let's work with it
    .then(data => {
        // send it into the function we made above (fill in the blank/variable)
        createCollectionHTML(data);
    })