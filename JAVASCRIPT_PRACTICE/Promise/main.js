document.write("<h1>PROMISE</h1>");

document.write("<h2>simple</h2>");

// resolve(value) — if the job is finished successfully, with result value.
// reject(error) — if an error has occurred, error is the error object.

let promise1 = new Promise(function (resolve, reject) {
    let x = 10;
    if (x == 10) {
        resolve("done");
    } else {
        reject("error");
    }
});

promise1.then(
    function (value) { document.write(value + "<br>"); },
    function (error) { document.write(error + "<br>"); });




document.write("<h2>set timeout after 2 seconds.</h2>");

let time = new Promise((resolve, reject) => {
    setTimeout(() => resolve(alert("Hello friend!!!!")), 2000);
});

//The executor should call only one resolve or one reject. 
// All further calls of resolve and reject are ignored:
let p1 = new Promise(function (resolve, reject) {
    resolve(document.write("p1-promise<br>"));

    reject(new Error("…")); // ignored
    setTimeout(() => resolve("…")); // ignored
});

//--------------------------then----------------------------------------
document.write("<h2>then</h2>")
let promise2 = new Promise((resolve, reject) => {
    let x = 0;
    if (x == 10) {
        resolve("done");
    } else {
        reject("error");
    }
});

promise2.then(
    (value) => { document.write(value + "<br>"); }, (error) => { document.write(error + "<br>"); });

//--------------------------catch----------------------------------------
document.write("<h2>catch</h2>")
let x2 = new Promise((resolve, reject) => {
    let x = 0;
    if (x == 10) {
        resolve("done");
    } else {
        reject("error");
    }
});


x2.then((value) => { document.write(value + "<br>"); })
    .catch((error) => { document.write(error + "<br>"); })

//--------------------------finally----------------------------------------
//this is excuated in every conditions.(not depend on resove and reject)
document.write("<h2>finally</h2>")
let x1 = new Promise((resolve, reject) => {
    let x = 0;
    if (x == 10) {
        resolve("done");
    } else {
        reject("error");
    }
});

x1.then(
    (value) => { document.write(value + "<br>"); })
    .catch((error) => { document.write(error + "<br>"); })
    .finally(() => document.write("FINALLY"));

// Promise.all(document.write("****"))

//------------------promise chaining--------------------
new Promise((resolve, reject) => {

    setTimeout(() => resolve(1), 1000); // (*)
  
  }).then((result) =>{ // (**)
  
    alert(result); // 1
    return result * 2;
  
  }).then((result)=> { // (***)
  
    alert(result); // 2
    return result * 2;
  
  }).then((result)=> {
  
    alert(result); // 4
    return result * 2;
  
  }).then((result)=>{
    alert(result);//8
    return result * 2;
  
  });