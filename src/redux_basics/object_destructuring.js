// object
const person = {name: 'test',
                age: 24,
                location: {city: 'Tampa', temp:35 }}

console.log(`${person.name} is of age ${person.age}. Livivng in ${person.location.city}`)

// object destructuring and names aliasing
const {name: fName, age} = person;
console.log(`${fName} is of age ${age}. 
Livivng in ${person.location.city}`)

// setting defaults
const {city='tx', temp} = person.location;
console.log(`${fName} is of age ${age}. 
Livivng in ${city}`)

//---------------Array destructuring---
const address = ['104st', 'dallas', 'tx', {apt:[12, 32]}];
console.log(`living in strret ${address[0]} in city ${address[1]}
            apartment ${address[3].apt[0]} `);
 
// the same of aliasing attribute names and 
// passng defaults in object
const [street, cityy, ,] = address;
console.log(`living in strret ${street} in city ${cityy}`);
const [apt1, apt2]= address[3].apt;
console.log("apt "+apt2)
