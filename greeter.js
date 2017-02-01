var name = prompt('What is your name?');
alert('Hello ' + name);
// console.log('Hello ');

var myAge = prompt('How old are you?');
var ageCheck = function() {
  if(parseInt(myAge) === 37) alert('You\'re 37 you\'re not old!');
  else if(parseInt(myAge) > 37) alert('Not an ageist but the Monty Python quote isn\'t applicable');
  else if(parseInt(myAge) < 37) alert('Hopefully you\'re at least old enough to buy your own booze');
  else alert('Hopefully that doesn\'t mean you\'re dead')
}
ageCheck();


var cityCheck = function () {
  var myCity = prompt('What city do you live in?').toLowerCase();
  if(myCity === 'nashville') alert('Oh wow me too!');
  else alert('Consider moving');
}
cityCheck ();

var myPet = prompt('Do you have pets?');
var petInfo = function () {
  if(myPet === 'yes') alert('Wonderful!');
  else if ('no') alert('You have no heart');
  else alert('Children don\'t count');
}

petInfo ();
