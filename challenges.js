// Solve at least 3 of the challenges below.  
// Include comments showing the **overall goal** in your own words, your **pseudocode**, and your **final solution**. 


// 1. Given an array of strings, print only the strings that have exactly 4 characters.
// GOAL : To store a list of words in a variable to make an array and print the elements(words) with **exactly** 4 letters
// PSUEDO :
// var words = "This", "is", "some", "random", "list", "of", "words"
// we need a run a loop thru the array and tell it to print the specific elements with an if statement ???
// for (var i = 0; i < words.length; i++) <-- loop with init, cond, final express
// if (words[i].length === 4){            <-- strictly equal cond
//    console.log(words[i])               <-- PRINT !
// }
// we can use string interpolation, too, if you feelin fancy 😉
// FINAL :

var words = ["This", "is", "some", "random", "list", "of", "words", "yooo"]
console.log("ayyy")
for (var i = 0; i < words.length; i++){
    if (words[i].length === 4){
        console.log(words[i])
    }
}

// I was messing around with the placement of "ayyy". I wanted it to appear once before the printed 4 letter strings and finally figured out that it has to be OUTSIDE of the loop. and before it

console.log("---------------------")
console.log("---------------------")

// 2. Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.
// GOAL : make up a list of words w/ random uppercase and lowercase letters. store them in a variable to make an array
// print the words with only lowercase letters
// PSUEDO :
// var moreWords = "I", "aM", "rEaLy", "BOOOrinG"
// we need to loop thru the whole array. I'm going to cpy and paste what we made earlier
// for (var i = 0; i < moreWords.length; i++)      <-- nice 
// our if statement needs to use a a lowercase method.. I Think??? I'm going to google tbh I dont remember... brb
// ok, yeah looks like its .toLowerCase() .... lets keep moving
// nope, I don't think we need an if statement, rather just print using the lowercase mthd
// sooo tying it all together it will look something like this
// var moreWords = "I", "aM", "rEaLy", "BOOOrinG"
// for (var i = 0; i < moreWords.length; i++) 
// console.log(moreWords.toLowerCase())            <-- obviously the syntax is not right but thts the idea


var moreWords = ["I", "aM", "rEaLy", "BOrinG", "zzZZzzZZ"];
for (var i = 0; i < moreWords.length; i++) {
console.log(moreWords[i].toLowerCase())  
}

console.log("---------------------")
console.log("---------------------")

// 3. Write a method or function that removes all instances of the letter s in a string. 
// GOAL : make a variable that stores a **single string** with som S's in it. get rid of all S's !!! but keep the rest
// PSUEDO :
// is there a method that removes a single letter? heading to the google lords
// the .removeAll() method !! wow, so aptly named.
// I think we can just make 2 vaiables, one with the S's and another with the method and argument. Then a console.log to print
// var stringWithS = "The coach gave us a smile.";
// var stringWOS = "stringWithS.replaceAll('s', '');
// ?????????? not sure lets try it

var stringWithS = "Coach gave us a smile";
var stringWOS = stringWithS.replaceAll('s', '');

console.log(stringWOS);


// 4. The method or function should accept a string as an argument and return the same string with every instance of the letter s removed.


// 5. Start with an array of hobbies. Print out only the words that end in "ing".