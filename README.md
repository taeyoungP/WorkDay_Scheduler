# Work Day Scheduler

## Task for Work Day Scheduler

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```


## Mock-up

The following animation demonstrates the application functionality:

<!-- @TODO: create ticket to review/update image) -->
![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)


## Description

> * A link to deployed application:


## How to use

> * When open up the Work Day Scheduler, the user can see today's date and it has time schedule from 9 AM to 9 PM.

> * For each of time block, the user can input their schedules and save them by clicking save button. Once save button is clicked, the button will briefly change color to green to indicate that button is clicked and the content in the time block has been saved. 

> * Saved schedules and events will persist even after refreshing the page and will remain same unless the user modify them. 

> * The time block(s) with event(s) that is/are happened will turn into grey color. Time block with current time will red color. The color for future time block(s) has green color. 

> * At the bottom of the schedule time blocks, there is a clear button that allows the user to clear and reset the schedule.


## Credits

> * Code to change background-color for certain amount of time, referenced from: https://stackoverflow.com/questions/3003819/possible-to-change-background-color-onclick-then-automatically-change-back-a-se

> * Code to check if object value is already exist in the array and replace the object, referenced from: https://stackoverflow.com/questions/37585309/replacing-objects-in-array#:~:text=You%20can%20use%20Array%23map%20with%20Array%23find%20.&text=Here%2C%20arr2.,arr1%20i.e.%20obj%20is%20returned. AND https://www.codegrepper.com/tpc/replace+object+in+array+javascript


## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses a date utility library to work with date and time

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the Challenge instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application

## Review

You are required to submit the following for review:

* The URL of the deployed application

* The URL of the GitHub repository, with a unique name and a README describing the project

- - -
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
