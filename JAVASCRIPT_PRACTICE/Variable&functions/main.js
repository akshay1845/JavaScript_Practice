//==============VAR==============
document.write("<h1>var keyword</h1 >");

var x = 10;
document.write(" here, x is global object"+ "<br>");
document.write("before block code " + " value of x = " + x + "<br>");
{
    var x = 30;
}
document.write("before block code " + " value of x = " + x + "<br>");

document.write("decalred value with <b>var keyword</b>, display last updated value!!!")

//==============LET==============
document.write("<h1>let keyword</h1 >");
let y;
document.write(" here, y is global object"+ "<br>");
y=10;
document.write("before block code " + " value of y = " + y + "<br>");

{
    let y=30;
}
document.write("after block code " + " value of y = " + y + "<br>");

document.write("decalred value with <b>var keyword</b>, let scope is limited for the block!!!<br>");
document.write("======================================================================================")

//==============FUNCTIONS==============
document.write("<h1><u>FUNCTION</u></h1 >");
//define find_roots
function find_roots(a,b,c){
    var d = b * b - 4 * a * c;
    let roots;
    if(d>0){
       var  root1 = (-1*b + Math.sqrt(d))/2*a;
       var  root2 = (-1*b - Math.sqrt(d))/2*a;
       roots = root1.toString() + " & " + root2 .toString();
       return roots;
    }
    else{
        document.write("Roots are not possible!");
    }
}

//define factorial
function factorial(n){
    let fact = 1;
    for(let i=1; i<=n; ++i){
        fact *= i;
    }
    return fact;
}

//define fibonacci
function fibonacci(range){
    let series=" ";
    let a=0;
    let b=1;
    let ans;
    if(range<0){
        document.write("Enter valid Entry!!!")
    }
    else{
        for(let i=0; i<=range; ++i){
            series += a.toString() + " ";
            ans = a + b;
            a = b;
            b = ans;
        }
        return series;
    }
}

//calling find_roots
document.write("<h2>quartic equation</h2><br>" + "Your equation is somthing like...ax^2 + bx +c = 0<br>");
let a_x=3, b_x=4, c_x=-1;
let ans_root = find_roots(a_x,b_x,c_x);
document.write("Roots are : " + ans_root);
document.write("<h2>Factorial</h2><br>");

//calling factorial
let fact = factorial(10);
document.write("Factoral Of 10 is : " + fact);

//calling fibonacci
document.write("<h2>fibonacci series</h2>");
let series = fibonacci(10);
document.write("Fibonacci series: " + series);

