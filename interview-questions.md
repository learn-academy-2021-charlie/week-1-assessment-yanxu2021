# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a function? Why would you use one?

  Your answer:
  - I understand the "function" similar as a machine, maybe you don't have that in front of you/physically see it and own it. But you know someone made it with the purpose for replacing human's work and it can perform the job exactly as it made it with and do the work unless you cancel the task or you destroy the machine. 
  - You don't have to know how to make it to use the function.
  - The function like a machine supposed to serve every time you want to use it/if the machine doesn't work properly you need figure out by yourself or other people, machine itself can't not figure out what the problem.


  Researched answer:
  **Functions** are a fundamental building block in JavaScript and in programming in general. Functions are reusable pieces of code that only execute when invoked and always return an output. Functions can have information (arguments) passed into the scope of the function through placeholders called parameters. Functions are designed to be used many times in a program and should be as generic as possible while still being descriptive as to their purpose.
- Functions are little machines that run when we decide and how often we decide.
- Functions should be relatively neutral.
- Encapsulation, one of the four pillars of OOP. The function logic is entirely contained in the function and doesn't rely on any external information other than the given input.


2. In regards to functions, what is the difference between an argument and a parameter?

  Your answer:Most of times they seem same value but different name, actually they are very different. Argument for function is more like a placeholder you gonna use that to perform the actual operations within the function. Parameter is the specific value to transfer to argument when you need invoke the function. -------->>>>>>My answer is wrong!!! Opposite!!! ARGUMENT IS THE ACTUAL CONTENT! PARAMETER IS LIKE A PLACEHOLDER.  In Chinese, it is easy to tell the difference. 形(means form)参 and 实(means actual)参
  

  Researched answer:
  - A **parameter** is a placeholder variable that is defined inside the parentheses of the function expression. Once it is defined in the parentheses, it can be leveraged anywhere in the function logic.
  - The parameter is then assigned a value called an argument. An **argument** is the actual content passed to the function inside the parentheses of the function invocation. The argument value must be a data type recognized by JavaScript. The argument is represented in the function for every instance of the parameter. 
  - It is important to remember when creating function logic that functions should always be **encapsulated**. This means the logic in your function cannot reference other information in your program. The problem with this is without any external information the function logic is limited. Functions often require external information in order to perform the appropriate task.   This problem is solved by function parameters and arguments.



3. What is an index? What is the difference between index and value?

  Your answer: The "index" concept is really important to understand string or array, which is ordered value or data. "index" to me sounds same as "location". e.g. When I take a look at a array, I am curious how many items in an array and what is the location/index of each item. The difference between index and value, e.g. myName = "yan", the value here, my name is yan. "yan" is the value. And myName has three letter total, it is y, a, n, not a, y, n, or n, a, y........The order number is the index of myName. First letter(index 0) is y, and so on.

  Researched answer:Every value in an array has a particular location know as the **index**. Indexes are sequential numbers that are a bit like an address for every element in the array. Arrays are zero indexed which means the elements are numbered starting with the number 0 and increase by one whole number for each new element. Index of a string is a particular character.**Value** = element's content. 


4. What is a built-in method?

  Your answer: Some operations we already know how to do and we need do that all the time but don't want to repeat(created or defined by yourself everytimes), we can simplified the process to create some built-in method/ function to perform this specific operations so easy just by calling the name. 

  Researched answer:A function which is already defined in a program or programming framework with a set of statements, which together performs a task and it is called Build-in function. So users need not create this type of function and can use directly in their program or application.


5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer: Pair programming is very useful and necessary for the mordern software development. As my experience, when pair program, two people will take turns and work together to finish the same job assignment. How to do that, use Git(version control techniques) and GitHub(remote repositories) to work on the same project without worring about different versions/ or new updates. Other techniques included but not limited to use: terminal skills, Agile, White board... Roles: Driver and Navigator. Drive start the project(create remote repository/branch/local files/), manage the process. The navigator is watching and follow up the driver's pace, advise and help driver. They work together to debug and move the project forward. 

  Researched answer:Two peopel collaborating on one computer to collectively produce one program. It is a very collaborative way of working and involves a lot of communication. While a pair of developers work on a task together, they do not only write code, they also plan and discuss their work. They clarify ideas on the way, discuss approaches and come to better solutions.
  **The Roles** One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed in. The two programmers switch roles frequently. Both must understand why and how."How do we talk" is very critical for the whole pair programming process.


6. What is something we did in class this week you found helpful?  

  Your answer: Since I have got some college computer science courses, I do feel LEARN's class is more practical, we have enough time to pair programming , which is collaborative and easy for everyone get involved instead of the boring lecture. Lot appreciates for others' idea\ hardwork.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Iteration:An explanation of iteration, as used in algorithms and programming. Transcript. Algorithms consist of steps that are carried out (performed) one after another. Sometimes an algorithm needs to repeat certain steps until told to stop or until a particular condition has been met. Iteration is the process of repeating

2. Higher Order Functions:is a function that does at least one of the following: takes one or more functions as arguments, returns a function as its result. All other functions are first-order functions.

3. Jest:Jest is a JavaScript testing framework maintained by Facebook, Inc. designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications.

4. Classes:In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods)

5. React:React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
