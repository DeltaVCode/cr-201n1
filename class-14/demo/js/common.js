'use strict'; 


var allPizzas = [];
//add parameter times clicked
function Pizza(name, imageUrl, timesClicked) {
  this.name = name;
  this.imageUrl = imageUrl;
  if(timesClicked){
    this.timesClicked = timesClicked;
  } else {
    this.timesClicked = 0;
  }

  allPizzas.push(this);
}


//////////////New ////////////////////////////////////////////////////////////////////////
//Return a string representation of 
//Because this is a proto all instances have access to this 
Pizza.prototype.toString = function(){
  return `${this.name} pizza, clicked ${this.timesClicked} times`; 
}

///////////////////////////////////////////////////////////////////////////////////////////

function getPizzaArray(nameOfThePropertyIWant){
  var answer = [];
  for(var i = 0; i < allPizzas.length; i++){
    answer[i] = allPizzas[i][nameOfThePropertyIWant];
  }
  return answer;
}


//Do a local storage Check to see if this data is already in local storage. 
//1. is there saved data to create pizza instances?
var savedPizzaString = localStorage.getItem('savedPizza');
if(savedPizzaString){
//2. if true, use that data
var arrayOfNotPizza = JSON.parse(savedPizzaString);

//turn string into pizza
for(var i = 0; i < arrayOfNotPizza.length; i++){
  new Pizza(arrayOfNotPizza[i].name, arrayOfNotPizza[i].imageUrl, arrayOfNotPizza[i].timesClicked);
}




} else {
//3. else create it this way
// actually create our Pizza's
new Pizza('Brick Oven Pizza', 'images/brickOvenPizza.jpeg');
new Pizza('Calzone', 'images/calzonePizza.jpeg');
new Pizza('Chicago Deep Dish', 'images/chicagoPizza.jpeg');
new Pizza('Chicago Pizza and Oven Grinder', 'images/cpoGinderPizza.jpeg');
new Pizza('Detroit Style', 'images/detroitPizza.jpeg');
new Pizza('Papa Vito\'s Thin', 'images/mwDeluxePizzaThinCrust.jpg');
new Pizza('New York Thin', 'images/newYorkPizza.jpeg');
new Pizza('Detroit Style', 'images/sgDansHtossedMeatLovPizza.jpg');
}



