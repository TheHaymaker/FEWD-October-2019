// JavaScript 
  // EcmaScript
  // ES2015 (Browser)
  // ES2016 - 2019 (compiled into ES2015)
  // String concatentation
    // "This " + "and that" -- ES5
    // VS.
    // `${this} and that` -- ES6
  // Datatypes
    // Numbers
      // Integer
      // Floats
    // String
    // Boolean
  // Operators
    // assignment ( var name = "me";)
    // comparison
      // == vs === ( 2 == "2") vs (2 === "2")
      // != vs !== (!==) ! = =
    // arithmetic 
      // +, *, /, %, -
    // logical
      // && -- AND
      // || -- OR
    // comparison statement blocks
      // if-else
      // if-ifelse-ifelse-else


// DRY
// DO NOT REPEAT YOURSELF
// functions


myFunctionExample(); // Is totally legal
// legal because of 'hoisting'

// function declaration
function myFunctionExample(){

}

mySecondFuncExample(); // Error
// function expression
var mySecondFuncExample = function(){

}

mySecondFuncExample(); // this will work
// because the function has been defined


var add = function() {
  return 2 + 2;
}

add();
// return 4
// return 4 into the ether

var result = add();
// capturing in 'result'



var add = function(a, b) {
  return a + b
}

add(10, 150); // return 160
add(50, 5); // 55

// create a function
// accept 2 parameters
// join the 2 parameters into 1 string
// and return that string

// fullName(first, last)


// arrays

var myArray = [1, 2, 3,'first name: Brett'];
// myArray.pop()
// "another string called Eileen"
// myArray
// (4) [1, 2, 3, "first name: Brett"]0: 11: 22: 33: "first name: Brett"length: 4__proto__: Array(0)concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Object
// myArray.pop(1)
// "first name: Brett"
// myArray
// (3) [1, 2, 3]
// myArray.shift('1')
// 1
// myArray
// (2) [2, 3]
// myArray.unshift('1')
// 3
// myArray
// (3) ["1", 2, 3]
// myArray.length
// 3
// myArray
// (3) ["1", 2, 3]


// for-loops
/**
 * 1. create our iterator
 * 2. execute a comparison to determine if we continue running the loop
 * 3. We increment our iterator
 */
for (1; 2; 3) {

  // this is what gets executed
  // on every iteration of the loop

}


// example 1
for(var i = 0; i < 10; i += 1) {
  console.log("I ran again...");
}

// example 2 -- ES5
var myArray = ["strawberry", "cherry", "rhubarb"];
for(var i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// example 3 --- ES6
const myArray = ["strawberry", "cherry", "rhubarb"];
for(let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

const newArray = [4,3,2,1];

newArray[2];

// objects
var thermostat = {
  currentTemp: 55,
  userDesiredTemp: 68,
  getCurrentTemp: function() {
	var random = Math.random();
  if (random < 0.5) {
    this.currentTemp = this.currentTemp + 1;
  } else {
    this.currentTemp = this.currentTemp - 1;
  }
	
  },
	pollCurrentTemp: function() {
    console.log(this);
		setInterval(this.getCurrentTemp, 1000)
    }
}

var person = {
	name: 'Cindy GD Spears',
	height: 6.7,
	weight: 190,
	weightDenomination: 'kg',
	age: 80,
	exercise: function(){
		this.age += 0.01;
		this.weight -= 0.03;
	}
}

while(person.weight > 180) {
  person.exercise()
}
