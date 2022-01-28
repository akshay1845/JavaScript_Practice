document.write(`<h1>Getter & Setter</h1>`);
class Person{
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    
    display(){
        return this.fname;
    }

    get info(){
        return this.fname
    }
    set info(fname){
        this.fname = fname;
    }
}

let obj1 = new Person("Akshay","Gadher",20);
//calling DISPLAY function
document.write("<b>***<u>calling DISPLAY function</u>***</b><br>");
var display_name = obj1.display();
document.write(`Name = ${display_name} <br><br>`);

//calling Get method
document.write("<b>***<u>calling GET function</u>***</b><br>");

//even if the getter is a method, you do not use parentheses when you want to get the property value.
var get_name = obj1.info;
document.write(`Name = ${get_name} <br><br>`);

//Set name using set function
document.write("<b>***<u>setting the Name using SET function</u>***</b><br>");
obj1.info = "Virat";
document.write(`After setting the value<br> Name = ${obj1.fname}`);
