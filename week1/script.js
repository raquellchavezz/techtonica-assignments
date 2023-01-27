// adding new ingredient (whip cream) to page with DOM manipulation: 

// create new list item & store in a variable 
let newListItem = document.createElement('li');
//update the text content of that last item 
newListItem.textContent = 'non-dairy whip cream';
//add that list item as a child of the ul 
document.querySelector('ul').appendChild(newListItem); 














// adding checkmark to element to a list with DOM manipulation: 

//creating a check mark as an element to a list
const myDiv = document.getElementById("myDiv");
//creating checkbox element 
let checkbox = document.createElement("input"); 
//assigning the attributes to created checkbox 
checkbox.type = "checkbox"; 
checkbox.name = "name"; 
checkbox.value = "value";
checkbox.id = "id"; 

//creating label for checkbox 
let label = document.createElement("label");

//asasigning attributes for the created label tag 
/* 

The HTMLLabelElement.htmlFor property reflects the value of the for content property.
 That means that this script-accessible property is used to set and read the value of the content property for,
  which is the ID of the label's associated control element. -mdmModzilla
  https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/htmlFor
*/
label.htmlFor = "id"; 

//appending the created text the the created label tag 
// function tryMe (array){
//     let items = document.getElementsById("myDiv"); 
//     for(let i = 0; i <array.length; i++){
//         let checkboxMe= document.createElement("checkbox"); 
//         items.innerHTML = array[i]; 
//         //want to attach the

//     }
// }



label.appendChild(
    document.createTextNode("Check me once you have all your ingredients!")); 

myDiv.appendChild(checkbox); 
myDiv.appendChild(label); 

//________________________________________________________________________________________
// adding color change when mouse goes over the photo credit link

const link = document.querySelector('a')
function colorChange(){ 
    link.style.color = 'green'; 
}
link.addEventListener('mouseover', colorChange)






//changing color of text 


document.body.style.color ="tan";


function handleHover(){
    let element = document.getElementById("element");
    element.innerText = "Hope You Enjoy!";
  }
  
  element.addEventListener("mouseover", handleHover);