// var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
// var strings = ["this", "is", "a", "collection", "of", "words"];


// // console.log(Math.max(...numbers));

// function largestInNumbers(arr) {
// 	var largest = arr[0];
// 	for(var i = 1; i < arr.length; i++) {
// 		if(arr[i] > largest) {
// 			largest = arr[i] }
// 		}
// 		return largest;
// 	}

// console.log(largestInNumbers(numbers))

// var lgth = 0;
// var longest;

// for(var i=0; i < strings.length; i++){
//     if(strings[i].length > lgth){
//         var lgth = strings[i].length;
//         longest = strings[i];
//     }      
// } 

// console.log(longest);

// function returnEven () {
// 	for(var i=0; i < numbers.length; i++) {
// 		if (numbers[i] % 2 === 0) {
// 		console.log(numbers[i]);	
// 		}
// }
// }
// // returnEven();

// var evenNumbs = numbers.filter((i) => i % 2 === 0);
// console.log(evenNumbs);

// var oddNumbs = numbers.filter((i) => i % 2 !== 0);
// console.log(oddNumbs);

// function returnIs (arr) {
// 	let matches = [];
// 	for(i = 0; i < arr.length; i++) {
// 		if(arr[i].includes("is")) {
// 			matches.push(arr[i])
// 		}
// 	}
// 		return matches;
// }
// console.log(returnIs(strings));

// // function findStr(arr){
// // 	let matches = [];
// // 	for(let i = 0, n = arr.length; i < n; i++){
// // 		if(arr[i].includes("is")) matches.push(arr[i]);
// // 	}
// // 	return matches;
// // }

// // console.log("Matches for is: ", findStr(strings));

// function returnIs (arr) {
// 	let matches = [];
// 	for(i = 0; i < arr.length; i++) {
// 		if(arr[i].includes("is")) {
// 			matches.push(arr[i])
// 		}
// 	}
// 		return matches;
// }
// console.log(returnIs(strings));

// // var divideBy3 = numbers.every((i) => (i % 3 === 0));
// // console.log(divideBy3)

//    function sortNumber(a,b) {
//         return a - b;
//     }
//     numbers.sort(sortNumber);
//     console.log(numbers.join(","));

//    sortNumber();

// var sortNumberz = numbers.sort((a,b) => a-b);
// console.log(sortNumberz)

// strings.pop();

// console.log(strings)

// strings.push("replacement words");

// console.log(strings)

// strings.shift()

// console.log(strings)

// strings.unshift("THIS")

// console.log(strings)

// console.log(numbers.slice(3,7));

// console.log(strings.slice(2,4));

// console.log(numbers)

// // for (var i = 0; i < numbers.length; i++) {
// //     if (numbers[i] == 12) {
// //         numbers[i] = 1221;
// //     }
// //     else if (numbers[i] == 18) {
// //         numbers[i] = 1881;
// //     }
// //    }




	

//   // console.log(numbers.join(''))

// console.log(Math.max(...numbers));

// // 

// // function findLongestWord (() => "of", "words"];


// // console.log(Math.max(...numbers));

// // ==========================
// // 2
// // ==========================

var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodole',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

var longest = 0;

function findLong(){
	for (var i=0; i<words.length; i++) { // go through loop 7 times
		if (words[i].length > longest) { // if the length of the word is longer than 'longest', i.e. 0
			longest = words[i].length;   // then make 'longest' the length of the word
			var newLong = words[i];      //make this variable the longest word
		}
	}
	console.log(newLong)
}

findLong()	

var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// function sumArray () {
// 	var sum = 0;
// 	for(let number of numbers1) {
// 	sum += number;
// 	sumAvg = sum / numbers1.length;
// 	}
// 	console.log(sum)
// 	console.log(sumAvg)

// }

// sumArray()

var arraySum = numbers1.reduce(
	(total, currentValue) => total + currentValue
);

console.log(arraySum / numbers1.length);


var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function averageWordsLength () {
	var sumAvg = 0;
	var wordAvg = 0;
	
	for (let word of words2) {
	wordAvg += (word.length) / words2.length;

	}
	console.log(wordAvg)
}

averageWordsLength()

var words = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

let unique 	= [...new Set(words)];
console.log(unique);

let uniqueValue = words.filter((v,i,a) => a.indexOf(v) === i);
console.log(uniqueValue);

var words3 = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

function doesWordExist () {
	console.log(words3.includes('machine'));
}
doesWordExist();

var words4 = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

var searchWord = "machines";

function search(arr, word){
	return arr.filter(word => word.includes(searchWord)).length;
}

search(words4, searchWord);

console.log(howManyTimes)



let data = [
  {
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379,
  }
]

let newData = data.filter(country => country.country != "China");

let totalPopulation = newData.reduce((total, population) => {
	return total + population.pop;
}, 0);

console.log(totalPopulation);

// data.filter(c => c.country !== 'China').reduce((total, c) => total + c.pop, 0)


// reduce/ filter methods
// concept of objects after function argument
// how to actually understand what we read
// best approach going forward, most important reading material, keep up with revision?



const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig'
];

fruitBasket.reduce((acc, v) => {
	if(acc[v]){
		acc[v] = acc[v] +1
	} else {
		acc[v] = 1;
	}
	return acc;
}, {})

fruitBasket1.reduce((acc, v) => {
	acc[v] = (acc[v] || 0) + 1;
	return acc;
}, {})

fruitBasket1.reduce((acc, v) => {
	if(acc[v]){
		acc[v] = acc[v] +1
	} else {
		acc[v] = 1;
	}
	return acc;
}, {})
