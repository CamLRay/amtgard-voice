import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import States from './js/states';






let states = new States();

let voiceStyle = "male";

$("#male").on("click", function(){
  $('#male, #female').toggleClass('voice-active');
  voiceStyle = "male";
});
$("#female").on("click", function(){
  $('#female, #male').toggleClass('voice-active');
  voiceStyle = "female";
});

Object.keys(states).forEach(function(state){
  
  if(states[state] === states.audio) {
    return;
  }
  // } else if((typeof states[state]) === 'string'){
    $('.buttons').append(`<button type='button' class="${state}" id="${state}-indefinite">${state}</button>`);
  // } 
  // else {
  //   Object.keys(states[state]).forEach(function(time){
  //     $('.buttons').append(`<button type='button' class="${state}" id="${state}-${states[state][time]}">${state} ${states[state][time]}</button>`); 
  //   });
  // }
});


$('.buttons').on("click", "button", function(){
  let state = this.id.split("-")[0];
  states.playSound(voiceStyle, state);
});

$('#announce-state').on("click", function (){
  states.announceState(voiceStyle);
});

$('#end-state').on('click', function(){
  states.endState(voiceStyle);
});


