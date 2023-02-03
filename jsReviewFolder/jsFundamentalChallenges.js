//1. 
// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.
//returning expressions to get boolean values 
function myFunc(num){
  //first check if the argument is a number 
  if(isNaN(num)){ //if num is NOT a number
    return false; // return false
  } //don't need if else here 
   return num%3 === 0; //whatever outcome is thats what we are returning which is true or false 
}
console.log(myFunc(15)) //true 

console.log(myFunc("hello")) //false

console.log(myFunc(10)) //false





//PROBELM 2: 
// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.

function numOfChar(str){ //32, 35, 43
  let count = 0;
                    //length =3
  for(let i =0; i < str.length; i++){ //cat
    // count++;
    count++;
  }
// if we had the string "cat" 
  // [0]    [1]    [2]
  // c       a       t   
  // 0+1    1+1     2+1
  //count = 3
  //need to return a num
  return count;  
}
console.log(numOfChar("cat"));

// other method: 
// i will always be close to string lengths depending on index pos start at for i 
// function numOfChar(str){ //32, 35, 43
//   let count = 0;
//                     //length =3
//   for(let i =1; i <= str.length; i++){ //cat
//     // count++;
//     count = i;
//   }
// // if we had the string "cat" 
//   // [0]    [1]    [2]
//   // c       a       t   
//   // 0+1    1+1     2+1
//   //count = 3
//   //need to return a num
//   return count;  
// }
// console.log(numOfChar("cat"));




//PROBLEM 3
// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   a) Return the first item in the array (ex: 1)
//   b) Return the last item in the array (ex: 3)
//   c) Add a new item to the end of the array (ex: [1,2,3,4])
//   d) Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   e)  Return the first item from the first item in the array. (ex: "a")
      

// notes: 
// question does not specify that I need to write a function so I will not be using functions for some of these. Also does not specify to use built in functions so I will use this opportunity to practice the longer way
let myArr = [1,2,3] // will use this as my array for the question 
let myArr2 = [1,2,3,4]

// a)Return the first item in the array (ex: 1)
console.log(myArr[0]); 

// b)Return the last item in the array (ex: 3)
console.log(myArr[myArr.length-1]); //last elem in the array 

// c) Add a new item to the end of the array (ex: [1,2,3,4])
myArr[myArr.length] = 4 //at position 3 we are assigning 4 to it 
console.log(myArr); 

// d) Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4]) 
myArr2.splice(0,0,["a","b","c"]) 
console.log(myArr2) //  (ex: [["a","b","c"],1,2,3,4]) 

// // e) Return the first item from the first item in the array. (ex: "a")
// // I will do a function for this 
function returnItem(arr){
  for(let i = 0; i <arr.length; i++){ // we want to access the first array, so we start at 0
    for(let j = 0; j<arr[i].length; j++){ // we are now inside the first array and want to access the first element which is at position 0 in this array
      let first = arr[j][0]; // the first element will be held in this variable and we access by saying hey I want to look at the array and specifically I want to look at the innder array's first element which is at position 0 
      return first; // then we return it 
    }
  }
}
console.log(returnItem([["a","b","c"],1,2,3,4])) // checking --> "a"









//PROBLEM 4: 
// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.
function minsPastMidnight(){
    const midnight = new Date(); 
    midnight.setHours(0,0,0,0,0)
    // console.log(midnight); // now we have midnight time
    const timeNow = new Date();  // now we have current time
    timeNow.getHours(); 
  
    
    // calc for time past midnight
    const timeElapsed = timeNow - midnight; 
    minsTimeElapsed = (timeElapsed/1000)/60; 
    return minsTimeElapsed
  }
  console.log(minsPastMidnight());
  
  