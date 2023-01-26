// create new list item & store in a variable 
let newListItem = document.createElement('li');
//update the text content of that last item 
newListItem.textContent = 'non-dairy whip cream';
//add that list item as a child of the ul 
document.querySelector('ul').appendChild(newListItem); 