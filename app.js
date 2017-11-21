'use strict';

var allProducts = ['bag','banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can','wine-glass'];
var productNames = ['boots', 'chair', 'scissors']; // TODO: see the pattern here, and what you need to fill in?
var path = '/Users/rlkman/codefellows/201/bus-mall/img/'

var productObjArray=[];
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
    console.log('photos should be here: ', path);
    var num = getRandomIndex();
    var rndImg = productObjArray[num].path + productObjArray[num].name + '.jpg';
    console.log('random image, ', rndImg);
    return rndImg;
  };

  var displayImages = function() {
    // TODO: Hmm... what's going to happen here?
    var rndImgPath = getRandomImage(productObjArray);
    var imgStr = '<img id="images" src=' + rndImgPath + ' alt = "Randomn">';
    console.log('<img src=' + rndImgPath + ' alt = "Randomn">');
    // create a new div element
    // and give it some content
    var myImage = new Image(200, 200);
    myImage.src = rndImgPath;
    document.body.appendChild(myImage);

    var rndImgPath1 = getRandomImage(productObjArray);
    var imgStr1 = '<img id="images" src=' + rndImgPath1 + ' alt = "Randomn1">';
    console.log('<img src=' + rndImgPath1 + ' alt = "Randomn1">');
    var myImage = new Image(200, 200);
    myImage.src = rndImgPath1;
    document.body.appendChild(myImage);
    //document.write(imgStr1); document.close();

    var rndImgPath2 = getRandomImage(productObjArray);
    var imgStr2 = '<img id="images" src=' + rndImgPath2 + ' alt = "Randomn2">';
    console.log('<img src=' + rndImgPath2 + ' alt = "Randomn2">');
    var myImage = new Image(200, 200);
    myImage.src = rndImgPath2;
    document.body.appendChild(myImage);//add the text node to the newly created div.
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

//Event Handling
//document.body.onload = addElement;
// function onSubmit(event){
//   event.preventDefault();
//   console.log('event object Name: ', event.target[0].value);
//   console.log('event object max: ', event.target[1].value);
//   console.log('event object min: ', event.target[2].value);
//   console.log('event object avg: ', event.target[3].value);
//   console.log('the form was submitted');
//   //Delete last row - the total row --- inner.HTML
//   var rowCount = document.getElementById('store-tbl').rows.length;
//   document.getElementById('store-tbl').deleteRow(rowCount - 1);
//   console.log('number of rows on table:', rowCount);
//   var newShop = new Store(event.target[0].value, event.target[1].value, event.target[2].value, event.target[3].value);
//   footerRow();
//   console.log('New Shop instatiated and done.', newShop);
// }
// formEl.addEventListener('submit', onSubmit);
//var productRank.imageEls.addEventListener('click', productRank.onClick);
//var productRank.displayImages();
//};

productRank();
