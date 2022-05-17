// This function should return true if the passed string is equal to "Hello"
function isHello(val1) {
  return val1 === 'Hello';
}

// This function should return true if the passed string is not equal to "Hello"
function isNotHello(val1) {
  return val1 !== 'Hello';
}

// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan(val1, val2) {
  return val1.length > val2.length;
}

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels

function hasOddNumberVowels(val1) {
  let numberOfVowels = val1.match(/[aeiou]/gi).length;
  return numberOfVowels % 2 !== 0;
}

// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

// function getMiddleLetter(val1) {
//   if (!(val1.length % 2)) {
//     return val1[val1.length / 2 - 1] + val1[val1.length / 2];
//   } else {
//     return val1[Math.floor(val1.length / 2)];
//   }
// }

function getMiddleLetter(val1) {
  return !(val1.length % 2)
    ? val1[val1.length / 2 - 1] + val1[val1.length / 2]
    : val1[Math.floor(val1.length / 2)];
}

// This function should return the name of the season for the provided
// month name. For example, "January" should return "Winter". If the provided
// value is not a valid month, an empty string ("") should be returned. Use
// the below ranges for each season:
//
// Spring - March to May
// Summer - June to August
// Autumn - September to November
// Winter - December to February
const months = [
  'December',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
];

function seasonForMonth(monthName) {
  const monthIndex = months.indexOf(monthName);
  // console.log(monthIndex);
  return monthIndex >= 0 && monthIndex <= 2
    ? 'Winter'
    : monthIndex >= 3 && monthIndex <= 5
    ? 'Spring'
    : monthIndex >= 6 && monthIndex <= 8
    ? 'Summer'
    : monthIndex >= 9 && monthIndex <= 11
    ? 'Autumn'
    : '';
}
// console.log(seasonForMonth('Maasdrch'));

module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth,
};
