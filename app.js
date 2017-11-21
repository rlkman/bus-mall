'use strict';

var allProducts = ['bag','banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can','wine-glass'];
var productNames = ['boots', 'chair', 'scissors']; // TODO: see the pattern here, and what you need to fill in?
var path = '/Users/rlkman/codefellows/201/bus-mall/img/';

var productObjArray = [];
function Product(name, path) {
  // TODO: Build your constructor and necessary properties.
  this.name = name;
  this.path = path ;
  this.totalCount = 0;
  this.numberOfViews = 0;
  productObjArray.push(this);
}

// TODO: Don't forget to build your objects. How can you do this withough having to write 14 lines of `new Product(., ., .)`?
for(var i = 0; i < allProducts.length; i++) {
  new Product(allProducts[i], path);
}
console.log(productObjArray);

//Events Handling
var imageElts1 = document.getElementById('images');

var imageElts2 = document.getElementById('images');

var imageElts3 = document.getElementById('images');


var productRank = function() {
  // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  console.log('WE are here one...!!!');

  var getRandomIndex = function() {
    // TODO: Hmm... what's going to happen here?function
    console.log('WE are here...!!!');
    var num = Math.floor( Math.random() * productObjArray.length );
    return num;
  };

  var getRandomImage = function(productObjArray) {
    //console.log('photos should be here: ', path);
    var num = getRandomIndex();
    var rndImg = productObjArray[num].path + productObjArray[num].name + '.jpg';
    //console.log('random image, ', rndImg);
    productNames.push(productObjArray[num].name);
    console.log('products in display: ',productNames);
    return rndImg;
  };

  var displayImages = function() {
    // TODO: Hmm... what's going to happen here?
    var images = document.getElementById('images');
    var rndImgPath = getRandomImage(productObjArray);
    console.log('<img src=' + rndImgPath + ' alt="Randomn">');
    var myImage = new Image(200, 200);
    myImage.src = rndImgPath;
    images.appendChild(myImage);
  };

  // var tallyClicks = function(elementId) {
  //   // TODO: Hmm... what's going to happen here?
  // };
  //
  // var displayResults = function() {
  //   // TODO: Hmm... what's going to happen here?
  // };
  //
  // var showButton = function() {
  //   // TODO: Hmm... what's going to happen here?
  // };
  //
  // var onClick = function() {
  //   // TODO: Hmm... what's going to happen here?
  displayImages();
};


//Events Handling
imageElts1.addEventListener('click', productRank());
imageElts2.addEventListener('click', productRank());

imageElts3.addEventListener('click', productRank());



//var imageElts.addEventListener('click', onClick);
//var productRank.displayImages();
//};

//productRank();
