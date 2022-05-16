// Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function increment(num) {
  return num + 1;
}

// Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below

function smiley(name) {
  const nameUpper = name.charAt(0).toUpperCase() + name.slice(1);
  return 'Hi, ' + nameUpper + ' :)';
}
// TODO: change undefined to be the name of the functions you defined
module.exports = {
  a: increment, // change undefined to be the name of the function you defined to increment a number (the first TODO)
  b: smiley, // change undefined to be the name of the function you defined to say hi (the second TODO)
};
