console.log("forEach 1 ttttttttttttttttttttttttttt");

const persons = [
  { firstName: "John", lastName: "Doe", age: 32 },
  { firstName: "Jane", lastName: "Doe", age: 23 },
];

let maxAge = persons[0].age; // Assume the first person has the max age
let oldestPerson = persons[0]; // Assume the first person is the oldest

persons.forEach((person) => {
  if (person.age > maxAge) {
    maxAge = person.age; // Update maxAge if the current person's age is larger
    oldestPerson = person; // Update oldestPerson
  }
});

console.log(
  `The oldest person is: ${oldestPerson.firstName} ${oldestPerson.lastName}, Age: ${oldestPerson.age}`
);
console.log(
  "  forEach 2 ........................................................"
);
//---------------------------------------------------------------

const persones = [
  { firstName: "John", lastName: "Doe", age: 32 },
  { firstName: "Jane", lastName: "Doe", age: 23 },
];

persones.forEach((person, index) => {
  if (index % 2 === 1) {
    // Log every second element (index 1, 3, 5, etc.)
    console.log(person);
  }
});

console.log(
  " forEach 3........................................................"
);
//---------------------------------------------------------------

// ß3äääääääääääääääääääääääääääääääääääääääääääääääääääääääää
const perso = [
  { firstName: "John", lastName: "Doe", age: 32 },
  { firstName: "Jane", lastName: "Doe", age: 23 },
];

perso.forEach((perso) => {
  console.log(`${perso.firstName} ${perso.lastName}`);
});
console.log("filtermmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
// filtermmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

const pers = [
  { firstName: "John", lastName: "Doe", age: 32 },
  { firstName: "Jane", lastName: "Doe", age: 23 },
];

// Using Array.filter() to create a new array with persons under 30
const personsUnder30 = pers.filter((pers) => pers.age < 30);

// Logging the new array
console.log(personsUnder30);

console.log("sort 1 bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");

// hhhhhhh sort hhhhhhhhhhhhh

// lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll

const personses = [
  { firstName: "John", lastName: "Doe", age: 32 },
  { firstName: "Jane", lastName: "Doe", age: 23 },
];

// Using Array.sort() to sort the persons array by age in ascending order
const sortedByAge = personses.sort((a, b) => a.age - b.age);

// The maximum value will be the last element of the sorted array
const maxAgePerson = sortedByAge[sortedByAge.length - 1];

// Logging the person with the maximum age
console.log(maxAgePerson);

console.log("sort  2 bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

const personsn = [
  { firstName: "John", lastName: "Doe", age: 32 },
  { firstName: "Jane", lastName: "Doe", age: 23 },
];

// Using Array.sort() to create a new array sorted by age in ascending order
const personsSortedByAge = personsn.sort((a, b) => a.age - b.age);

// Logging the sorted array
console.log(personsSortedByAge);

console.log("  MAP _____pppppppppppppppppppppppppppppp");
// input data
const personEs = [
  { firstName: "John", lastName: "Doe", age: 32 },
  { firstName: "Jane", lastName: "Doe", age: 23 },
];

// Using Array.map() to add the fullName property to each object
const personsWithFullName = personEs.map((perSon) => {
  return {
    ...perSon, // Spread the original person object
    fullName: `${perSon.firstName} ${perSon.lastName}`, // Add fullName property
  };
});

console.log(personsWithFullName);

// Output data should look like:
// [
//     { firstName: 'John', lastName: 'Doe', age: 32, fullName: 'John Doe' },
//     { firstName: 'Jane', lastName: 'Doe', age: 23, fullName: 'Jane Doe' },
// ]

//…reduce………..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.
console.log("REDUCE ##############################################");
const personsN = [
  { firstName: "John", lastName: "Doe", age: 32 },
  { firstName: "Jane", lastName: "Doe", age: 23 },
];

// Using Array.reduce() to calculate the sum of ages
const totalAge = personsN.reduce((sum, pErson) => sum + pErson.age, 0);

// Calculating the average age
const averageAge = totalAge / personsN.length;

// Logging the average age
console.log(averageAge);
