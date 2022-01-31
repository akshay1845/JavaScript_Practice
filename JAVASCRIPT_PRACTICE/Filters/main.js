document.write("<h1><u>Filters</u></h1>");

let arr = [45,18,87,14,2,63,7,81,25,5,97];

document.write("<h2>1.sum of all array elements</h2>");

sum = 0;
// for(let i=0 ; i<arr.length; ++i){
//     sum += arr[i];
// }
arr.filter((val) =>  sum += val);

document.write(`Sum = ${sum} <br>`);

//----------------------------------------------------------------------------
document.write("<h2>2.get elements greater than 50</h2>");

document.write(` greater than 50 =>${arr.filter((val) => val>50)} <br>`)

//-----------------------------------------------------------------------------
document.write("<h2>3.Find Prime Numbers</h2>");

function prime(no){
    for(let i=2; i<no; ++i){
            if(no % i == 0){
            return false;
        }
    }
    return no > 1;
}
document.write(`Prime No. in array=> ${arr.filter(prime)} <br>`);


document.write("<h2>4.Find String Values from the array.</h2>");
let info = ["akshay", 18, "virat", true, "darshak", "rohit", "rahul", 40];
// for(let x of info){
//     if(typeof x == "string"){
//         document.write(x)
//     }
// }
let names = info.filter((val) =>  typeof val == "string");
document.write(`Names ==> ${names}`)

//-------------------------------------------------------------------------------------
document.write(`<h2>5.Follwing is players' details....</h2>
 players= [
    {name: "Virat Kohli", category: "Batsman", start: 2009, avg: 59.06},<br>
    {name: "Rohit sharma", category: "Batsman", start: 2007, avg: 45.23},<br>
    {name: "Jasprit Bumrah", category: "Bowler", start: 2015, avg: 28.56},<br>
    {name: "Hardik Pandya", category: "All-Rounder", start: 2015, avg: 30.18},<br>
    {name: "Rishabh Pant", category: "wiket-keeper", start: 2017, avg: 42.63},<br>
    {name: "Y Chahal", category: "bowler", start: 2016, avg: 15.23},<br>
    {name: "KL Rahul", category: "wiket-keeper", start: 2016, avg: 41.63},<br>
  ];<br>
`);

const players= [
    {name: "Virat Kohli", category: "Batsman", start: 2009, avg: 59.06},
    {name: "Rohit sharma", category: "Batsman", start: 2007, avg: 45.23},
    {name: "Jasprit Bumrah", category: "Bowler", start: 2015, avg: 28.56},
    {name: "Hardik Pandya", category: "All-Rounder", start: 2015, avg: 30.18},
    {name: "Rishabh Pant", category: "wiket-keeper", start: 2017, avg: 42.63},
    {name: "Y Chahal", category: "Bowler", start: 2016, avg: 15.23},
    {name: "KL Rahul", category: "wiket-keeper", start: 2016, avg: 41.63},
];

let batsman = players.filter(bat => bat.category === "Batsman");
let bowler = players.filter(bat => bat.category === "Bowler");
let all_rounder = players.filter(bat => bat.category === "All-Rounder");
let wk = players.filter(bat => bat.category === "wiket-keeper");

document.write(`<h3>Batsman</h3> ${Object.values(batsman)} <br>
                <h3>Bowler</h3> ${bowler} <br>
                <h3>Wiket-keeper</h3> ${wk} <br>
                <h3>All-Rounder</h3> ${all_rounder} <br>`
                );

let aveg = players.filter(avg => avg.avg >40);

document.write(`<h3>Average above 40:</h3> ${Object.values(aveg)} <br>`);