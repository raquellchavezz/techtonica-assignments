/* 

Mandatory fields 
Event Name
Where - Online or In-site
Hours
Chapter 
Number of tickets - 50 

*/

//Creating the event class 
// class Event{
//   constructor(name, place, hours, chapter){
//     this.name = name;
//     this.place = place;
//     this.hours = hours;
//     this.chapter = chapter;                //  0, 1, 2, 3, 4
//     this.availableTickets = new Array(); // [              ]
//     this.addAvailableTickets =  function(type, price) {
//       this.type = type;
//       this.price =  price;
//     }
//   }
// }
  
  //create class
  class TicketType{
    constructor(name, price){
      this.name = name;
      this.price = price;
    }
  }
  

class Event{
    constructor(name, place, hours, chapter){
      this.name = name;
      this.place = place;
      this.hours = hours;
      this.chapter = chapter; //  0, 1, 2, 3, 4
      this.availableTickets = new Array();// [        ]
    }
      addAvailableTickets = function(type, price) {
        this.type = type;
        this.price =  price;
      }
    }

  
  
  //step 4 Create my first instance 
  let womenCodeFirstEvent = new Event("Understanding the Web Content Accessibility Guidelines", "Online", "5:00 PM - 6:00 PM PST", "WWCode Boulder/Denver");
  
  //console.log(womenCodeFirstEvent);
  womenCodeFirstEvent.Event.availableTickets.push("Tanya", "Mifrah", "Raquel");
  //console.log(womenCodeFirstEvent);
  
  
  
  console.log(womenCodeFirstEvent.addAvailableTickets("General Admission", 25));

  
  
  
  function createInstance(array){
  
    let hours = "TBD";
    let places = "TBD";
    let chapters = "TBD";
    let results = [];
  
    //this for loop is creating an array of different events in ouput
    for(let i = 0; i < array.length; i++){
      let name = array[i];
      let tempInstances = new Event(name, places, hours, chapters);
      results.push(tempInstances);
    }
    //return array with all the events
    return results;
  }
  
  let names = ["Job search", "Networking", "Basic Data Structures", "Traslation", "Happy Hour"];
  let inputHTML = createInstance(names);
  console.log(inputHTML);
  
  
  //After you have created the array now we need to write the code to iterate through it in the same js file event.js (use "forEach" and innerHTML)
  
  document.addEventListener('DOMContentLoaded', () => {
    // Handler when the DOM is fully loaded
    let html = '';
    inputHTML.forEach((item) => {
      html += `<li>${item.name} - ${item.place}`;
    });
    console.log(html);
    document.querySelector('#event').innerHTML = html;
  });

  