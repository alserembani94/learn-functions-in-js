const students = [
  {
    "name": "Lera",
    "age": 15,
    "class": "64049 Millie Points",
    "hasTextbook": "false"
  },
  {
    "name": "Cristina",
    "age": 16,
    "class": "285 Hamill Cape",
    "hasTextbook": "true"
  },
  {
    "name": "Karley",
    "age": 17,
    "class": "5030 Glover Flat",
    "hasTextbook": "false"
  },
  {
    "name": "Jarvis",
    "age": 16,
    "class": "60768 Armstrong Crossroad",
    "hasTextbook": "false"
  },
  {
    "name": "Elizabeth",
    "age": 13,
    "class": "8131 Hayley Centers",
    "hasTextbook": "true"
  }
];

// READABILITY - KEBOLEHBACAAN

function hasTextbook(student) {
  return student.hasTextbook === "true";
}
const studentsWithTextbook = students.filter(hasTextbook);


// ABSTRACTION
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sum(num1 = 0, num2 = 0, num3 = 0) {
  console.log({
    num1,
    num2,
    num3
  })
  return num1 + num2 + num3;
}

// CALLBACK FUNCTION - FUNCTION AS PARAMETER FOR ANOTHER FUNCTION
const randomSum = sum(randomNumber(1, 10), randomNumber(1, 10), randomNumber(1, 10));

console.log(randomSum);

const cat = {
  name: "Kitty",
  age: 3,
  color: "black",
  // METHOD - FUNCTION INSIDE AN OBJECT
  meow: function () {
    console.log("Meow!");
  }
};

cat.meow();

// const sum1 = sum(5, 10, 4);
// const sum2 = sum(2, 9);
// const sum3 = sum(1);

// console.log(sum1);
// console.log(sum2);
// console.log(sum3);