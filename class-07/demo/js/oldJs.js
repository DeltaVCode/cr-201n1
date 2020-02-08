Cat.prototype.chaseLaserPointer = function () {
   console.log('run around!!!!!!');
 };

// create a kitten factory
function Kitten (name, interests, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats) {
  // this is a capital K kitten because it's a constructor function
  this.name = name;
  this.age = this.getAge();
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithOtherCats = isGoodWithOtherCats;
}

// // tell Kitten to inherit from Cat
// Kitten.prototype = new Cat();

// add getAge method - here we define the function inline
Kitten.prototype.getAge = function() {
  this.age = randomAge(3, 12) + ' months';
};

// // Kitten.prototype.meow = function () {
// //   console.log('meow!');
// // };

// // add render method - here we define the function later
// Kitten.prototype.render = render;

// // tell the factory to create a specific kitten, using the new keyword
// var frankie = new Kitten('frankie', ['cuddling', 'chasing string', 'catnip'], true, false, true);
// frankie.getAge();
// frankie.meow();
// frankie.render();

// var serena = new Kitten('serena', ['sitting on laps', 'climbing curtains', 'eating treats'], true, null, true);
// serena.getAge();
// serena.render();

// var jumper = new Kitten('jumper', ['sunbeams', 'yarn', 'milk', 'paper bags'], false, true, true);
// jumper.getAge();
// jumper.eyeColor = 'green';
// jumper.render();

function randomAge (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function render() {
//   var parentElement = document.getElementById('kittenProfiles');

//   var article = document.createElement('article');
//   parentElement.appendChild(article);

//   var h2 = document.createElement('h2');
//   h2.textContent = this.name;
//   article.appendChild(h2);

//   var p = document.createElement('p');
//   p.textContent = this.name + ' is adorable, and is ' + this.age + ' old.';
//   article.appendChild(p);

//   var ul = document.createElement('ul');
//   article.appendChild(ul);

//   for (var i = 0; i < this.interests.length; i++) {
//     var li = document.createElement('li');
//     li.textContent = this.interests[i];
//     ul.appendChild(li);
//   }



  
//   var table = document.createElement('table');

//   var row1 = document.createElement('tr');
//   var row2 = document.createElement('tr');

//   var th1 = document.createElement('th');
//   th1.textContent = 'Good With Kids';
//   var th2 = document.createElement('th');
//   th2.textContent = 'Good With Dogs';
//   var th3 = document.createElement('th');
//   th3.textContent = 'Good With Other Cats';

//   var td1 = document.createElement('td');
//   td1.textContent = this.isGoodWithKids;
//   var td2 = document.createElement('td');
//   td2.textContent = this.isGoodWithDogs;
//   var td3 = document.createElement('td');
//   td3.textContent = this.isGoodWithOtherCats;

//   row1.appendChild(th1);
//   row1.appendChild(th2);
//   row1.appendChild(th3);

//   row2.appendChild(td1);
//   row2.appendChild(td2);
//   row2.appendChild(td3);

//   table.appendChild(row1);
//   table.appendChild(row2);
//   article.appendChild(table);

//   var img = document.createElement('img');
//   img.setAttribute('src', 'images/' + this.name + '.jpeg');
//   img.setAttribute('alt', 'cute picture of ' + this.name + ', who is an orange and white cat. You should really adopt him.');
//   article.appendChild(img);
// }




// Constructor!
// Constructor names tend to be a singular noun
// Take in values that we want as parameters
function Pet(breedOfThisPet, weight, descriptionWords) {
  // Inside constructor, set up the properties we want for objects created with this constructor
  // set key/value pairs on the new object using contextual this
  this.breed = breedOfThisPet;
  // name of parameter and name of property can be the same or different
  this.weight = weight;
  this.descriptionWords = descriptionWords;
}

// Pet.prototype.functionName = function(any, parameters, go, here)
// Now, any pet created with the Pet constructor will be able to call this method
// And by using contextual this, we can access the descriptionWords of that specific pet object
Pet.prototype.getDescription = function() {
  var randomIndex = Math.floor(Math.random() * this.descriptionWords.length);
  return this.descriptionWords[randomIndex];
};

// Add a prototype method to render a pet to the table
// Because it's a prototype method, all pet instances will be able to call this method
Pet.prototype.render = function() {
  var animalTable = document.getElementById('animal-table');

  // Create the tr and the td's to hold this pet's data
  var petRow = document.createElement('tr');

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
  descriptionCell.textContent = this.descriptionWords;
  petRow.appendChild(descriptionCell);

  // add to page by appending the new row of data to the table
  animalTable.appendChild(petRow);
};

var firstDog = new Pet('Weimaraner', 35, ['hungry', 'blue eyes', 'good boy', 'cute']);
var firstCat = new Pet('American shorthair', 5, ['inquisitive', 'needy', 'small', 'whiskery']);
var lizard = new Pet('iguana', 8, ['green', 'scaly']);

var pets = [firstDog, firstCat, lizard];

// var animalHolder = document.getElementById('animal-holder');
// animalHolder.textContent = 'the animals go here';

// // error we initially got:
// // cannot set textContent of null
// // which tells us animalHolder is null

// // create a p tag inside of the animalHolder for each pet
// for (var i = 0; i < pets.length; i++) {
//   pets[i].render();
// }









// // Add Second Object 
// var petTwo = {
//     name: 'Tommy Bob',
//     breed: 'Orange Tabby',
//     age: 0,
//     imageName: 'tommyBob',
//     interests: [' Rainy Days',' Yarn', ' Mice'],
//     isGoodWithKids: true, 
//     isGoodWithDogs: true,
//     isGoodWithCats: false, 
//     setAge:  function() {
//        this.age = randomAge(3,12) + ' Months';
    
//     }
// };
// petTwo.setAge();




// var petOne = {
//     name: 'Diablo Blanco',
//     breed: 'Grey Tabby',
//     age: 0,
//     imageName: 'diabloBlanco',
//     interests: [' Sun Light',' Chasing Strings', ' CatNip'],
//     isGoodWithKids: true, 
//     isGoodWithDogs: false,
//     isGoodWithCats: false, 
//     setAge:  function() {
//         //console.log(this.name);
//        this.age = randomAge(3,12) + ' Months';
//         //console.log(this.isGoodWithCats);
//     }
// };
// petOne.setAge();



// //Loop through the objects to show some information on the page. 
// for(var i = 0; i < adoptPets.length; i++){
//     var newParagraph = document.createElement('p');
//     //set text content with template literals.
//     newParagraph.textContent = `A nice pet to code with is  ${adoptPets[i].name}  because they are good at ${adoptPets[i].interests} .` ;
//     petParagraph.appendChild(newParagraph);
// }






















