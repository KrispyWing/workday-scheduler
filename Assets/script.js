// get todays date and format it
var showToday = function () {
  var today = moment().format("[Today is] dddd MMMM Do YYYY");
  $("#currentDay").text(today);
}

var taskItem = {};

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

//load tasks from storage
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pmm .description").val(localStorage.getItem("5pm"));

showToday();