// create your loops here.
function whileLoop1() {
  const newArray = [];
  let n = 0;
  while (n < 10) {
    newArray.push(n);
    n++;
  }
  return newArray;
}
console.log(`whileLoop1 Output: `, whileLoop1());

function whileLoop2() {
  const newArray = [];
  let n = 0;
  let x = 0;
  while (n < 10) {
    newArray.push(x);
    n++;
    x += 2;
  }
  return newArray;
}
console.log(`WhileLoop2 Output: `, whileLoop2());

function forLoop1() {
  const newArray = [];
  for (let i = 0; i < 10; i++) {
    newArray.push(i);
  }
  return newArray;
}
console.log(`forLoop1 output:`, forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log(`Time till explosion ${i}!`);
  }
}
forLoop2();

function forInLoop1(object) {
  const newArray = [];
  for (const property in object) {
    newArray.push(property);
  }
  return newArray;
}

const object1 = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log(`output for forInLoop1:`, forInLoop1(object1));

function forInLoop2(object) {
  const newArray = [];
  for (const property in object) {
    newArray.push(object[property]);
  }
  return newArray;
}
console.log(`output for forInLoop2:`, forInLoop2(object1));
