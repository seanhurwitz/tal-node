/*
We all make choices.
So does our code.
the choice is done in a binary fashion, ie EITHER this OR that.
how? IF statements
*/

const num1 = 9.9;

if (num1 < 10) {
  console.log(num1 + ' is a small number!');
  // console.log(`${num1} is a small number!`);
} else {
  console.log(num1 + ' is a big number');
}
// if (num1 >= 10) {
//   console.log(num1 + ' is a big number!');
// }

const now = new Date();
//think: do I want to use this value for different things?
//if so, store it in a variable!

// console.log(now.toString());
const currentHour = now.getHours();
// const currentMinute = now.getMinutes();
// console.log(currentHour);

// const currentHour = new Date().getHours(); this is also ok
console.log(currentHour);

if (typeof currentHour !== 'number') {
  console.log('Please offer a number!');
} else if (currentHour < 4) {
  console.log('Go to sleep!');
} else if (currentHour < 12) {
  console.log('Good morning!');
} else if (currentHour < 18) {
  console.log('Good afternoon!');
} else {
  console.log('Good evening');
}

/*
Conditional operators

== - DO NOT USE!
=== - ALWAYS use. Unique to javascript - checks TYPE as well

!= - DO NOT USE!
!== - ALWAYS USE - checks TYPE

&&
||
!

*/

// EXPLAINING =, ==, ===

const number = 3;
const isNumber3 = number == '3';

if (isNumber3) {
  console.log('NUMBER IS EQUAL TO 3????');
}

const newNumber = 5;
const isNewNumber5 = newNumber === 5;

if (isNewNumber5) {
  console.log('THIS NUMBER IS TRULY FIVE!');
}

// const thirdNumber = 8;
// const isThirdNumberNot8 = thirdNumber != '8'; //opposite equivalent of ==
// console.log(isThirdNumberNot8);

const thirdNumber = 8;
const isThirdNumberNot8 = thirdNumber !== '8'; //opposite equivalent of ===
console.log(isThirdNumberNot8);

// thought process to buy an ice cream.
// is it a hot day?
// am I fleishik?

const isHotDay = true;
const amIMilchik = false;
const amIHungry = true;

if (isHotDay && amIMilchik && amIHungry) {
  console.log('buy ice cream');
} else {
  console.log('too bad');
}

console.log(true && false);
console.log(true && true && true && true && false); //ALL need to be true

console.log(true || false || false || false || false || false); // at least ONE needs to be true

//BODMAS: multiply before adding
//SO TOO: && BEFORE ||

console.log(true && (false || false));
