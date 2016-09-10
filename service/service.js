
    var trainData = [
  {stop: "Fri Sep 09 2016 4:50:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 5:20:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 5:50:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 6:20:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 6:50:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 7:20:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 7:50:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 8:20:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 8:50:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 9:20:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 9:50:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 10:50:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 11:50:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 12:50:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 13:50:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 14:50:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 15:50:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 16:20:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 16:50:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 17:20:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 17:50:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 18:20:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 18:50:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 19:50:00 GMT-0600 (MDT)"},
  {stop: "Fri Sep 09 2016 20:50:00 GMT-0600 (MDT)"},
  ];


angular.module('project1').service('service', function() {

  this.serviceData = trainData;

  this.click = function() {
      var today = new Date();
      var todaysDate = today.getDate();

      function changeDateInformation(array) {
          for (var i = 0; i < array.length; i++) {
            new Date(array[i].stop).setDate(todaysDate)
            console.log(array[i].stop);
          }
          return array;
        }
        changeDateInformation(trainData);



      var CheckForNextStop = function(array) {
          var n = new Date();

          for (var i = 0; i < array.length; i++) {
            console.log(array[i].stop)
            var date = new Date(array[i])
            if(	Date.parse(n) < Date.parse(array[i].stop)) {
                console.log('if fired!')
                return array[i].stop;
            }
          }
      }
      return CheckForNextStop(trainData);
  }
})
