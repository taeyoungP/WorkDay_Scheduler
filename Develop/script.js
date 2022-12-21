// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage? (X)
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page. (X)
var currentDayEl = $('#currentDay');
var saveBtnEl = $('.saveBtn');
var textAreaEl = $('textarea')
var text = "";

function displayTime() {
  var today = dayjs().format('[Today is: ]MMM DD, YYYY');
  currentDayEl.text(today);
}

function readScheduleFromStorage() {
  var schedules = localStorage.getItem('schedules');
  if(schedules){
    schedules = JSON.parse(schedules);
  } else{
    schedules = [];
  }
  return schedules;
}

function saveScheduleToStorage(schedules){
  localStorage.setItem('schedules', JSON.stringify(schedules));
}

//Referenced from https://bobbyhadz.com/blog/javascript-get-value-of-textarea to grab input data from textarea
textAreaEl.on('input', function(event) {
  text = event.target.value.trim();
})

saveBtnEl.on("click", function(event) {
  event.preventDefault();
  var time = $(this).parent().attr('id'); //Grab clicked time block id
 
  var newSchedule = {
    id: time,
    pText: text
  };

  text=""; //reset text to empty for reusing and storing text for other time blocks

  var schedules = readScheduleFromStorage();

  //if user input new text and save, check if the id already exist in the object and replace the text with it.
  if(schedules.find(e => e.id === newSchedule.id)){
    schedules = schedules.map(e => e.id !== newSchedule.id ? e : newSchedule);
  } else {
    schedules.push(newSchedule);
  }

  saveScheduleToStorage(schedules);



})

displayTime();

//TODO write function that will go through all hour list elements and show past, current, future 
//execute last to make sure update everything in the end
//Need to grab current time to decide if every each time block's schedule has been passed or not.
$(function () { 

});

//Qs. Should I keep the data from previous date for the next date? or everything reset on the next day? 