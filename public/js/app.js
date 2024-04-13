
// enter data
let notes_enter=document.querySelector('.training-input textarea');
let enter=document.querySelector('.training-input button');
let time_start=document.querySelector('#time_start');
let time_end=document.querySelector('#time_end');


// calculate and display data entered
let hours_trained= document.querySelector('.training-calc p:nth-child(1) span');
let notes_calc=document.querySelector('.training-calc p:nth-child(2) span');

function notes(){
    notes_calc.innerHTML=notes_enter.value;
}

enter.addEventListener('click',notes);