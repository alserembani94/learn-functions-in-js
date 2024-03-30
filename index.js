const arrowFunction = require('./utils/arrow_function.js');
const callbackFunction = require('./utils/callback_function.js');
const methodInObject = require('./utils/method.js');
const standardFunction = require('./utils/standard_function.js');

// Benefit of import/export
// 1. Modularity - mudah nak plug in/plug out code
// 2. Reusability - boleh guna balik code yang sama
// 3. Readability - senang nak baca code
// 4. Maintainability - senang nak maintain code
// 5. Scalability - boleh scale code dengan lebih mudah

// Standard Function
const mySum = standardFunction.sum(1, 2);
console.log(mySum);