
// enter data
let notes_enter=document.querySelector('.training-input textarea');
let enter=document.querySelector('.training-input button');
let time_start=document.querySelector('#time_start');
let time_end=document.querySelector('#time_end');


// calculate and display data entered
let hours_trained= document.querySelector('.training-calc p:nth-child(1) span');
let notes_calc=document.querySelector('.training-calc p:nth-child(3) span');

function notes(){
    notes_calc.innerHTML=notes_enter.value;
}

enter.addEventListener('click',notes);

// Function to calculate time difference
function calculateTimeDifference() {
    // Get the values of time_start and time_end inputs
    let startTime = time_start.value;
    let endTime = time_end.value;
    

    // Parse the time strings into Date objects
    let startDate = new Date('1970-01-01T' + startTime);
    let endDate = new Date('1970-01-01T' + endTime);

    // Calculate the difference in milliseconds
    let timeDifference = endDate.getTime() - startDate.getTime();

    // Convert milliseconds to hours and minutes
    let hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    // Display the difference
    hours_trained.textContent = hoursDifference + ' hours ' + minutesDifference + ' minutes';
}

// Event listener for the 'ENTER' button
enter.addEventListener('click', calculateTimeDifference);
