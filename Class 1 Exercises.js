/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

let list1 = "****** Math / Numbers ******"
let areaofpizza = "// Q1. What is the area for each of these pizzas?";
const SMALL_PIZZA_DIAMETER =13;
const LARGE_PIZZA_DIAMETER =17;
const SMALL_PIZZA_PRICE =16.99;
const LARGE_PIZZA_PRICE =19.99;

const smallPizzaArea = Math.PI * ((SMALL_PIZZA_DIAMETER/2)** 2) //MATH.pow((13/2),2)
const largePizzaArea = Math.PI * ((LARGE_PIZZA_DIAMETER/2)** 2)

console.log(list1);
console.log(areaofpizza);
console.log("Result: The area of small pizza is:", smallPizzaArea);
console.log("Result: The area of large pizza is:", largePizzaArea);

// 2. What is the cost per square inch of each pizza?

let costofpizza = "// Q2. What is the cost per square inch of each pizza?";
const smallPizzaCostPerSquareInch = SMALL_PIZZA_PRICE/smallPizzaArea;
const largePizzaCostPerSquareInch = LARGE_PIZZA_PRICE/largePizzaArea;

console.log(costofpizza);
console.log("Result: The cost per square inch of a small pizza is",smallPizzaCostPerSquareInch);
console.log("Result: The cost per square inch of a large pizza is",largePizzaCostPerSquareInch);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

let randomCard = "// Q3. Draw a Random card between 1 and 13?";
const LOWEST_CARD = 1;
const HIGHEST_CARD = 13;
const card = Math.ceil(Math.random() * HIGHEST_CARD); 

console.log(randomCard);
console.log("Result: Radmon card between 1 and 13 is:", card)

// 4. Draw 3 cards and use Math to determine the highest
// card
let Hcard = "// Q4. Determine the highest card?";
const card1 = Math.ceil(Math.random() * HIGHEST_CARD);
const card2 = Math.ceil(Math.random() * HIGHEST_CARD);
const card3 = Math.ceil(Math.random() * HIGHEST_CARD);

const highestCard = Math.max(card1,card2,card3);

console.log(Hcard);
console.log("Card 1 is:",card1);
console.log("Card 2 is:",card2);
console.log("Card 3 is:",card3);
console.log("Highest Card is: " ,highestCard);


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

let list2 = "****** Strings / Addresses *******"
let addressblock = "// Q1. Create variables for firstName, lastName, streetAddress, city, state, and zipCode";
let firstName = "Soumya";
let lastName = "Rajeesh";
let fullName = firstName + ' ' +lastName ;
let StreetAddress = "17825  38th Drive SouthEast";
let city = "Bothell";
let state = "WA";
let zipCode = "98012";
let Address = city + "," + " " + state + " " + zipCode;

console.log(list2);
console.log(addressblock);
console.log(fullName);
console.log(StreetAddress);
console.log("Result: The formatted address block is",Address);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

let extractfirstname = "// Q2. Extract the first name from this string 'Soumya Rajeesh' into a variable";
let fullName1 = "Soumya Rajeesh";
firstName = fullName1.slice(0,6);
console.log (extractfirstname);
console.log("Result: The extracted Fist Name is",firstName);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
let list3 = "***** Date *****";
let middledateandtime = "// Q1. Find the middle date(and time) between the following two dates 1/1/2020 00:00:00 and 4/1/2020 00:00:00"
const startDate =new Date(2020,0,1);
const endDate = new Date(2020,3,1);
const midDate = new Date((startDate.getTime()+endDate.getTime())/2);

console.log(list3);
console.log(middledateandtime);
console.log("Result: The middle date and time is", midDate);
