
/*
// // variables
// var name='';
// // fuctions
// function display() {
// 	name = prompt ('Enter your name');
// }
// // stepwise code
// display();
// alert(`Good morning ${name}`);

/*
var man; --> VALID
var 1girl; --> INVALID
var woman3; --> VALID
var -girl; --> INVALID
var blackDog; --> VALID
var 42; --> INVALID
var $42; --> VALID
var userName; --> VALID
var x, y, z; --> VALID
var x = 5, y = 6, z = 7; --> VALID
var x = 5 + 10 + 2; --> VALID
*/

// var 2080

var amount = 2080;

// 1

function subtraction() {
	var Num1 = amount - 80;
	console.log(Num1)
}

subtraction()

// 2

function addition() {
	var Num2 = amount + 200;
	console.log(Num2)
}

addition()

// 3

function multiplication() {
	var Num3 = amount * 4;
	console.log(Num3)
}

multiplication()
	
// 4

function division() {
	var Num4 = amount % 21;
	console.log(Num4)
}

division()

// John & Mark

var johnAge = 45;
var markAge = 35;

// function whoIsOlder() {
// if (johnAge - markAge === 10);{
// alert ("Mark");
// } 
// 	else {
// 		alert ("John");
// 	}
// }


// whoIsOlder()

// if (johnAge>markAge) {
// 	console.log('John is Older');
// }
// else if (johnAge<markAge){
// 	console.log('Mark is Older');
// }

// else if (johnAge=markAge){
// 	console.log('Both are equal')
// }

var newJohnAge = johnAge;

if (newJohnAge>markAge) {
	console.log('John is Older');
}
else if (newJohnAge<markAge){
	console.log('Mark is Older');
}

function ageAverage() {
	var avgAge = ((newJohnAge + markAge)/2);
	console.log(avgAge)
}

ageAverage()

// BMI 
var johnHeight = 1;
var markHeight = 3;
var johnMass = 60;
var markMass = 70;
var booleanBMI = true;
var johnBMI = 0;
var markBMI = 0;

function bmiJohn() {
	johnBMI = (johnMass/(johnHeight ** 2));
	console.log("Johns BMi:", johnBMI);
}
bmiJohn()

function bmiMark() {
	markBMI = (markMass/(markHeight * markHeight));
	console.log("mark's bmi:", markBMI);
}
bmiMark()

function higherBMI() {
	if (johnBMI > markBMI) {
		booleanBMI=false;
	}
	else {
		booleanBMI=true;
	}	
}
higherBMI()

if (booleanBMI) {
	console.log('Mark BMI is higher than John')
} 
else {
	console.log('John BMI is higher than Mark')
}


// What's the outpit of the code below
// typeof "Joe"; = string
// typeof 4; =  number
// typeof NaN; = number
// typeof false; = boolean
// typeof [4,3,2,1]; = object
// typeof {name:'Joe', age:45}; = object
// typeof function () {}; = function
// typeof phone; = undefined
// typeof null; = object


// Convert num into string
// var num = 45; --> "45"
// String(num); --> "num"
// String(321); --> "321"
// String(300 + 23); --> "323"
// String(false); --> false
// String(true); --> true
// false.toString(); --> "false"
// true.toString(); --> "true"
// Number("3.18"); --> "3.18"
// Number(" "); --> 0
// Number(""); --> 0
// Number("22 44"); --> NaN 
// Number(false); --> 0 
// Number(true); --> 1

/*
console.log('I am learning JavaScript');
// Name is a variable
var name;
var admin;

var name = "John";
admin = name;

alert(admin);

*/

// alert('Hello World');

function greetPerson() {
	var name = prompt('Enter your name');
	if (name.toLowerCase()=="bob" || name.toLowerCase()=="alice"){
		
		alert(`Welcome ${name}`)
	}
	else {
	alert('Goodbye');
	}
}


// greetPerson();

// Find the error if any (var product cost = 3.45;) --> error is the brackets

function greetSam() {
	var name = "Sam";
	console.log(`Hello ${name}, how are you doing?`)
}

// greetSam()

// Calculate length of string

function lengthOfString() {
	var str = prompt('Type anything below');
	console.log(str.length) 
}
// lengthOfString()

var ownerAge = 26;

// console.log(ownerAge/7);

// Marks

var studentScore = 41;
var maxScore = 100;

// console.log(studentScore/maxScore*100);

var city = "Dharamshala";
var country = "India";

function cityCountry() {
	console.log(`${city}, ${country}`);
}
// cityCountry()

// Caculator

var input1 = "";
var input2 = "";
var operator = "";
function Calculator(){
	input1 = prompt ('Enter first number');
	operator = prompt ('Enter Operator');
	input2 = prompt ('Enter second number');
	
if(operator ==="+"){
		alert(Number(input1) + Number(input2));
}
else if(operator ==="/"){
		alert(Number(input1) / Number(input2));
}

else if(operator ==="-"){
		alert(Number(input1) - Number(input2));
}

else if(operator ==="*"){
		alert(Number(input1) * Number(input2));
}
else if (operator!=="+" || operator!=="-" || operator!=="/" || operator!=="*")
		alert('Stop trolling :)');
}
// Calculator()

// John (single or married)

var firstName='John';
var status='married';

function checkMaritalStatus() {
if(status==='single')
{
	console.log("John is single");
}
else if(status==='married')
{
	console.log("John is married");
}
}

// checkMaritalStatus()

/*
var integer1 = prompt('Input the first integer', '0');
if (!Number.isInteger(integer1)) alert("Entered number is not an integer.")
var integer2 = prompt('Input the second integer', '0');

function displayLarger() {
	Number.isI
	if(integer1>integer2) {
		alert('Integer 1 is bigger');
	}
	else if(integer2>integer1) {
		alert('Integer 2 is bigger');
	}
}
*/

// displayLarger()

// Sign of 3 products

// var inputNumber1 = prompt('Please enter the first input');
// var inputNumber2 = prompt('Please enter the second input');
// var inputNumber3 = prompt('Please enter the third input');
// var totalProduct = (inputNumber1 * inputNumber2 * inputNumber3);

// function displaySign() {

// 	if(totalProduct>0) {
// 		alert('The product is a positive number')
// 		}
// 	else if(totalProduct<0) {
// 		alert('The product is a negative number')
// }
// }
// displaySign()

// FizzBuzz

var numb = 0;
function printNumb() {
	for(;numb < 100; numb++){
		if (numb % 3 === 0 && numb % 5 === 0) {
			console.log('FizzBuzz');  
		}
		else if (numb % 3 === 0) {
			console.log('Fizz');
		}
		else if (numb % 5 === 0) {
			console.log('Buzz');
		}
		else {
			console.log(numb);
		}
	}
}

// printNumb();

// Project 5 (phone purchase)

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
  	
function phonePurchases() {
	var purchaseAmount = ((PHONE_PRICE+ACCESSORY_PRICE)*(1+TAX_RATE));
	while (bank_balance > purchaseAmount) {  
		if (purchaseAmount < SPENDING_THRESHOLD){
			console.log(purchaseAmount);
			bank_balance = bank_balance-purchaseAmount;
		}

	}
}

phonePurchases()

function calculateTax() {
	amount = ((PHONE_PRICE+ACCESSORY_PRICE)*TAX_RATE);
	console.log(amount);
}

calculateTax();
console.log(bank_balance);
console.log(bank_balance.toFixed(2));