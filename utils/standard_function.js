// DECLARE FUNCTION USING STANDARD FUNCTION DECLARATION
function sum(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
  console.log({
    num1,
    num2,
    num3,
    num4,
  })
  return num1 + num2 + num3 + num4;
}

module.exports = {
  sum
};