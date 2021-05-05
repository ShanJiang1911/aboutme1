'use strict';

function greetingTime(){
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (HourNow >= 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Hello!';
    }
    document.write('<h5>' + greeting + '</h5>');  
}

let userName= prompt('Dear value guest, what is your name?');

alert('Hi ' + userName + ', Welcome to my page!') ;


let schooltime = prompt('Do you miss your school time? Please answer yes or no');
console.log(schooltime);


let lowercaseSchooltime = schooltime.toLowerCase();
console.log(lowercaseSchooltime, 'This is the lowercase version');


if (lowercaseSchooltime === 'yes' || lowercaseSchooltime === 'y') {
  alert('That\'s nice, hope you have fun!');
} else if (lowercaseSchooltime === 'yeah') {
  alert('We are all growing up!');
}
else {
  alert('lol I\'m sorry to hear that');
}


let game = prompt('Do you like playing paintball?');

let lowercaseGame = game.toLowerCase()

if (lowercaseGame === 'yes' || lowercaseGame === 'y') {
    alert('Let\'s go to range someday!');
  } else if (lowercaseGame === 'It\'s alright') {
    alert('Yeah, sometimes it\'s hurt');
  }
  else {
    alert('lol I know it\'s hurt');
  }


let food = prompt('Do you like Korean BBQ?');

let lowercaseFood = food.toLowerCase();

if (lowercaseFood === 'yes' || lowercaseFood === 'y') {
    alert('Me too, I\'m ready to gain some weight');
  } else if (lowercaseFood === 'It\'s ok') {
    alert('Sorry to hear that');
  }
  else {
    alert('lol I know a good place, let me show you someday');
  }




let space = prompt('One of my friend told me Human is the only civilization in the Galaxy, do you think he is right? Please answer yes or no.');

let lowercaseSpace = space.toLowerCase();

if (lowercaseSpace === 'yes' || lowercaseSpace === 'y') {
    alert('Let\'s go to Area 51 and check out');
  } else if (lowercaseSpace === 'I\'m not sure') {
    alert('Me neither, human is still alone');
  }
  else {
    alert('I agree with you on this one');
  }


let video = prompt('Last question, ' + userName + ', do you play video games?');

let lowercaseVideo = video.toLowerCase();

if (lowercaseVideo === 'yes' || lowercaseVideo === 'y') {
    alert('Me too, ' + userName + ', let\'s go and check my page.');
  } else if (lowercaseVideo === 'sometimes') {
    alert('Me too, ' + userName + ', pretty busy during weekdays. Welcome again.');
  }
  else {
    alert('Good choice, ' + userName + ', let\s finish homework first. Welcome again.');
  }










