//------------------MAP------------------
document.write("<h1>MAP</h1>");

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

let myMap = new Map();

myMap.set("name", "Akshay")
    .set("Age", 20)
    .set(true, "boolean")
    .set(18, "integer");

document.write(myMap + "<br>");
for(let entry of myMap){
    document.write("===>" +entry + "<br>");
}

// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
document.write(myMap.get(18) + "<br>");

// map.has(key) – returns true if the key exists, false otherwise.
document.write(myMap.has("akshay")+"<br>");
document.write(myMap.has(true)+"<br>");

// map.delete(key) – removes the value by the key.
myMap.delete("Age");
for(let entry of myMap){
    document.write("===>" + entry + "<br>");
}

// map.size – returns the current element count.
document.write(`size of map = ${myMap.size} <br>`);

// map.clear() – removes everything from the map.
myMap.clear();
for(let entry of myMap){
    document.write("===>" +entry + "<br>");
}

let obj = {o_name : "object"};
let obj2 = {age : 18};

let obj_map = new Map();
obj_map.set(obj, "hello");
obj_map.set(obj2, "hello2");

// document.write(obj_map.get(obj))
for(let entry of obj_map){
    document.write("===>" + entry + "<br>");
}

// Object.entries: Map from Object

let info = {fname : "Akshay",
    lname : "Gadher"}
let info_map = new Map(Object.entries(info));
document.write(" This is Map from Object<br>")
info_map.forEach((value,key) => document.write(` =>${key} = ${value} <br>`))

// Object.fromEntries: Object from Map
document.write(" This is object from Map<br>")

info_map.set("age",20);

let mapTOobj = Object.fromEntries(info_map);

document.write(`Age = ${mapTOobj.age} <br>`);;

//------------------SET------------------
document.write("<h1>SET</h1>");

// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

let mySet = new Set();
mySet.add(45);
mySet.add("45");
mySet.add("Rohit");
mySet.add(45);
mySet.add({batsman : "virat"});

for(let x of mySet){
    document.write(`===> ${x} <br>`)
}

document.write(`size of set = ${mySet.size}`);

//------------------Practice Problems------------------
document.write("<h1>Practice Problems</h1>")
/*Filter unique array members

Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.*/
document.write("<h2>1.Filter unique array members :</h2>")

let mulValues = [10,45,"akshay",12,12,"akshay","virat",45,45];

function unique(arr){
    return Array.from(new Set(mulValues));
}

document.write(`Before : ${mulValues} <br> After : ${unique(mulValues)}`);


//-----------------------------------------------------------------------------

document.write("<h2>2.Filter anagrams :</h2>")
/*Anagrams are words that have the same number of same letters, but in different order.

For instance:
nap - pan
ear - are - era
cheaters - hectares - teachers.*/

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let arr_map = new Map();

for(let x of arr){
    let word = x.toLowerCase()
                .split('')
                .sort()
                .join();

    arr_map.set(word, x);    
}
document.write(Array.from(arr_map.values()));