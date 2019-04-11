// 1

// function calculateDogAge () {
//   let puppyAge = +prompt('Enter your dogs human age');
//   let actualAge = (puppyAge * 7);
//   alert(`Your doggie is ${actualAge} in dog years!`)
// } 

// // calculateDogAge()

// // 2

// const maxAge = 80;

// function calculateSupply (currentAge, amountPerDay) {
//   currentAge = (maxAge - (+prompt('What is your current age?')))
//   amountPerDay = +prompt('How much do you consume per day?')
//   let totalAmount = currentAge*amountPerDay;

//   alert(`You will need $${Math.round(totalAmount)} to last you until the ripe old age of maxAge`)
// }

// calculateSupply()

// function checkAge (age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }

// checkAge(12)

// Is there any difference in the behavior of these two variants?
// // 
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Do you have your parents permission to access this page?");
//   }
// }

// let age = prompt('What is your age?');
// let checkAge = (age < 18 || age > 90) ? true : confirm('Do you have your parents permission to access this page?'); 

// let age = prompt('age?');
// let message = (age < 18) ? 'You are too young': 
//               (age < 90) ? 'You are too old, lo siento!':
//               'What an unusual age';
//               alert(message);


// (function pow (x, n) {
//   if (n > 1) {  
//   let pow = x**n;
//   return pow;
// }
// })();

// Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.

// Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”

// Counts the number of individual words in a string. For added complexity read these strings in from a text file and generate a summary.

// Show the following output using one loop.
// 1, 2, 3, 4, 5
// 6, 7, 8, 9, 10

// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

// Write a function that returns the largest element in a list.

// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

// Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

// Write a program that takes a number under (25) and prints the multiplication table for the number.


function calculateProductOrSum() {
  var n = +prompt('Enter a number');
  var result = 1;
  var operation = prompt('Do you wish to add or multiply');

  for (var i = 2; i <= n; i++) {
    if (operation === "add") {
      result += i;
    }
    else if (operation === "multiply") {
      result *= i;
    }
    else {
      alert('Please type either "add" or "multiply" only.')
    }
  }
  alert(result);
} 

// calculateProductOrSum()


function countVowels() {
  var text = prompt('Enter any text. get vowel count.');
  var upperText = text.toUpperCase();
  var count = 0;

  for (var i = 0; i < upperText.length; i++) {
    var letter = upperText[i];
    if (letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U")
      count += i;
  }
    alert(count);
}

// countVowels()

function addNumbers () {
  var input = +prompt('Input any valid number');
  var robotCheck = prompt('Type "add" if you are not a robot');
  var result = 1;

 for (i=2; i <= input; i++) {
    if (robotCheck === "add") {
      result +=i;
}
}
  alert(`The total is ${result}`)
}
// addNumbers()

var toMultiply = +prompt('Enter any number less than 25')
  for (i = 1; i <= 10; i++) {
    if (toMultiply < 25) {
      console.log("%d * %d = %d", toMultiply, i, (toMultiply*i));
    }
    else {
      alert('sorry, the value entered is invalid.')
    }
  }

let company = prompt('Which company created JS?');

company == 'Netscape'?
alert('Right!') : alert('For real?');


let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );