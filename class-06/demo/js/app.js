'use strict';
console.log('It is connected....');
// Problem Domain: the Cedar Rapids Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

//Each Kitten's profile should have:  Name, Breed, gender, random age assigned, a list of what they like, an image, is good with kids, is good with dogs, is good with other animals 

//TODO: Dynamically, generate kitten objects using form data.


var petOne = {
    name: 'Diablo Blanco',
    breed: 'Grey Tabby',
    age: 0,
    imageName: 'diabloBlanco',
    interests: [' Sun Light',' Chasing Strings', ' CatNip'],
    isGoodWithKids: true, 
    isGoodWithDogs: false,
    isGoodWithCats: false, 
    setAge:  function() {
        //console.log(this.name);
       this.age = randomAge(3,12) + ' Months';
        //console.log(this.isGoodWithCats);
    }
};
petOne.setAge();

//console.log('Pets Name ', petOne.name);

// Add Second Object 
var petTwo = {
    name: 'Tommy Bob',
    breed: 'Orange Tabby',
    age: 0,
    imageName: 'tommyBob',
    interests: [' Rainy Days',' Yarn', ' Mice'],
    isGoodWithKids: true, 
    isGoodWithDogs: true,
    isGoodWithCats: false, 
    setAge:  function() {
       this.age = randomAge(3,12) + ' Months';
    
    }
};
petTwo.setAge();


function randomAge(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}


petOne.isFixed = true;
petTwo.isFixed = true;


////////////////// Create DOM elements and render in html///////////////////////////

//create new element, The "Parent"  
var parentElement = document.getElementById('kittenProfiles');

//Now creat the child elements; article, h2, p, ul, li, interests, image. 

//Create Article
var article = document.createElement('article');
parentElement.appendChild(article);

//Create h2
var h2 = document.createElement('h2');
h2.textContent = petOne.name;
article.appendChild(h2);

//Create p
var petParagraph = document.createElement('p');
petParagraph.textContent = 'DB is adorable, and is ' + petOne.age + ' old.';
article.appendChild(petParagraph);

//Create ul
var ul = document.createElement('ul');
article.appendChild(ul);
for(var i = 0; i < petOne.interests.length; i++){
    //Create li
    var li = document.createElement('li');
    //Fill the lists
    li.textContent = petOne.interests[i];
    ul.appendChild(li);
}

//add image
var petImage = document.createElement('img');
//Set the value of an attribute on the specified element.
petImage.setAttribute('src', 'images/' + petOne.imageName + '.jpeg');
petImage.setAttribute('alt', 'Cute picture of ' + petOne.name + ', who is a grey tabby ready for fun. You should really adopt him.');
article.appendChild(petImage);


//Add image Two 
var petImageTwo = document.createElement('img');
//Set the value of an attribute on the specified element.
petImageTwo.setAttribute('src', 'images/' + petTwo.imageName + '.jpeg');
petImageTwo.setAttribute('alt', 'Cute picture of ' + petTwo.name + ', who is a orange tabby ready for fun. You should really adopt him.');
article.appendChild(petImageTwo);

//Create an array with the pet objects;
var adoptPets = [petOne, petTwo];
var petParagraph = document.getElementById('adoptPets-holder');

//Loop through the objects to show some information on the page. 
for(var i = 0; i < adoptPets.length; i++){
    var newParagraph = document.createElement('p');
    //set text content with template literals.
    newParagraph.textContent = `A nice kitten to code with is  ${adoptPets[i].name}  because they are good at ${adoptPets[i].interests} .` ;
    petParagraph.appendChild(newParagraph);
}


