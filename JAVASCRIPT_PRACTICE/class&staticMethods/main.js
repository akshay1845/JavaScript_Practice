//=================simple class=================
document.write("<h2>Simple Class</h2>")
class student{
    constructor(name,id,age){
        this.name = name;
        this.age = age;
        this.id = id;
    }
    //-----------static method-------------
    static greetings(){
        document.write("<h3>Welcome to alpha Institute!!!</h3>");
    }
    display(){
        document.write("student Info.:<br>" + " Name = " + this.name + " <br>Id = " + this.id +"<br>Age = " + this.age + "<br><br>");
    }

    static greetings(){
        document.write("<h3>Welcome to alpha Institute!!!</h3>");
    }
}

let obj = new student("Akshay", "18CP0009", 20);
let obj2 = new student("Darshak", "18CP0008", 20);
obj.display(); 
obj2.display();

//==================Inheritence==================

document.write("<h2>Inheritence</h2>");
class updated_student extends student{
    constructor(name,id,age,course,cpi){
        super(name,id,age);
        this.course = course;
        this.cpi = cpi;
    }
    show_whole(){
        this.display();
         document.write("Course = " + this.course + "<br>CPI = " + this.cpi + "<br><br>");
    }
}

let o1 = new updated_student("Akshay", "18CP0009", 20 , "Computer", 7.63);
let o2 = new updated_student("Darshak", "18CP0008", 20,"Computer", 8.53);
o1.show_whole(); 
o2.show_whole();

document.write("<h2>Static Method</h2>");
document.write("static method is called by only class name not by Objects.<br>If we try, then will Get an Error!!!")

student.greetings();

//obj1.greetings();    you will get an Error...