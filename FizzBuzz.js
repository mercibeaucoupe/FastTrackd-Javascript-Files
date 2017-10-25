const _ = require('lodash')

const divides = (a, b)  => {
  if (!b) {
    throw new Error("Can't divide by zero, Try Again!");
  }
  return a % b == 0;
}

const message = (n) => {
  if (divides(n, 3) && !divides(n, 5)) {
    return n + ": " + "Fizz";
  } else if (!divides(n, 3) && divides(n, 5)) {
    return n + ": " + "Buzz";
  } else if (divides(n, 3) && divides(n, 5)) {
    return n + ": " + "FizzBuzz";
  }
  return null;
}

const testArray = _.range(1, 151)
const result = _.map(testArray, message)
const finalResult =_.filter(result, null)

console.log(finalResult)
