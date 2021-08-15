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
===

!= - DO NOT USE!
!==

&&
||

*/

console.log(1 == 1);
console.log(1 == '1');
