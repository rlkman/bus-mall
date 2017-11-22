'use strict';

var allProducts = ['bag','banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can','wine-glass'];
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

var productRank = {
  imagesEl: document.getElementById('images'),
  imagesEl1: document.getElementById('images1'),
  imagesEl2: document.getElementById('images2'),
  productNames:[], // TODO: see the pattern here, and what you need to fill in?

  myImage: new Image(200, 200),
  myImage1: new Image(200, 200),
  myImage2: new Image(200, 200),

  // // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function() {
    // TODO: Hmm... what's going to happen here?function
    console.log('WE are here...!!!');
    var num = Math.floor( Math.random() * productObjArray.length );
    return num;
  },

  getRandomImage: function() {
    var num = 0;
    do {
      num = this.getRandomIndex();
      var rndImg = productObjArray[num].path + productObjArray[num].name + '.jpg';
    } while (productRank.productNames.includes(productObjArray[num].name));
    productRank.productNames.push(productObjArray[num].name);
    console.log('current array: ', productRank.productNames);
    return rndImg;
  },

  displayImages: function() {
    productRank.productNames = [];
    // TODO: Hmm... what's going to happen here?
    var rndImgPath = this.getRandomImage(productObjArray);
    console.log('<img src=' + rndImgPath + ' alt="Randomn">');
    this.myImage.src = rndImgPath;
    this.imagesEl.appendChild(this.myImage);


    var rndImgPath1 = this.getRandomImage(productObjArray);
    console.log('<img src=' + rndImgPath1 + ' alt="Randomn">');
    this.myImage1.src = rndImgPath1;
    this.imagesEl1.appendChild(this.myImage1);


    var rndImgPath2 = this.getRandomImage(productObjArray);
    console.log('<img src=' + rndImgPath2 + ' alt="Randomn">');
    this.myImage2.src = rndImgPath2;
    this.imagesEl2.appendChild(this.myImage2);
  },

  onClick: function(event) {
    console.log('event.target, ', event.target);
    console.log('this.imagesEl ', this.imagesEl);
    // this.imagesEl.innerHTML = '';
    // this.imagesEl1.innerHTML = '';
    // this.imagesEl2.innerHTML = '';

    console.log(event.target.id);
    productRank.clickCount++;

    for(var i in allProducts) {
      if(event.target.id === allProducts[i].name){
        allProducts[i].totalCount++;
      }
    }
    productRank.displayImages();
  },

  displayResults: function() {
    // TODO: Hmm... what's going to happen here?
  },

  showButton: function() {
    // TODO: Hmm... what's going to happen here?
  },
};

//Events Handling
productRank.imagesEl.addEventListener('click', productRank.onClick);
productRank.imagesEl1.addEventListener('click', productRank.onClick);
productRank.imagesEl2.addEventListener('click', productRank.onClick);
productRank.displayImages();
