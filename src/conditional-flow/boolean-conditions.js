// This function should accept a boolean value and return the string
// "Well done, you passed!" if the value is true, or "Sorry, try again"
// if the value is false.
function getResult(didPass) {
  let result;
  if (didPass === true) {
    result = 'Well done, you passed!';
  } else {
    result = 'Sorry, try again';
  }
  return result;
}

module.exports = {
  a: getResult,
};
