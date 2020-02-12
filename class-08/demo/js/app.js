'use strict';
console.log('It is connected....');
// Problem Domain: the Cedar Rapids Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.
//Each Kitten's profile should have:  Name, Breed, gender, random age assigned, a list of what they like, an image, is good with kids, is good with dogs, is good with other animals 

//TODO: Dynamically, generate kitten objects using form data.

// Constructor!
// Constructor names tend to be a singular noun
// Take in values that we want as parameters

// create a Pet factory
function Pet(name, breed, weight, interestWords, imageName, isGoodWithKids, isGoodWithDogs, isGoodWithCats) {
    // Inside constructor, set up the properties we want for objects created with this constructor
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.age = this.getAge();
    // set key/value pairs on the new object using contextual this
    this.interestWords = interestWords;
    this.imageName = imageName;
    // name of parameter and name of property can be the same or different
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithCats = isGoodWithCats;
  }


// Pet.prototype.functionName = function(any, parameters, go, here)
// Now, any pet created with the Pet constructor will be able to call this method
// And by using contextual this, we can access the descriptionWords of that specific pet object
Pet.prototype.getInterests = function() {
    var randomIndex = Math.floor(Math.random() * this.interestWords.length);
    return this.interestWords[randomIndex];
  };
  

Pet.prototype.getAge = function() {
  this.age = randomAge(3, 12) + ' months';
};


function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}




////////////////// Create DOM elements and render in html///////////////////////////

Pet.prototype.render = function() {
//create new element, The "Parent"  
var parentElement = document.getElementById('pet-profiles');

//Now creat the child elements; article, h2, p, ul, li, interests, image. 

//Create Article
var article = document.createElement('article');
parentElement.appendChild(article);

//Create h2
var h2 = document.createElement('h2');
h2.textContent = this.name;
article.appendChild(h2);

//Create p
var petParagraph = document.createElement('p');
petParagraph.textContent = 'DB is adorable, and is ' + this.age + ' old.';
article.appendChild(petParagraph);

//Create ul
var ul = document.createElement('ul');
article.appendChild(ul);
for(var i = 0; i < this.interestWords.length; i++){
    //Create li
    var li = document.createElement('li');
    //Fill the lists
    li.textContent = this.interestWords[i];
    ul.appendChild(li);
}

// Add a prototype method to render a pet to the table
// Because it's a prototype method, all pet instances will be able to call this method

    var animalTable = document.getElementById('animal-table');
  
    // Create the tr and the td's to hold this pet's data
    var petRow = document.createElement('tr');

    // create name td, add it to the row
    var nameCell = document.createElement('td');
    nameCell.textContent = this.name;
    petRow.appendChild(nameCell);

    // create breed td, add it to the row
    var breedCell = document.createElement('td');
    breedCell.textContent = this.breed;
    petRow.appendChild(breedCell);
  
    // create weight td, add it to the row
    var weightCell = document.createElement('td');
    weightCell.textContent = this.weight;
    petRow.appendChild(weightCell);
  
    // also add description
    var descriptionCell = document.createElement('td');
    descriptionCell.textContent = this.interestWords;
    petRow.appendChild(descriptionCell);
  
    // add to page by appending the new row of data to the table
    animalTable.appendChild(petRow);

  var img = document.createElement('img');
  img.setAttribute('src', 'images/' + this.imageName + '.jpeg');
  img.setAttribute('alt', 'cute picture of ' + this.name + ' You should really adopt them.');
  article.appendChild(img);
  };
  


  var firstDog = new Pet('Nova','labrador', 45, ['hungry', 'blue eyes', 'good girl', 'cute'], 'labradorDog', true, true, true);
  firstDog.getAge();
  var firstCat = new Pet('Tiger','American shorthair', 5, ['inquisitive', 'needy', 'small', 'whiskery'], 'diabloBlanco', true, true, true);
  firstCat.getAge();
  var lizard = new Pet('Iggy', 'iguana', 8, ['green', 'scaly', 'chill', 'dragony'], 'littleDragon', true, true, true);
  lizard.getAge();
  
//Create an array with the pet objects;
var adoptPets = [firstDog, firstCat, lizard];

//Loop through the objects to show some information on the page. 
for(var i = 0; i < adoptPets.length; i++){
    adoptPets[i].render();
}


// take in the event parameter so that we can prevent the default
function handleFormSubmitted(event) {
  // prevent the default (because the default is that submitting a form refreshes the page)
  event.preventDefault();
  console.log(event);
  // actually add a new pet to our table
  var nameInput = document.getElementById('name');
  var nameValue = nameInput['value'];
  // get the data about the new pet from the inputs
  var breedInput = document.getElementById('breed');
  var breedValue = breedInput['value'];
  var weightInput = document.getElementById('weight');
  var weightValue = weightInput.value;
  var interestWordsInput = document.getElementById('interestWords');
  var interestWordsValue = interestWordsInput['value'];
  // use our constructor to create a new pet instance
  var newPet = new Pet(nameValue, breedValue, weightValue, [interestWordsValue]);
  newPet.getAge();
  // render that pet instance to the page
  newPet.render();
  var form = document.getElementById("new-pets");
  form.reset();
}

// set up event listener on the form
// 1. Which element?
var formElement = document.getElementById('new-pets');
// 2. Which event am I listening for?
// 3. What code should run when that event happens?
formElement.addEventListener('submit', handleFormSubmitted);




// function clearInputs(event) {
//   event.target.store.value = null;
//   event.target.min.value = null;
//   event.target.max.value = null;
//   event.target.avg.value = null;
// }

























