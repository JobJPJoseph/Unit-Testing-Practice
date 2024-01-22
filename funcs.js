function isFive(num) {
  // Your code here
  // We need to first test the typeof num
    // if true, proceed
    // if false, return false;

  // next we need to test if num is === 5;
    // if true, return true
    // if false, return false

  if (typeof num !== 'number') return false;
  return (num === 5) ? true : false;
}

function isOdd(number) {
  // Your code here
  /*
  The first thing we need to test is check the type of the given number
    if true; proceed
    if false; throw new error

  Next we are going to get the absolute value of said number to cover negative numbers
  From there we will do modulo by 2 !== 0
    if true; its odd
    if false; its even
  */

  if(typeof number !== 'number') throw new Error();

  const num = Math.abs(number);

  return (number % 2 !== 0) ? true : false;
}

function myRange(min, max, step = 1) {
  // Your code here
  /*
  The first thing we need to test is if max is less than min
    it true, return an empty array
    it false, proceed

  Next we will create an empty array
  We are going to use a for-loop from min to including max
    we are going to increment by step
  */

  const array = [];
  if (min >= max) return array;

  for (let i = min; i <= max; i += step) {
    array.push(i);
  }

  return array;
}


module.exports = { isFive, isOdd, myRange };
