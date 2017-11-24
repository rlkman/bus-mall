'use strict';

var allProducts = ['bag','banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can','wine-glass'];
var path = '/Users/rlkman/codefellows/201/bus-mall/img/';
var init = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
localStorage.setItem('resultArray', JSON.stringify(init));

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
  resultsEl: document.getElementById('results'),
  resultsArray: [],
  productNames:[], // TODO: see the pattern here, and what you need to fill in?
  cummulativeResults: [],
  clickCount: 0,

  myImage: new Image(200, 200),
  myImage1: new Image(200, 200),
  myImage2: new Image(200, 200),

  // // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function() {
    // TODO: Hmm... what's going to happen here?function
    //console.log('WE are here...!!!');
    var num = Math.floor( Math.random() * productObjArray.length );
    return num;
  },

  getRandomImage: function() {
    var num = 0;
    do {
      num = this.getRandomIndex();
      productObjArray[num].numberOfViews++;
      var rndImg = productObjArray[num].path + productObjArray[num].name + '.jpg';
    } while (productRank.productNames.includes(productObjArray[num].name));
    productRank.productNames.push(productObjArray[num].name);
    //console.log('current array: ', productRank.productNames);
    return rndImg;
  },

  displayImages: function() {
    productRank.productNames = [];
    // TODO: Hmm... what's going to happen here?
    var rndImgPath = this.getRandomImage(productObjArray);
    var rndImgPath1 = this.getRandomImage(productObjArray);
    var rndImgPath2 = this.getRandomImage(productObjArray);

    this.myImage.src = rndImgPath;
    this.myImage1.src = rndImgPath1;
    this.myImage2.src = rndImgPath2;

    this.myImage.id = productRank.productNames[0];
    this.myImage1.id = productRank.productNames[1];
    this.myImage2.id = productRank.productNames[2];

    this.imagesEl.appendChild(this.myImage);
    this.imagesEl1.appendChild(this.myImage1);
    this.imagesEl2.appendChild(this.myImage2);
  },

  displayResults: function() {
    // TODO: Hmm... what's going to happen here?
    //generate ul
    //generate, populate and append il*allProducts
    //append ul to results tag
    var newULEl = document.createElement('ul');
    this.resultsEl.appendChild(newULEl);
    for (var l = 0; l < allProducts.length; l++) {
      var liEl = document.createElement('li');
      liEl.innerHTML = productObjArray[l].name + ' got ' + productObjArray[l].totalCount + ' votes.';
      this.resultsArray.push(productObjArray[l].totalCount);
      newULEl.appendChild(liEl);
    }
    console.log('this.resultsArray: ', this.resultsArray);
    return this.resultsArray;
  },

  onClick: function(event) {
    event.preventDefault();
    if(productRank.clickCount < 5) {
      console.log('event target id:', event.target.id);
      productRank.clickCount++;
      console.log('productRank.clickCount: ', productRank.clickCount);

      for(var i in allProducts) {
        if(event.target.id === productObjArray[i].name){
          productObjArray[i].totalCount++;
          //console.log('productObjArray[i].name: ', productObjArray[i].name);
          //console.log('productObjArray[i].totalCount: ',productObjArray[i].totalCount);
        }
      }
      productRank.displayImages();
    } else {
      productRank.imagesEl.removeEventListener('click', productRank.onClick);
      productRank.imagesEl1.removeEventListener('click', productRank.onClick);
      productRank.imagesEl2.removeEventListener('click', productRank.onClick);
      productRank.displayResults();
      var decodedResults = JSON.parse(localStorage.getItem('resultArray'));
      console.log('decodedResults: ', decodedResults);
      for (var k = 0; k < productRank.resultsArray.length; k++) {
        productRank.init[k] = decodedResults[k] + this.resultsArray[k];
        productRank.init.push(parseInt(productRank.cummulativeResults[k]) + parseInt(decodedResults[k]));
        console.log(productRank.cummulativeResults[k], (parseInt(productRank.cummulativeResults[k]), parseInt(decodedResults[k])));
      }
      console.log('cummulative results: ', productRank.init);
      var codedResults =  JSON.stringify(productRank.init);
      localStorage.setItem('resultArray', codedResults);
      myChart.update();
    }
  },

  showButton: function() {
    // TODO: Hmm... what's going to happen here?
  },
};

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: allProducts,
    datasets: [{
      label: '# of Votes',
      data: productRank.resultsArray,
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});

//Events Handling
productRank.imagesEl.addEventListener('click', productRank.onClick);
productRank.imagesEl1.addEventListener('click', productRank.onClick);
productRank.imagesEl2.addEventListener('click', productRank.onClick);
productRank.displayImages();
