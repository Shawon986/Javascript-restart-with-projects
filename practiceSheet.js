//else-if 

let score = 85;

if(score >= 80 && score <= 100){
    console.log("A+");
}else if(score >= 70 && score < 80){
    console.log("A");
}else if(score >= 60 && score < 70){
    console.log("A-");
}else if(score >= 50 && score < 60){
    console.log("B");
}else if(score >= 40 && score < 50){
    console.log("C");
}else{
    console.log("Fail");
}

//ternary operator

const age = 26;

const isAdult = age >= 18 ? "you are adult" : "you are not adult";
console.log(isAdult);