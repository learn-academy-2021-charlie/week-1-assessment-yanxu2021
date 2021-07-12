// ASSESSMENT 1: Coding practical questions
// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, 
//at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", 
//"350 is above boiling point", "212 is at boiling point"

//Gonna use function and conditional concepts to answer this questions.
//Function syntax: const temperature = (temp) => { conditional return}
//Conditionals: below, at, above, else invaild input for non-number variables.


const temperature = (temp) => { 
    if(temp < 212){
        return `${temp} is below boiling point.`
    }else if(temp === 212){
        return `${temp} is at boiling point.`
    }else if(temp > 212){
        return `${temp} is above boiling point.`
    }else{
        return "Invaild temperature."
    }
}

var temp1 = 35
console.log(temperature(temp1))//Output: 35 is below boiling point.
var temp2 = 350
console.log(temperature(temp2))//Output: 350 is above boiling point.
var temp3 = 212
console.log(temperature(temp3))//Output: 212 is at boiling point.
var temp4 = true
console.log(temperature(temp4))//Output: true is below boiling point....true == 1 
var temp5 = "yan"
console.log(temperature(temp5))//Output: Invaild temperature.Cool!

//ReferenceError: retrun is not defined------>>>wrong spelling !!! Attention !!Different color~~~~


// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]
//Use mutators to modify the array. <----Method. 
// .concat() to merge two or more arrays to form one combined array. Plus the original array is unchanged!!!
//To sort the array. Use .sort() alphabetize/least to greatest. Go!
var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

const singleSortArray = (numbers1, numbers2) =>{
    //return numbers1.concat(numbers2)---->[3,7,0,36,-9,8,-7,22,9,13]
    //return numbers1.concat(numbers2).sort()---->>[-7,-9,0,13,22,3,36,7,8,9]
    //It seems .sort() handles the array itms as strings.

    //Googled and Get the method below from stackoverflow:
    var newNumbers = new Float64Array(numbers1.concat(numbers2))
    return newNumbers.sort()   
    //Output as expected: Float64Array(10) [-9, -7,  0,  3,  7, 8,  9, 13, 22, 36]
    //The Float64Array typed array represents an array of 64-bit floating point numbers (corresponding to the C double data type) in the platform byte order. 
    //If control over byte order is needed, use DataView instead. The contents are initialized to 0 
}

console.log(singleSortArray(myNumbers1,myNumbers2))


// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"
//Using string methods and properties to solve this problem.
//Referencing a single character fromn the string by its index......same as array...indexOf String.
//myString1[0].....continue. until the string.length.
//Returns the string with all letters reversed. i from string.length and i--; Go!

const letterReversed = (string) =>{
    var newString=""//It is very important to put newString outside the loop because We need print out the final string.
    for(var i=string.length-1; i >= 0; i--){
        //console.log(string[i])---->Output will be in separate line. 
        //Return will stop the loop and only return the last letter of the string.
        
        newString += string[i]     
        
    }
    return newString//Use return NOT console.log() which will output: undefined!!!
}
var myString1 = "bravo"
var myString2 = "charlie"

console.log(letterReversed(myString1))
console.log(letterReversed(myString2))


// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12
//Create function with two arguments. 
//Conditional : compare two numbers. if==, else if> , else<
//Do subtraction.Go!!

const subtraction = (fNumber, sNumber) =>{
    if(typeof fNumber != "number" || typeof sNumber != "number"){
        return `Your input is not a number!`
    }
    else if(fNumber === sNumber){
        return `${fNumber} is equal to ${sNumber}, the difference is ${fNumber-sNumber}.`
    }else if(fNumber > sNumber){
        return `${fNumber} is greater than ${sNumber}, the difference is ${fNumber-sNumber}.`
    }else{
        return `${fNumber} is smaller than ${sNumber}, the difference is ${sNumber-fNumber}.`
    }
}
var numberExample1 = 42
var numberExample2 = 27
console.log(subtraction(numberExample1 , numberExample2))
//42 is greater than 27, the difference is 15.
var numberExample3 = 7
var numberExample4 = 19
console.log(subtraction(numberExample3 , numberExample4))
//7 is smaller than 19, the difference is 12.



// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. 
//Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)
//Conditionals will be: unExpected input ------>>Expected output: "Your input is not a number"
//Using logic or to check if there is typeof != number .Go!!!
//Since function can work anywhere simply by invoking it !!Please see the function above!:)

var numberExampleRefactor1 = 42
var numberExampleRefactor2 = "hello"
console.log(subtraction(numberExampleRefactor1 ,numberExampleRefactor2 ))
//Your input is not a number!
//Forgot to put number with ""! the typeof gonna return a string to compare. 
//Without "", the output will be undefined.

var numberExampleRefactor3 = 27
var numberExampleRefactor4 = 24
console.log(subtraction(numberExampleRefactor3 , numberExampleRefactor4))
//27 is greater than 24, the difference is 3.
