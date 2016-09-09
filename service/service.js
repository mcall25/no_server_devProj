

    var trainData = [
  {stop: "4:50:00 GMT-0600 (MDT)"},
  {stop: "5:20:00 GMT-0600 (MDT)"},
  {stop: "5:50:00 GMT-0600 (MDT)"},
  {stop: "6:20:00 GMT-0600 (MDT)"},
  {stop: "6:50:00 GMT-0600 (MDT)"},
  {stop: "7:20:00 GMT-0600 (MDT)"},
  {stop: "7:50:00 GMT-0600 (MDT)"},
  {stop: "8:20:00 GMT-0600 (MDT)"},
  {stop: "8:50:00 GMT-0600 (MDT)"},
  {stop: "9:20:00 GMT-0600 (MDT)"},
  {stop: "9:50:00 GMT-0600 (MDT)"},
  {stop: "10:50:00 GMT-0600 (MDT)"},
  {stop: "11:50:00 GMT-0600 (MDT)"},
  {stop: "12:50:00 GMT-0600 (MDT)"},
  {stop: "13:50:00 GMT-0600 (MDT)"},
  {stop: "14:50:00 GMT-0600 (MDT)"},
  {stop: "15:50:00 GMT-0600 (MDT)"},
  {stop: "16:20:00 GMT-0600 (MDT)"},
  {stop: "16:50:00 GMT-0600 (MDT)"},
  {stop: "17:20:00 GMT-0600 (MDT)"},
  {stop: "17:50:00 GMT-0600 (MDT)"},
  {stop: "18:20:00 GMT-0600 (MDT)"},
  {stop: "18:50:00 GMT-0600 (MDT)"},
  {stop: "19:50:00 GMT-0600 (MDT)"},
  {stop: "20:50:00 GMT-0600 (MDT)"},
  ];


angular.module('project1').service('service', function() {

  this.serviceData = trainData;



  this.click = function() {
      var today = new Date().toString().slice(0, 15);
      function change(array) {
          for (var i = 0; i < array.length; i++) {
                array[i].stop = today + " " + array[i].stop;
            }
              return array;
          }
          change(trainData);


  var func = function(array) {
      var n = new Date();
      n = Date.parse(n);

  for (var i = 0; i < array.length; i++) {
    if(	n < Date.parse(array[i].stop)) {


      return array[i].stop;

      }
    }

  }

 return func(trainData);

  }
})
