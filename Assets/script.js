// get todays date and format it
var showToday = function () {
  var today = moment().format("[Today is] dddd MMMM Do YYYY");
  $("#currentDay").text(today);
}



showToday();