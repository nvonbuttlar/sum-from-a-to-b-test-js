
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN recursively
  // For this exercise, we can safely assume that fromN will always be less than or equal to toN.
if(toN < 0) {
  return 'error';
} else if (toN === fromN) {
  return toN;
} else {
  return fromN + sum(fromN + 1, toN)
}

}

module.exports = sum;

// base case: when numbers have counted from fromN toN. Therefore fromN wll === toN
// recursive case: return sum(fromN + 1, toN);
