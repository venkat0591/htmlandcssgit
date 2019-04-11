// Project 4
var myPenguin = {
	name : "Whiteblack",
	origin : "Whiteblack the Penguin Sees the World",
	author : "H. A. Rey and Margret Rey",
	notes : "Children's book about a travelling penguin",
}

myPenguin.favoriteFood = ["fish", "birds", "chips"]

// console.log(myPenguin)
// console.log(myPenguin.favoriteFood[1])

myPenguin.firstFavFood = myPenguin.favoriteFood[0]; 

myPenguin.favoriteFood.push ("worms");

// console.log(myPenguin.favoriteFood)

myPenguin.favoriteFood[3] = "pineapples";
myPenguin.favoriteFood.push ("bears");

// console.log(myPenguin.favoriteFood)

var lastFavFoodIndex = myPenguin.favoriteFood.length - 1;
var lastFavFood = myPenguin.favoriteFood[lastFavFoodIndex];
// console.log(lastFavFood);

for (i = 0; i< myPenguin.favoriteFood.length - 1; i++) {
	// console.log(myPenguin.favoriteFood[i]);
}

var penguinOutfit = {
	hat : "baseball cap",
	shirt : "Hawaiian shirt",
	pants : "cargo shorts",
	shoes : "flip-flops"
}

myPenguin.style = penguinOutfit;

// console.log(myPenguin.style);

var penguinHatType = penguinOutfit.hat;
// console.log(penguinHatType);

penguinOutfit.accessory = "pocket watch";
// console.log(penguinOutfit.accessory);

penguinOutfit.hat = "top hat"
// console.log(penguinOutfit.hat)

delete penguinOutfit.pants
// console.log(penguinOutfit);

// console.log(myPenguin)

for(let style in myPenguin.style){
	console.log(style);
	console.log(myPenguin.style[style]);
}

// Project 5

var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};

var penguins = [gunter, ramon, fred];

// console.log(penguins);

// console.log(penguins[0]);

var secondPenguin = penguins[1];

var lastPenguin = penguins.length -1;
var lastPenguinName = penguins[lastPenguin];
console.log(lastPenguinName);

penguins.push (myPenguin);

console.log(penguins);

console.log(penguins.length);

gunter.canFly = false;

for (i=0 ; i < penguins.length ; i++) {
	console.log(penguins[i].name);
}

for (i=0, n = penguins.length ; i < n ; i++) {
	if(penguins[i].sayHello !== undefined) (penguins[i].sayHello())

}

for (i=0, n = penguins.length ; i < n ; i++) {
	penguins[i].numberOfFeet = 2;
}

for (i=0, n = penguins.length ; i < n ; i++) {
	if (penguins[i].canFly == true) {
		console.log(`${penguins[i].name} can fly!`)
	}
}



// project 6


// What's the output.
var arr = ['Hi'];
var arr2 = arr;
console.log(arr === arr2);

// --> true


// What's the output.
var arr1 = ['Hi!'];
var arr2 = ['Hi!'];
console.log(arr1 === arr2);
console.log(arr == arr2);	

// false & false


//What's the output
console.log([10] === [10]);
// false, because they're not arrays

// What's the output?

function personDetails(person) {
  person.age = 25;
  person = {
      name: 'John',
      age: 50
  };
  
  return person;
}

// undefined because 'person' is not a valid funciton
var personObj1 = {
  name: 'Alex',
  age: 30
};
var personObj2 = personDetails(personObj1);
console.log(personObj1); // -> ?
console.log(personObj2); // -> ?




// Guess the output
var oldArray = [];
var object = {};
object.newArray = oldArray;
oldArray.push(10);
console.log(object.newArray === oldArray);



// Guess the output
var a = 5;
var b = a;
a = 10;
console.log(a);
console.log(b);



// What's the output?
var a = {};
var b = a;
a.a = 1;
console.log(a);
console.log(b); 


// What's the output.
var a = [];
var b = a;
a.push(1);
console.log(a); // [1]
console.log(b); // [1]
console.log(a === b);


// Clone the object person in clone
var person = {
  name: "Mark",
  age: 34,
  subjects: {
    maths: 78,
    physics: 43
  }
}

var clone = {};