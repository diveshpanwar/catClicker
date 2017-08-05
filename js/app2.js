$(function(){
  var model = {
    catID : 'catImg1',
    updateCounter : 0,
    catList : [
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
    ]
  };

  var octopus = {
    init : function() {
      view.renderList();
      view.init();
    },
    findCat : function(catList) {
      return catList.id === octopus.getCatID();
    },
    updateCat : function(catID) {
      model.catList.forEach(function(cat) {
        if(cat.id === catID){
          cat.counter++;
          $(".row .col-md-3:last h4").text("Clicks on "+cat.name+" is: "+cat.counter);
        }
      });
    },
    getAllCats: function() {
      return model.catList;
    },
    getCatID: function() {
      return model.catID;
    },
    setCatID: function(catID) {
      model.catID = catID;
    },
    save: function(url, catName, clicks, catID) {
      model.catList.forEach(function(cat) {
        if(cat.id === catID){
          cat.counter = clicks;
          cat.sprite = url;
          cat.name = catName;
          view.renderCat();
          view.hideAdminDiv();
          $(".row .col-md-3:last h4").text("Clicks on "+cat.name+" is: "+cat.counter);
        }
      });
    }
  };

  var view = {
    catListMenu : $("#catList ul"),
    imgHolder : $(".row .col-md-6 img"),
    catTitle : $("#catTitle"),
    adminDiv: $("#adminDiv"),
    counterHolder : $(".row .col-md-3:last h4"),
    catList: octopus.getAllCats(),
    renderList: function() {
      this.catList.forEach(function(cat) {
        view.catListMenu.append('<li class="pointer" id="'+cat.id+'">'+cat.name+'</li>');
      });
    },
    renderCat: function() {
      var cat = view.catList.find(octopus.findCat);
      view.imgHolder.attr("id", cat.id);
      view.imgHolder.attr("src", cat.sprite);
      view.imgHolder.attr("alt", cat.alt);
      view.counterHolder.attr("id", cat.counterID);
      view.counterHolder.text("Clicks on "+cat.name+" is: "+cat.counter);
      view.catTitle.text(cat.name);
    },
    init: function() {
      $("#catList ul li").click(function(event){
        octopus.setCatID(event.currentTarget.id);
        view.renderCat();
        view.clearDiv();
        view.fillDiv();
      });
      view.imgHolder.click(function(event) {
          octopus.setCatID(event.currentTarget.id);
          // console.log(octopus.getCatID());
          var clickID = octopus.getCatID();
          octopus.updateCat(clickID);
      });
      view.adminDiv.hide();
      $("#admin").click(function() {
        view.adminDiv.show("slow");
        view.clearDiv();
        view.fillDiv();
      });
      $("#cancel").click(function() {
        view.clearDiv();
        view.adminDiv.hide(1000);
      });
      $("#save").click(function() {
        var url = $("#url").val();
        var catName = $("#catName").val();
        var clicks = $("#clicks").val();
        octopus.save(url, catName, clicks, octopus.getCatID());
      });
    },
    fillDiv: function() {
      var cat = view.catList.find(octopus.findCat);
      view.adminDiv.prepend('<input type="text" id="catName" class="form-control form-group">');
      view.adminDiv.prepend('<input type="text" id="url" class="form-control form-group">');
      view.adminDiv.prepend('<input type="text" id="clicks" class="form-control form-group">');
      $("#url").attr("value",cat.sprite);
      $("#catName").attr("value",cat.name);
      $("#clicks").attr("value",cat.counter);
    },
    clearDiv: function() {
      $("#url").remove();
      $("#catName").remove();
      $("#clicks").remove();
    },
    hideAdminDiv: function() {
      view.clearDiv();
      view.adminDiv.hide(1000);
    }
  };
  octopus.init();
});
