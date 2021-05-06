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
  
  while (userName === '' || userName === null){
  userName = prompt('Please enter a valid name')
  }
  alert ('Hi ' + userName + ', Welcome to my page!');


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
    alert('Let\'s go to range this weekend!');
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
    alert('lol I know a good place, let me show you');
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


let myNum = 6;
  
for (let i=0; i < 4; i++ ) {
  let userGuess = prompt('Guess which number is my favorite? Hint: it\'s between 1-10');
  let numericalGuess = parseInt(userGuess);
  if (numericalGuess === myNum){
    alert('Congratulations! You are right!');
    break;
  } else if (numericalGuess < myNum){
    alert('It\'s higher than this, keep going. You have ' + (3-i) + ' times left');
  } else if (numericalGuess > myNum){
    alert('It\'s lower than this. You have ' + (3-i) + ' times left. Try again');
  } else {
    alert('Please put number only. You have ' + (3-i) + ' times left');
  }
} 



let myFavCar = ['jeep', 'tesla', 'benz'];
let counter = 6;
let correctGuess = false;
alert('Lets play a game');

while (correctGuess === false && counter > 0) {
  alert('You have ' + counter + ' times left');
  let userGuess1 = prompt('I love Cars! Take a guess which one is my favorite car brand');
  let userGuess2 = userGuess1.toLowerCase();
  for (let i = 0; i < myFavCar.length; i++) {
    if (userGuess2 === myFavCar[i]) {
      alert('You know me well!');
      correctGuess = true;
    } 
  }
    
  if (correctGuess === false) {
    alert('Pretty close. Try again. You have the power.');
  }
  
  counter--;
}


