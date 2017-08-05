var catListMenu = $("#catList ul");
var imgHolder = $(".row .col-md-6 img");
var counterHolder = $(".row .col-md-3:last h4");
var catID = 'catImg1';
var updateCounter = 0;

var catList = [
  {
    "name": "Meow",
    "sprite": "img/cat1.jpg",
    "counter": 0,
    "alt": "Meow",
    "id": "catImg1",
    "counterID": "counter1"
  },
  {
    "name": "Billu",
    "sprite": "img/cat2.jpg",
    "counter": 0,
    "alt": "Billu",
    "id": "catImg2",
    "counterID": "counter2"
  },
  {
    "name": "Mau",
    "sprite": "img/cat3.jpg",
    "counter": 0,
    "alt": "Mau",
    "id": "catImg3",
    "counterID": "counter3"
  },
  {
    "name": "Kitty",
    "sprite": "img/cat4.jpg",
    "counter": 0,
    "alt": "Kitty",
    "id": "catImg4",
    "counterID": "counter4"
  },
  {
    "name": "Cato",
    "sprite": "img/cat5.jpg",
    "counter": 0,
    "alt": "Cato",
    "id": "catImg5",
    "counterID": "counter5"
  },
  {
    "name": "Billa",
    "sprite": "img/cat6.jpg",
    "counter": 0,
    "alt": "Billa",
    "id": "catImg6",
    "counterID": "counter6"
  },
  {
    "name": "Jungli Billa",
    "sprite": "img/cat7.jpg",
    "counter": 0,
    "alt": "Jungli Billa",
    "id": "catImg7",
    "counterID": "counter7"
  },
  {
    "name": "Cutu Billu",
    "sprite": "img/cat8.jpg",
    "counter": 0,
    "alt": "Cutu Billu",
    "id": "catImg8",
    "counterID": "counter8"
  }
];

$(function() {
  catList.forEach(function(cat) {
    catListMenu.append('<li class="pointer" id="'+cat.id+'">'+cat.name+'</li>');
  });
  var findCat = function(catList) {
    return catList.id === catID;
  };
  var updateCat = function(catID) {
    catList.forEach(function(cat) {
      if(cat.id === catID){
        cat.counter++;
        $(".row .col-md-3:last h4").text("Clicks on "+cat.name+" is: "+cat.counter);
      }
    });
  };
  $("#catList ul li").click(function(event){
    catID = event.currentTarget.id;
    var cat = catList.find(findCat);
    imgHolder.attr("id", cat.id);
    imgHolder.attr("src", cat.sprite);
    imgHolder.attr("alt", cat.alt);
    counterHolder.attr("id", cat.counterID);
    counterHolder.text("Clicks on "+cat.name+" is: "+cat.counter);
  });
  imgHolder.click(function(event) {
      catID = event.currentTarget.id;
      updateCat(catID);
  });
});
