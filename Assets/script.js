// get todays date and format it
var showToday = function () {
  var today = moment().format("[Today is] dddd MMMM Do YYYY");
  $("#currentDay").text(today);
}

// get task text and id when save button is clicked
$(".saveBtn").on("click", function () {
  //get task text
  task = $(this).siblings(".description").val();
  console.log(task);
  //get task id
  taskId = $(this).closest(".time-block").attr("id");
  console.log(taskId);

  //save to local storage
  localStorage.setItem(taskId, task);
});

//check time and colour code time-block
// get current hour
var currentHour = moment().hour();

//loop through each time block to check status
$(".time-block").each(function() {
  //get time block hour
  var taskHour = parseInt($(this).attr("id"));

  //remove any existing classes
  $(this).removeClass("past present future");

  //check taskHour against currentHour and apply necessary class
  if (taskHour < currentHour) {    
    $(this).addClass("past");
  }
  else if (taskHour === currentHour) {
    $(this).addClass("present");    
  }
  else if (taskHour > currentHour) {
    $(this).addClass("future");
  }
});

//load tasks from storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

showToday();