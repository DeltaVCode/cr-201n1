'use strict';
console.log('js linked!');
// add in the first demo, half before tracking the total images look at notes. 
var imageElements = document.getElementsByTagName('img');

var pizzaIndex1 = 0;
var pizzaIndex2 = 1;
// Pizza constructor

var allPizzas = [];

function Pizza(name, imageUrl) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = 0;
  allPizzas.push(this);
}

function getPizzaArray(nameOfThePropertyIWant){
  var answer = [];
  for(var i = 0; i < allPizzas.length; i++){
    answer[i] = allPizzas[i][nameOfThePropertyIWant];
  }
  return answer;
}



// actually create our Pizza's
new Pizza('Brick Oven Pizza', 'images/brickOvenPizza.jpeg');
new Pizza('Calzone', 'images/calzonePizza.jpeg');
new Pizza('Chicago Deep Dish', 'images/chicagoPizza.jpeg');
new Pizza('Chicago Pizza and Oven Grinder', 'images/cpoGinderPizza.jpeg');
new Pizza('Detroit Style', 'images/detroitPizza.jpeg');
new Pizza('Papa Vito\'s Thin', 'images/mwDeluxePizzaThinCrust.jpg');
new Pizza('New York Thin', 'images/newYorkPizza.jpeg');
new Pizza('Detroit Style', 'images/sgDansHtossedMeatLovPizza.jpg');

var totalClicks = 0;
// create a function to store clicks

function imageWasClicked(event) {

  console.log('an image was clicked');
 // debugger;
  totalClicks++;
  if(event.srcElement.id === '1') {
    allPizzas[pizzaIndex1].timesClicked++;
  } else if (event.srcElement.id === '2') {
    allPizzas[pizzaIndex2].timesClicked++;
  }

  // pick from random Pizza's to display
  var nextPizzaIndex1 = Math.floor(Math.random() * allPizzas.length);
  //So, while the pizza image we have stored at the nextPizzaIndex, is equal to the pizza at index 1 or index 2, it will continue to select a random image for the nextPizzaIndex1. Same happens for the next random image selection, this ensures that we don't get an image duplicate in on the page, and that we dont see it again on the next rotation. 
  while((nextPizzaIndex1 === pizzaIndex1) || (nextPizzaIndex1 === pizzaIndex2)) {
    nextPizzaIndex1 = Math.floor(Math.random() * allPizzas.length);
  }
  var nextPizzaIndex2 = Math.floor(Math.random() * allPizzas.length);
  //Compares the second image at index 1, compares the next image at index 2 with the current image at 2. Compare next pic at 2 with the next pic, as to avoid duplicates on page.
  while((nextPizzaIndex2 === pizzaIndex1) || (nextPizzaIndex2 === pizzaIndex2) || (nextPizzaIndex2 === nextPizzaIndex1)) {
    nextPizzaIndex2 = Math.floor(Math.random() * allPizzas.length);
  }
  pizzaIndex1 = nextPizzaIndex1;
  pizzaIndex2 = nextPizzaIndex2;

  // display the Pizza's
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement
  imageElements[0].src = allPizzas[pizzaIndex1].imageUrl;
  imageElements[1].src = allPizzas[pizzaIndex2].imageUrl;

  if(totalClicks >= 5) {
    // // we made it to 5 clicks
    var footerEl = document.getElementsByTagName('footer')[0];
    // // loop through all the Pizza's and display how many times each one was picked
    if(footerEl.firstElementChild){
      footerEl.firstElementChild.remove();
    }
    // var createPara = document.createElement('p');
    // createPara.textContent = 'You picked things!';
    // footerEl.appendChild(createPara);

  for (var i = 0; i < imageElements.length; i++) {
    imageElements[i].removeEventListener('click', imageWasClicked);
  }



  // chart code thanks to https://www.chartjs.org/docs/latest/
  var ctx = document.getElementById('resultsChart').getContext('2d');
  // eslint-disable-next-line no-undef
  new Chart(ctx, {
    type: 'bar',
    data: {
      // what does labels do?
      labels: getPizzaArray('name'),
      // what does datasets do?
      // it's an array of objects
      datasets: [{
        // what does this label do?
        // key, legend
        label: '# of Votes',
        // what does this data do?
        // actually the values in the chart
        data: getPizzaArray('timesClicked'),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      }
    }
  });

  }
}

// set up our images to call that function when there is a click
// what element, which event, what to do




for (var i = 0; i < imageElements.length; i++) {
  imageElements[i].addEventListener('click', imageWasClicked);
}

