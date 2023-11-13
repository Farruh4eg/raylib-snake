function isBetween(valueToCheck, lowerBound, upperBound) {
  return valueToCheck >= lowerBound && valueToCheck <= upperBound
    ? true
    : false;
}

module.exports = {
  isBetween,
};
