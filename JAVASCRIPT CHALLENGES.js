
                        //JAVASCRIPT CHALLENGES

//Q1
var height;
var W;
function(weight,height){
var BMI = weight/(height*height)
return Math.round(BMI)
}

//Q2

if(BMI <18.5){
console.log("Your BMl is <bmi>, so you are underweight.")
}

if(BMI <24.9 & BMI> 18.5 ){
    console.log("Your BMI is <bmi>, so you have a normal weight.")
}

if(BMI > 24.9 ){
    console.log("Your BMI is <bmi>, so you are overweight.")
}

//Q3

var array=[];
function(array){
    return array[Math.floor((Math.random()*array.length))]
}
