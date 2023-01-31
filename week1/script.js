// adding new ingredient (whip cream) to page with DOM manipulation: 

// create new list item & store in a variable 
let newListItem = document.createElement('li');
//update the text content of that last item 
newListItem.textContent = 'non-dairy whip cream';
//add that list item as a child of the ul 
document.querySelector('ul').appendChild(newListItem); 


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
const stepList = document.getElementById("stepList")
stepList.addEventListener('mouseover', function handleMouseOver() {
    stepList.style.color = 'green';
  });


// when user clicks ingredients --> Hope You Enoy! 
function clickMe(){
    let element = document.getElementById("element");
    element.innerText = "Hope You Enjoy!";
  }
  
  element.addEventListener("click", clickMe);
//image resize to small
let myImg = document.getElementById('myImg');
function sizeImage(){
    if(myImg&& myImg.style) {
        myImg.style.height = '100px';
        myImg.style.width = '200px';
    }    
}
myImg.addEventListener("click", sizeImage);

//button 
const button = document.createElement('button'); 
button.innerText='Click me!'; 

document.body.appendChild(button); 


//ingredients array 
const arrayMatcha = ["1 tsp matcha powder", "1 tbsp hot water", "1/2 cup oat milk", "1 tsp agave/honey", "non-dairy whip cream"]

const thisDiv= document.getElementById("myDiv"); 

// function matchaCheckBox(array){
//     for(let i =0; i <array.length; i++){
//         let checkbox = document.createElement("input");
//     checkbox.type = "checkbox"; 
//     checkbox.name = "name"; 
//     checkbox.value = "value";
//     checkbox.id = "id"; 
//     let label = document.createElement("label");
//     label.htmlFor = "id"
//     label.appendChild(document.createTextNode(`${array[i]}`));
//     thisDiv.appendChild(checkbox);
//     thisDiv.appendChild(label)

//     }

// }

// matchaCheckBox(arrayMatcha)

// //removes old list 

// const oldList = document.querySelector("ul")
// ul.remove;
