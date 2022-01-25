let pattern1 = "<h2>Pattern-1</h2>";
for(let i=0; i<=5; ++i){
    for(let j = 0; j<=5; ++j)
        pattern1 += " * ";
    pattern1+="<br>";
}
pattern1 += "---------------------------------------<br>";
for(let i=0; i<=5; ++i){
    for(let j = 0; j<=5; ++j){
        if(i==0 || j==0 || i==5 || j==5){
            pattern1 += " * "; 
        }
        else{
            pattern1 += "  &nbsp&nbsp  "; 
        }
    }
    pattern1+="<br>";
}
pattern1 += "---------------------------------------<br>";
for(let i=0; i<=5; ++i){
    for(let j = 0; j<=5; ++j){
        if(i==0 || j==0 || i==5 || j==5 || i==j){
            pattern1 += " * "; 
        }
        else{
            pattern1 += "  &nbsp&nbsp  "; 
        }
    }
    pattern1+="<br>";
}
document.getElementById("pattern-1").innerHTML = pattern1;

let pattern2 = "<h2>Pattern-2</h2>";
for(let i=0; i<=5; ++i){
    for(let j = 0; j<=i; ++j)
        pattern2 += " * ";
    pattern2+="<br>";
}
pattern2 += "---------------------------------------<br>";
for(let i=0; i<=5; ++i){
    for(let s=5; s>=i; --s){
        pattern2 += " &nbsp&nbsp";
    }
    for(let j = 0; j<=i; ++j)
        pattern2 += " * ";
    pattern2+="<br>";
}
pattern2 += "---------------------------------------<br>";
for(let i=0; i<=5; ++i){
    for(let s=5; s>=i; --s){
        pattern2 += " &nbsp";
    }
    for(let j = 0; j<=i; ++j)
        pattern2 += " * ";
    pattern2+="<br>";
}
pattern2 += "---------------------------------------<br>";
for(let i=1; i<=5; ++i){
    for(let j = 1; j<=i; ++j)
        pattern2 += " "+ i + " ";
    pattern2+="<br>";
}
pattern2 += "---------------------------------------<br>";
for(let i=1; i<=5; ++i){
    for(let j = 1; j<=i; ++j)
        pattern2 += " "+ j + " ";
    pattern2+="<br>";
}
document.getElementById("pattern-2").innerHTML = pattern2;

let pattern3 = "<h2>Pattern-3</h2>";
for(let i=0; i<=5; ++i){
    for(let j = i; j<=5; ++j)
        pattern3 += " * ";
    pattern3+="<br>";
}
pattern3 += "---------------------------------------<br>";
for(let i=0; i<=5; ++i){
    for(let s = 0; s<=i; ++s){
        pattern3+= " &nbsp&nbsp";
    }
    for(let j = i; j<=5; ++j)
        pattern3 += " * ";
    pattern3+="<br>";
}
pattern3 += "---------------------------------------<br>";
for(let i=0; i<=5; ++i){
    for(let s = 0; s<=i; ++s){
        pattern3+= "&nbsp";
    }
    for(let j = i; j<=5; ++j)
        pattern3 += " * ";
    pattern3+="<br>";
}
document.getElementById("pattern-3").innerHTML = pattern3;

let pattern4 = "<h2>pattern-4</h2>";
let counter = 1;
for(let i=0; i<=5; ++i){
    for(let j = 0; j<=i; ++j){
        pattern4 += " " + counter + " ";
        counter++;
    }
    pattern4+="<br>"
}
pattern4 += "---------------------------------------<br>";
for(let i=0; i<=5; ++i){
    let counter1=1;
    for(let j = 0; j<=i; ++j){
        pattern4 += " " + counter1 + " ";
        counter1++;
    }
    pattern4+="<br>"
}
document.getElementById("pattern-4").innerHTML = pattern4;

let pattern5 = "<h2>Pattern-5</h2>";
for(let i=0; i<5; ++i){
    for(let j=0; j<=i; ++j){
        if(i%2 == 0){
            pattern5 += " 0 ";
        }
        else{
            pattern5 += " 1 ";
        }
    }
    pattern5 += "<br>";
}
document.getElementById("pattern-5").innerHTML = pattern5;



