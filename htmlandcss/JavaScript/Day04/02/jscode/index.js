var myPenguin = {
	name : "Whiteblack",
	origin : "Whiteblack the Penguin Sees the World",
	author : "H. A. Rey and Margret Rey",
	notes : "Children's book about a travelling penguin",
}

console.log(`Hello I'm a penguin and my name is ${myPenguin.name}`)

myPenguin.canFly = false;

myPenguin.chirp = function () {
	console.log('CHIRP CHIRP! Is this what penguins sound like?');
}
console.log(myPenguin);

myPenguin.name = "Penguin McPenguinFace";
console.log(myPenguin);
myPenguin.fly = function () {
	if (myPenguin.canFly == true) {
		console.log("I can fly!");
	}
	else if (myPenguin.canFly == false) {
		console.log("No flying for me");
	}
}

console.log(myPenguin);

myPenguin.canFly = false;
console.log(myPenguin);

for (let key in myPenguin) {
	console.log(key);
	console.log(myPenguin[key]);
}

var myRecipe = {
	Title : "Pasta",
	Serves : 3,
	Ingredients : ["dough", "tomato sauce", "cheese", "basil"],
}

console.log(myRecipe.Title)
console.log(`Serves ${myRecipe.Serves}`)
console.log(myRecipe.Ingredients[0])
console.log(myRecipe.Ingredients[1])
console.log(myRecipe.Ingredients[2])
console.log(myRecipe.Ingredients[3])



var myBooks = [
	{
		title: "Harry Potter",
		author: "JK Rowling",
		alreadyRead: true,
	},
	{
		title: "The Alchemist",
		author: "Paulo Coelho",
		alreadyRead: true,
	},
	{
		title: "Psycho Cybernetics",
		author: "J Maxwell",
		alreadyRead: false,
	}
] 

for (i=0; i < myBooks.length; i++) {
	// console.log(key);
	// console.log(`${myBooks[i].title} by ${myBooks[i].author}`);
	if (myBooks[i].alreadyRead === true) {
		console.log(`You already read ${myBooks[i].title} by ${myBooks[i].author}`)
	}
	else if (myBooks[i].alreadyRead === false){
		console.log(`You still need to read ${myBooks[i].title} by ${myBooks[i].author}`)	
	}
}