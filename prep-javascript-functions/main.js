function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const addTwoNumbersResult = addTwoNumbers(2, 2);
console.log(`The result of addTwoNumbers: `, addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertHoursToMinutes(2);
console.log(`The result in minutes: `, minutes);

function getGreeting(name) {
  return `Hello ` + name + `!`;
}

const greetings = getGreeting(`World`);
console.log(`greeting is: `, greetings);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const math = addAndMultiplyBy5(10, 5);
console.log(`The math result is:`, math);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const division = multiplyAndDivideBy5(35, 10);
console.log(`The division is: `, division);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const subtraction = subtractTwoNumbers(22, 7);
console.log(`The subtraction is: `, subtraction);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
const cir = getCircleCircumference(5);
console.log(`The circumference is: `, cir);

function getFullName(first, last) {
  return first + ` ` + last;
}
const fullName = getFullName(`Ragad`, `Mohammed`);
console.log(`The full name is: `, fullName);

function cube(num) {
  return num * num * num;
}

const cubeValue = cube(5);
console.log(`The cube of the value is:`, cubeValue);
