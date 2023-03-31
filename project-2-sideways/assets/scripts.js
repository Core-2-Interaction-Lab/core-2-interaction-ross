// hijack the wheel event (i.e. scroll attempts) to move along the x-axis
window.addEventListener('wheel', e => {
	document.body.scrollBy(e.deltaY / 3, 0);
})

// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection');
	
	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`

		// add an ID to the list item for unique styling
		listItem.id = item.id;
 
		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
				<h2>${item.title}</h2>
				<div class="image-wrapper">
					<img src="${item.posterImage}" alt="View of ${item.title}">
					<div class="lightbox">
						<p>${item.description}</p>
					</div>
				</div>
				<p>📍 Built in <span>${item.location}</span></p>
				<p>✍️ Designed by ${item.architect}</p>
				
				
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		// You can build logic from your data, too
		// if (!item.otherAttr) { // If this is `false`
		// 	listItem.classList.add() // Add this class to the whole `li`
		// }

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})

	// now that all html is in the page, we can fire a function which taps into the list items
	createLightboxes(collectionList.querySelectorAll('li'))
}


// Fetch gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection)
})


const createLightboxes = listItems => {
	listItems.forEach(item => {
		item.addEventListener('click', () => {
			item.classList.toggle('lightbox-enabled')
		})
	})
}