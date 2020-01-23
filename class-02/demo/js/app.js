'use strict';
// use strict is almost alwayst the first line of our js files
console.log('It is working!');



var userName = prompt('What is your name?');
    console.log(userName);
alert('Hello world, I mean ' + userName);

var lowerCaseUserName = userName.toLowerCase();

//Conditions let's us use if , else, to run different pieces of code in different senarios. 

if(lowerCaseUserName  === 'craig')
{
    alert('Welcome back, you cool coder person ' + userName);
} else {
    alert('Welcome back!');
}


