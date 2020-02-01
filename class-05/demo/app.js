'use strict';
console.log('it is connected!');


//declare a function without any parameters

function someFunction() {
    console.log('I wish I had some parameters.');
}

//someFunction();


function multiply(num1, num2) {
    console.log('num one is ',num1);
    console.log('num two is ',num2);
    return num1 * num2;
    

}

multiply(2,3);

var resultONe = multiply(2,3);



//Return multiple values from function in an array. 

function circleProps(radius){
    var area = Math.PI * (radius * radius);
    console.log('area', area);
    var circumference = 2 * Math.PI * radius;
    console.log('circ', circumference);

    return [area, circumference];

}


//Anonymous Functions   && Function Expressions


var circleProp = function(radius){
    var area = Math.PI * (radius * radius);
    console.log('area', area);
    var circumference = 2 * Math.PI * radius;
    console.log('circ', circumference);

    return [area, circumference];

}

var circleThree = circleProp(3);


//IIFE's Immediately-Invoked Function Expressions. 



// var checkLogin = (function() {

//     if(userID){
//         alert('Turns our userID is a Truthy value');
//         console.log('User has a valid ID');
//     } else {
//         console.log('Try again');
//     }
// })();



var globalVar = 'universal';

function scoper(parameter) {
    var localVariable = 'I like my encapsulation.';
    console.log('inside the function we can see parameter = ' + parameter);
    console.log('we can also see localVariable ' + localVariable);
    console.log('and we can also see global variable ' + globalVar);

    for(var i = 0; i < 3; i++) {
        console.log('the value of i in the loop is ' + i);
    }
    console.log('can we see i outside the loop?' + i);

}

scoper('argument');


console.log('globally we can see globalVariable ' + globalVar);
console.log('but not the local variable ' + localVariable);
console.log('or the parameter value ' + parameter);





var lotteryArray = [];

function lotteryNumberPicker(){
    //Start by creating array for the numbers

    //Set the first number in the array to be 10
    //lotteryArray[0] = 10;
    //Run 5 times to get five random numbers.
    //So lets use a loop
    //we can write with a for or a while loop. 
    for(var i = 0; i < 5; i++){
      // lotteryArray[i] = Math.ceil(Math.random() * 9);
       //A method on arrays that allows us to put value o the end of arrays called push
        lotteryArray.push(Math.ceil(Math.random() * 99));
    }
    //pick one number and return it. 
   return lotteryArray;
}
