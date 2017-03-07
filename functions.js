/*
 takes function as input
 runs function that was passed in
 puts return value in div#answer
 */


/* ex:
 var runner = function(fn) {
 console.log('Invoking a new function');
 fn();
}

runner(function() {console.log('okay!') } )

var say_hi = function() {
 console.log('hi!');
}

runner(say_hi);

*/

/*var answerLogger = function(fn) {
   var answer = fn();
   $('#answer').text(answer);
}

answerLogger(function () {
  return "I should appear in div#answer!"
});
*/


/* create function
takes array as input
append each array as a list item <ol></ol> inside #answer
*/

var funcArray = [function(){return "thing1"}, function(){return "thing2"},
 function() {return "thing3"}];


var answerLogger = function(arr) {
  //put ol in answer
  $("#answer").html("<ol></ol>");
  //for each item in array appaned to ol inside #answer
  arr.forEach(function (fn) {
    var answer = fn();
    $("#answer > ol").append("<li>" + answer + "</li>");
  })
}

answerLogger(funcArray);


/*
new function
secretKeeper
defines var secret
try to access it outside of scope and function
takes two strings as arguments
append strings with secret in between
*/

var secretKeeper = function(string1, string2) {
  var secret = "You can't find me";
  var publicPhrase = string1 + " " + secret + " " + string2;
  $("#answer").append(publicPhrase);
}

secretKeeper("this is param1", "this is param2");


/* three built in functions to javascript
.map, .filter, .reduce
map and filter return arrays, reduce retruns a single value
functional programming where objects focus on retrun values
there are also libraries like _lowdash
*/

/*map that outputs array of numbers multi by 5
and one that outputs array of strings reversed .reverse()

*/

var myArray = [1, 2, 3, 4, 5]

var timesFive = myArray.map(function(num){
 return num * 5;
});

timesFive();


var myStrings = ["hello", "there", "here"]


var newStrings = myStrings.map(function(str) {
  return str.split("").reverse().join("");
});

console.log(newStrings);
/*these work in console- make em work in html
*/

/*

-filter()
 function called on each item in array
 returns array of elements that pass test in function

3. input: array of numbers, output array of even numbers

4. input: array of strings output: array of strings longer than 4 characters

*/
//3
var numArray = [1, 2, 3, 4, 5, 6, 7, 8]

var evenNumbers = numArray.filter(function(num) {
  return num % 2 == 0;
});

/*4
var arrStrings = ["hello", "eh", "ladybird", "lil", "op"]

var moreFour = arrStrings.filter(function(ugh) {
  return
});

/*
home: input array of strings, outpue = array of length og strings

look up closure
Write a function multipliesBy that takes a number as input and returns a function that, when invoked with a second number as an argument multiplies the two numbers together.

  test using:
    var times5 = multipliesBy(5)
    times5(4)

    var times10 = multipliesBy(10)
    times10(32)

//using .map() input = array of strings, output = array of length of strings
//using .filter() input: array of strings, output: array of strings longer than 4 characters
//using .reduce() input: array of strings, output: sum of length of strings
*/
