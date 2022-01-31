//----------------------try & catch ----------------------------
document.write("<h1>try and catch</h1>")
//try...catch only works for runtime errors

// try {
//     {{{{{{{{{{{{   //syntax error that's why script will not run.
//   } 
//   catch (err) {
//     alert("The engine can't understand this code, it's invalid");
//   }

try {
    variable; // error, variable is not defined!
  } catch (err) {
    msg = ""
    msg += (err.name) + " "; // ReferenceError
    msg += (err.message) + " "; // lalala is not defined
    msg += (err.stack) + " "; // ReferenceError: lalala is not defined at (...call stack)
  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    document.write(err); // ReferenceError: lalala is not defined
  }

let json = "{ not valid }";

try {

  let user = JSON.parse(json); // <-- when an error occurs...
  alert( user.name ); // doesn't work

} catch (err) {
  // ...the execution jumps here
  document.write(`${err.name}<br>${err.message}<br>`);
}

// if there is data not available

let json2 = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json2); // <-- no errors
  document.write(user.name) // no name!

} catch (err) {
  document.write(err +"<br>");
}

//--------------------throw--------------------
document.write("<h1>custom throw</h1>")
let json3 = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json3); // <-- no errors
  
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*) we will throw error from here
  }

  document.write( user.name ); //will ignored

} catch (err) {
  document.write( "JSON Error: " + err.message + "<br>"); // JSON Error: Incomplete data: no name
}

//------------------------------finally------------------------------
document.write("<h1>try and catch and finally</h1>")
//finally block will execuate every time whether error occurs or not

try{
    var a = valid;
    document.write(a+"<br>");
} catch(err){
    //this is not going to execuate...
} finally {
    document.write("---FINALLY---<br>");
}

try{
    invalid;
    document.write(a);
} catch(err){
    //this is  going to execuate...
    document.write(err+"<br>");    
} finally {
    document.write("---FINALLY---<br>");
}

//---------------------calculation------------------------
document.write("<h1>DIVIDER</h1>")
let n1 = Number(prompt("Enter no.1",10));
let n2 = Number(prompt("Enter no.2",5));

try{
    if (n2 == 0) {
        throw Error("Number can't be zero<br>");
    }
    else{
        let answer = n1 / n2 ;
        document.write(`${n1} / ${n2} = ${answer} <br>`);
    }
} catch(err){
    if(err instanceof Error){
        document.write(err+"<br>");
    }
    else{
        document.write(err+"br>");
    }
} finally{
    document.write("Calculation is done...<br>")
}
//---------------------onerror----------------------------
//when error is not along with try block then it will raised by onerror if its defined in your code.
document.write("<h1>ONERROR</h1>")
window.onerror = function(message, url, line, col, error) {
    document.write(`${message}\n At ${line}:${col} of ${url}`);
  };

  function readData() {
    badFunc(); // Whoops, something went wrong!
  }

  readData();