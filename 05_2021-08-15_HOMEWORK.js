// This will test your skills of variables and conditionals
/* 
SPEC
-- I want to go for a RUN! But I want to know if I CAN!
-- What would prevent me from running?
--- I usually go in the morning, so if it's later than 10AM I won't go.
---- BUT: if it's winter I WILL go after 10AM, because it doesn't get so hot in the afternoon.
------- BUTTT: If it's winter, I WON'T go BEFORE 8AM because it's tooo cold
--- I won't go if it's raining.
--- I won't go if I'm feeling sick.

Challenge: build an IF statement that will determine if I will go for a run based on variables:
-isItMorning
-isItWinter
-isItRaining
-amIHealthy

Try different values for each variable and try console log each combination.
BONUS: use javascript's new Date() to get the current hours for isItMorning.

Use if/Else or a singular IF statement using && and ||

Hatzlocha!

*/

const now = new Date();
const currentHour = now.getHours();

const isItMorning = currentHour <= 10;
const isItWinter = true;
const willIRunIfWinter = isItWinter && currentHour >= 8;
const willIRunIfSummer = !isItWinter && isItMorning;
const willIRunBasedOnTimeAndSeason = willIRunIfWinter || willIRunIfSummer; //(isItWinter && currentHour >= 8) || (!isItWinter && isItMorning);
const noRunningMessage = 'No run today :('; //because I will write this out twice,
//best to keep it in a variable
const amIHealthy = false;
const isItRaining = true;

// if (!amIHealthy || isItRaining) {
//   console.log(noRunningMessage);
// } else if (isItMorning || isItWinter) {
//   console.log("Let's run!");
// } else {
//   console.log(noRunningMessage);
// }

// if (amIHealthy && !isItRaining) {
//   if (isItMorning || isItWinter) {
//     console.log("Let's run!");
//   } else {
//     console.log(noRunningMessage);
//   }
// } else {
//   console.log(noRunningMessage);
// }

// (3+2)*5 -- explicitly tell javascript what to resolve first, using parentheses
// = 25
// 3+2*5
// = 13

if (amIHealthy && !isItRaining && willIRunBasedOnTimeAndSeason) {
  console.log('RUNN');
} else {
  console.log('DO NOT');
}

// console.log(
//   amIHealthy && !isItRaining && (isItMorning || isItWinter)
//     ? "Let's Run!!!!!!"
//     : 'No run today!',
// );
