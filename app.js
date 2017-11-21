'use strict';

var allProducts = ['bag','banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can','wine-glass'];
var productNames = ['boots', 'chair', 'scissors']; // TODO: see the pattern here, and what you need to fill in?
var path = '/Users/rlkman/codefellows/201/bus-mall/img/'

var productObjArray=[];
function Product(name, path) {
  // TODO: Build your constructor and necessary properties.
  this.name = name;
  this.path = path;
  this.totalCount = 0;
  this.numberOfViews = 0;
  productObjArray.push(this);
}


// TODO: Don't forget to build your objects. How can you do this withough having to write 14 lines of `new Product(., ., .)`?
for(var i = 0; i < allProducts.length; i++) {
  new Product(allProducts[i], path);
}
console.log(productObjArray);
// var productRank = {
//   // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
//   // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.
//
//   getRandomIndex: function() {
//     // TODO: Hmm... what's going to happen here?function
//     var num = Math.floor( Math.random() * imgAr.length );
//     return num;
//   },
//
//   getRandomImage(arrayImg, path) {
//     console.log('photos should be here: ', path);
//     var num = getRandomIndex();
//     var img = arrarImg[ num ];
//     console.log('random image, ', path + img);
//     return path + img;
//   },
//
//   displayImages: function() {
//     // TODO: Hmm... what's going to happen here?
//     console.log('<img src=' + path + img + ' alt = "">');
//     document.write(imgStr); document.close();
//     var imgStr1 = '<img src=' + path + img1 + ' alt = "">';
//     document.write(imgStr1); document.close();
//     var imgStr2 = '<img src=' + path + img2 + ' alt = "">';
//     document.write(imgStr2); document.close();
//   },
//
//   tallyClicks: function(elementId) {
//     // TODO: Hmm... what's going to happen here?
//   },
//
//   displayResults: function() {
//     // TODO: Hmm... what's going to happen here?
//   },
//
//   showButton: function() {
//     // TODO: Hmm... what's going to happen here?
//   },
//
//   onClick: function() {
//     // TODO: Hmm... what's going to happen here?
// },
//
// var productRank.imageEls.addEventListener('click', productRank.onClick);
// var productRank.displayImages();
