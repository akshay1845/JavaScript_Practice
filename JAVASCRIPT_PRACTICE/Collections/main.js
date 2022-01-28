//----------------SET----------------
document.write(`<h1>Map & Set</h1>`);

document.write("<h2>Set and WeakSet</h2>")

let my_array = [9,18,23,43,52,96];
let my_set = new Set(my_array);

my_set.add('100');
my_set.add({a: 1, b: 2});
my_set.delete(22);
my_set.add('100');
my_set.add('200');

my_set.forEach(val => document.write(`${val} <br>`));


let studentWeakSet = new WeakSet();

let student1 = {
  name: 'Ajay',
  id: 'cp005'
}
//add method
studentWeakSet.add(student1);

let student2 = {
  name: 'John',
  id: 'ce052'
}

studentWeakSet.add(student2);

let student3 = {
    name: 'Raj',
    id: 'pe078'
}

studentWeakSet.add(student3);
console.log(studentWeakSet);

//has method
document.write(studentWeakSet.has(student2));
//delete method
studentWeakSet.delete(student2);
document.write(studentWeakSet.has(student2));

console.log(studentWeakSet);


//--------------MAP---------------
const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Create array of company names
const companyNames = companies.map(function(company) {
  return company.name;
});

const testMap = companies.map(function(company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});

const testMap2 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);

let carWeakMap = new WeakMap();

let key1 = {
  id: 1
}

let car1 = {
  make: 'Honda',
  model: 'Civic'
}

let key2 = {
  id: 2
}

let car2 = {
  make: 'Toyota',
  model: 'Camry'
}

carWeakMap.set(key1, car1);
carWeakMap.set(key2, car2);

carWeakMap.delete(key1);
console.log(carWeakMap);