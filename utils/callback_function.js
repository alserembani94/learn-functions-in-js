const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const findHighestNumber = (num1, num2, num3) => {
  return Math.max(num1, num2, num3);
}

// getRandomNumber as callback function
const highestNumber = findHighestNumber(getRandomNumber(1, 10), getRandomNumber(1, 10), getRandomNumber(1, 10));

module.exports = {
  getRandomNumber,
  findHighestNumber,
  highestNumber,
};