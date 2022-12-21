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
// attribute of each time-block be used to do this? (X)
//
// TODO: Add code to display the current date in the header of the page. (X)
var currentDayEl = $('#currentDay');
var saveBtnEl = $('.saveBtn');
var textAreaEl = $('textarea')
//var text = "";

function displayTime() {
  var today = dayjs().format('[Today is: ]dddd, MMM DD, YYYY');
  currentDayEl.text(today);
}

function readScheduleFromStorage() {
  var schedules = localStorage.getItem('schedules');
  if (schedules) {
    schedules = JSON.parse(schedules);
  } else {
    schedules = [];
  }
  return schedules;
}

function saveScheduleToStorage(schedules) {
  localStorage.setItem('schedules', JSON.stringify(schedules));
}

//Referenced from https://bobbyhadz.com/blog/javascript-get-value-of-textarea to grab input data from textarea
textAreaEl.on('input', function (event) {
  var text = event.target.value;
  var ta = $(event.target).attr('id');
  $("#" + ta).val(text);
})

saveBtnEl.on("click", function (event) {
  event.preventDefault();

  //This part of code allows button's background color to change for a second when clicked//
  //so it's easier for user to notice if button is clicked and saved
  // referenced from: https://stackoverflow.com/questions/3003819/possible-to-change-background-color-onclick-then-automatically-change-back-a-se
  $(event.target).css('backgroundColor', '#008000');
  // after 1 second, change it back
  setTimeout(function() {
    $(event.target).css('background-color', '#06aed5');
  }, 1000);
  /////

  var time = $(this).parent().attr('id'); //Grab clicked time block id
  var ta = "#text-" + time;
  var ptext = $(ta).val().trim();
  var newSchedule = {
    id: time,
    pText: ptext
  };

  var schedules = readScheduleFromStorage();
  //text = ""; //reset text to empty for reusing and storing text for other time blocks

  //if user input new text and save, check if the id already exist in the object and replace the text with it.
  // referenced from: https://stackoverflow.com/questions/37585309/replacing-objects-in-array#:~:text=You%20can%20use%20Array%23map%20with%20Array%23find%20.&text=Here%2C%20arr2.,arr1%20i.e.%20obj%20is%20returned.
  // https://www.codegrepper.com/tpc/replace+object+in+array+javascript
  if (schedules.find(e => e.id === newSchedule.id)) {
    schedules = schedules.map(e => e.id !== newSchedule.id ? e : newSchedule);
  } else {
    schedules.push(newSchedule);
  }
  saveScheduleToStorage(schedules);
})

//TODO write function that will go through all hour list elements and show past, current, future 
//execute last to make sure update everything in the end
//Need to grab current time to decide if every each time block's schedule has been passed or not.
function printScheduleData() {
  var schedules = readScheduleFromStorage();
  for (var i = 0; i < schedules.length; i++) {
    var time = schedules[i].id;
    var text = schedules[i].pText;
    var timeblockEl = $('#' + time);
    var ta = timeblockEl.children('textarea');
    ta.val(text); //https://stackoverflow.com/questions/1642447/how-to-change-the-content-of-a-textarea-with-javascript
  }
  checkTimeBlock();
}

function checkTimeBlock() {
  var today = dayjs().format('HH');
  var startBlock = 9; //starting time of timeblock
  var timeBlockNum = 12; //number of timeBlocks in HTML
  for (var i = startBlock; i <= startBlock + timeBlockNum; i++) {
    var currentTimeBlockEl = $('#hour-' + i);
    if (i == today) {
      currentTimeBlockEl.removeClass("present past future");
      currentTimeBlockEl.addClass("present");
    } else if (i > today) {
      currentTimeBlockEl.removeClass("present past future");
      currentTimeBlockEl.addClass("future");
    } else if (i < today) {
      currentTimeBlockEl.removeClass("present past future");
      currentTimeBlockEl.addClass("past");
    }
  }
}

//$(function () {
//});

//Qs. Should I keep the data from previous date for the next date? or everything reset on the next day?
// if need to reset, write function that, save today's date to local Storage and 

displayTime();
printScheduleData();


