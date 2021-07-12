// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.length)

// a) Your answer: will log the length of the cohort. .length is built-in function to return the length of the string.
// b) Verify and explain: The output is 12. and it did calculate the length:Charlie(7) + space(1) + 2021(4)=12


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])
console.log(greeting[4])

// a) Your answer:greeting[index] will log the content within the index location. Then it will be the second l.
// b) Verify and explain: l. As I expected. Cool! And I want to make sure it the second l, I console.log greeting[4] to see if it will be o.Yes. o verified.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1

console.log(languages[index])

// a) Your answer: the console.log will be console.log(languages[1]) and languages[1] will be the second item in the array. The output should be "Ruby".
// b) Verify and explain:Yes. The output is Ruby. And just for review array index start from 0.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
console.log(weekendDays[0].toUpperCase())//Fixed. Output:SATURDAY.
console.log(weekendDays[1].toUpperCase())//SUNDAY

// a) Your answer:toUpperCase() is a very usful built-in function and it will turn the output to uppercase. BUT i am not sure it will work with array.

// b) Verify and explain:TypeError:weekendDays.toUpperCase is not a function. Review: string method as the name works on the single string.
//Fix the function from :console.log(weekendDays.toUpperCase()) as above, the output is SATURDAY.



// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)://typeof 3--->output: number
console.log(dataTypes.length)//Output:3
console.log(typeof true)// "Boolean"<----output will be a string.

// a) Your answer: Arrey has Length Property. dataTypes.length will be 3. and typeof 3 will be number.  I am not sure typeof here but try. 
// b) Verify and explain:the output is number. Review: The typeof operator returns the data type of its operand in the form of a string.
//The operand can be any object, function, or variable. <-----Interesting!!!
//Check out the dataTypes.length's value is simple~~:>
