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