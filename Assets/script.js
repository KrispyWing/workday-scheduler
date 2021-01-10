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



showToday();