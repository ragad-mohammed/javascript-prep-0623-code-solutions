const person = {
  firstName: `Ragad`,
  lastName: `Mohammed`,
  hobby: `Reading`,
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log(`The person's name is: `, fullName);

person.job = `Engineer`;
console.log(`The person's current job is: `, person.job);

person[`previousJob`] = `Gamer`;
console.log(`The person's previous job is: `, person[`previousJob`]);

console.log(`The complete person's object: `, person);
