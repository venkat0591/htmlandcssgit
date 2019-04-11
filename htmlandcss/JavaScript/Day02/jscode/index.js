// Project 01
/*
function validatePassword() {
	var pw1 = prompt('Password');
	var pw2 = prompt('Confirm Password');
	if (pw1==pw2) {
		alert('Password Validated');
	}
	else if (pw1!==pw2){
		alert('Passwords do not match');
	}
}

validatePassword()

// Find the output of the following
// Logical AND operation
// true  && true; --> true
// true  && false; --> false
// false && true; --> 	false
// false && false; --> false

// Logical OR operation
// true  || true; --> true
// true  || false; --> true
// false || true; --> true
// false || false; --> false

// "foo" && "bar"; --> "bar"
// "bar" && "foo"; --> "foo"
// "foo" && ""; --> ""
// ""    && "foo"; --> ""

// "foo" || "bar"; --> "foo"
// "bar" || "foo"; --> "bar"
// "foo" || ""; --> "foo"
// ""    || "foo"; --> "foo"
*/

let isGuestOneVeg = false;
let isGuestTwoVeg = true;

function checkVeg() {
	if(isGuestOneVeg && isGuestTwoVeg ) {
		alert('Only offer up Vegan dishes')
	}	
	else if(isGuestOneVeg || isGuestTwoVeg) {
		alert('Make sure to offer up some vegan options')
	}
	else {
		alert('Offer up anything else in the menu')
	}
}

// checkVeg()

let temp=60;

function checkTemp() {
	if(temp<32) {
		alert('It is freezing outside')
	}
	else if (temp>110) {
		alert('It is hot outside')
	}
	else {
		alert('Get outside!')
	}
}
checkTemp()

// Create a function which takes two input and (a,b) and display the sum, sub, multiplication, division of those two numbers.

var a=0;
var b=0;

function performOperations(a,b) {
	if(a+b) {
		console.log(a+b)
	}
	if(a-b) {
		console.log(a-b)
	}
	if(a*b) {
		console.log(a*b)
	}
	if(a/b) {
		console.log(a/b)
	}
}
// performOperations(a=4,b=9)

function checkNegative() {
	var inputNumber = prompt('enter a number');
	if (inputNumber<0) {
		console.log(inputNumber)
	}
}

// checkNegative()

var naturalNumber=0;
function checkMultiples() {
	var total=0;
	for(; naturalNumber < 1000; naturalNumber++) {
		if (naturalNumber % 3 === 0 || naturalNumber % 5 ===0) {
			total+=naturalNumber
		}
	}
	console.log(total);
	
}

// checkMultiples();

function OddOrEven() {
	var inputNumber = prompt('Check if odd or even');
		if (inputNumber % 2 === 0) {
			alert('even')
		}
		else {
			alert('odd')
		}

}

// OddOrEven()
var numbA = 0;
var numbB = 0;

function checkRelationship (a,b) {
	var numbA = prompt('Enter number a')
	var numbB = prompt('Enter number b')
	if (numbA===numbB){
		console.log(`${numbA} = ${numbB}`)
	}
	else if (numbA>numbB){
		console.log(`${numbA} > ${numbB}`)
	}
	else if (numbA<numbB){
		console.log(`${numbA} < ${numbB}`)
	}
}
// checkRelationship()

function checkVowel() {
	var vowel = prompt('Check if it is a vowel')
	if (vowel=== 'a' || vowel==='e' || vowel==='i' || vowel==='o' || vowel==='u') {
		alert('vowel')
	}
	else {
		alert('consonent')
	}
}

checkVowel()

function findGreatest() {
	var numb1 = prompt('Enter first number')
	var numb2 = prompt('Enter second number')
	var numb3 = prompt('Enter third number')
	if (numb1>numb2 && numb1>numb3) {
		alert(`${numb1} is the greatest of the 3 numbers`)
	}
	else if (numb2>numb1 && numb2>numb3) {
		alert(`${numb2} is the greatest of the 3 numbers`)
	}
	else if (numb3>numb2 && numb3>numb2) {
		alert(`${numb3} is the greatest of the 3 numbers`)
	}
}

// findGreatest()

// printInLetters()
/*

let Numb = prompt('enter a number');

switch (Numb) {
  case '1':
    console.log('ONE');
    break;
  case '2':
    console.log('TWO');
    break;
   case '3':
    console.log('THREE');
    break;
  case '4':
    console.log('FOUR');
    break;
   case '5':
    console.log('FIVE');
    break;
  case '6':
    console.log('SIX');
    break;
   case '7':
    console.log('SEVEN');
    break;
  case '8':
    console.log('EIGHT');
    break;
  case '9':
    console.log('NINE');
    break;
  default:
    console.log('Try a number from 1 to 9.');
}

*/


// let checkVariable = prompt('Enter marks');
// checkVariable = Number(checkVariable);
// let booleanVar = true;
// console.log(checkVariable);
// switch (booleanVar) {
//   case checkVariable > 90:
//     console.log('AA');
//     break;
//   case checkVariable>80 && checkVariable <=90:
//     console.log('AB');
//     break;
//    case checkVariable>70 && checkVariable <=80:
//     console.log('BB');
//     break;
//   case checkVariable>60 && checkVariable <=70:
//     console.log('BC');
//     break;
//    case checkVariable>50 && checkVariable <=60:
//     console.log('CC');
//     break;
//   case checkVariable>40 && checkVariable <=50:
//     console.log('CD');
//     break;
//    case checkVariable>30 && checkVariable <=40:
//     console.log('DD');
//     break;
//     case checkVariable<30:
//     console.log('DD');
//     break;
//   default:
//     console.log('Enter a valid mark.');
// }



// multiplication table

var inputYourNumber=prompt('Check multiplication table')
inputYourNumber = Number(inputYourNumber);
for (var i=0; i<=10; i++)
	console.log("%d * %d = %d", inputYourNumber, i, (inputYourNumber*i));


// Output: var x = 10 + "1"; console.log(x); typeof x; --> String

// Fibonacci sequence

function greaterNum() {
	var numb1 = prompt('Enter first number')
	var numb2 = prompt('Enter second number')
	numb1=Number(numb1)
	numb2=Number(numb2)
	if (numb1!=NaN && numb2!=NaN && numb1>numb2) {
		alert(`The greater of ${numb1} and ${numb2} is ${numb1}`)
	}
	else if (numb1!=NaN && numb2!=NaN && numb2>numb1) {
		alert(`The greater of ${numb1} and ${numb2} is ${numb1}`)
} 
	else {
		alert('Only enter numbers to compare!')
	}
}

// greaterNum()

function greetInTongue() {
	var langInput = prompt('Choose your language.')
	if (langInput==='en') {
		alert('Good morning')
	}
	else if (langInput==='nl') {
		alert('GOedemorgen')
	}
	else if (langInput==='es') {
		alert('Buenas Dias')
	}
	else {
		alert('select valid language')
	}
}

// greetInTongue()


function returnOddOrEven(){
	for (var j=0; j<=20; j++) {
		if (j % 2 === 0) {
		console.log("%d is an even number", j);
}	
}
}



// returnOddOrEven()

	for (var k=0; k<=10; k++) 
		console.log("%d * %d = %d", k, 9, (k*9));


var johnTeamScore1 = 89;
var johnTeamScore2 = 120;
var johnTeamScore3 = 200;

var mikeTeamScore1 = 116;
var mikeTeamScore2 = 600;
var mikeTeamScore3 = 123;

var maryTeamScore1 = 97;
var maryTeamScore2 = 134;
var maryTeamScore3 = 105;

console.log("The average score of Johns team is %d", (johnTeamScore1+johnTeamScore2+johnTeamScore3)/3);
console.log("The average score of Mikes team is %d", (mikeTeamScore1+mikeTeamScore2+mikeTeamScore3)/3);
console.log("The average score of Marys team is %d", (maryTeamScore1+maryTeamScore2+maryTeamScore3)/3);

function higherAvg() {
	var johnTeamAvg = (johnTeamScore1+johnTeamScore2+johnTeamScore3)/3;
	var mikeTeamAvg = (mikeTeamScore1+mikeTeamScore2+mikeTeamScore3)/3;
	if (johnTeamAvg>mikeTeamAvg) {
		console.log("Johns team wins with a score of %d", johnTeamAvg);
	}
	else if (mikeTeamAvg>johnTeamAvg) {
		console.log("Mikes team wins with a score of %d", mikeTeamAvg);
	}
	else {
		console.log("Both teams drew with a score of %d", mikeTeamAvg);
	}
}

higherAvg()



function higherOfTheThree() {
	var johnTeamAvg = (johnTeamScore1+johnTeamScore2+johnTeamScore3)/3;
	var mikeTeamAvg = (mikeTeamScore1+mikeTeamScore2+mikeTeamScore3)/3;
	var maryTeamAvg = (maryTeamScore1+maryTeamScore2+maryTeamScore3)/3;
	if (johnTeamAvg>mikeTeamAvg && johnTeamAvg>mikeTeamAvg ) {
		console.log("Johns team wins with a score of %d", johnTeamAvg);
	}
	else if (mikeTeamAvg>johnTeamAvg  && mikeTeamAvg>maryTeamAvg) {
		console.log("Mikes team wins with a score of %d", mikeTeamAvg);
	}
	else if (maryTeamAvg>johnTeamAvg  && maryTeamAvg>mikeTeamAvg) {
		console.log("Marys team wins with a score of %d", maryTeamAvg);
	}
}

// higherOfTheThree()

// factorial

function findFactorial() {
	var fac = 1;
	var factorialInput= prompt('Enter any number')
	factorialInput = Number(factorialInput);
	for (var f=1; f<=factorialInput; f++) {
		fac = fac*f;
	}
	console.log(fac);
}


// Fibonacci sequence



// nested for loop

for (var i=0; i<=10; i++) {
	for (var j=0; j<=10; j++) {
	
	console.log(i + ' * ' + j + ' = ' + i*j);
}
}


// var a=1, b=2, next=a+b;
// var sum = 0;

// while(b<4000000) {
// 	if (b % 2 === 0) {
// 		sum +=b
// 	}
// 	a=b;
// 	b=next;
// 	next=a+b;

// console.log(sum)
// }

// var a=1, b=2, next=a+b;
// var sum=0;

// for (b=1; b=4000000; b++) {
// 	if (b % 2 === 0) {
// 		sum +=b
// 	}
// 		a=b;
// 		b=next;
// 		next=a+b;

// 	console.log(sum);
// }