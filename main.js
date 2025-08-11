// //Creating a variable//
// // let val;
// // let firstName = "Simple";
// // firstName = "Williams";

// // let lastName = "Chinonso";
// // lastName = "Chi"

// // const firstName = "Simple"
// // firstName = "   Chi"
// // val = firstName; 
// // val = lastName;

// // console.log(val)

// //Creating Data Type
// // data types refer to the types of values that variables can hold. 

// let firstName = "Simple"; //string
// // const age = 34; // number
// let is_good = true; //boolean
// let key //undefined
// let pay = null // null
// let sym = Symbol()

// console.log(firstName)
// console.log(typeof(firstName))
// // console.log(age)
// // console.log(typeof(age))
// console.log(is_good)
// console.log(typeof(is_good))
// console.log(key)
// console.log(typeof(key))
// console.log(null)
// console.log(typeof(null))
// console.log(sym)
// console.log(typeof(sym))

// operators are special symbols or keywords used to perform operations on values (also called operands). These operations can be mathematical, logical, or used for assignment, comparison, etc.
// // creating ternary operator

// // let age = 20

// // let isAdult = age >= 18 ?  "You are an adult" : "You are not an adult"
// // console.log(isAdult);

// // let temp = 250

// // let weather = temp > 30 ? "Hot" : "Cold"
// // console.log(weather)

// function weather(temp){
//     return temp > 30 ? "Hot" : temp == 30 ? "Moderate" : "Gold"
// }
// console.log(weather(30))

// function student(grade){
//     return grade >= 60 ? "Pass" : "Fail"
// }
// console.log(student(60))

// //logical operator are used to combine conditional statements and make decisions in your code //
// let x = 5
// // AND (&&)
// //Return true if both conditional are true
// let result = (10 > 3) && (5 > 3)
// console.log(result)

// // OR(||)
// //Return true if at last one conditional is true 
// let simple = (3 > 6) || (5 < 9)
// console.log(simple)

// //NOT (!)
// //Return the oppoite of the condition
// let Azeez = !(15 > 5)
// console.log(Azeez)

// //using both ternary operator and logical operator
// // let age = 2
// // let driverLicense = true

// // let canDrive = age >= 18 && driverLicense ? "You are Eligible to drive" : "You are not Eligible to drive"
// // console.log(canDrive)

// function canDrive(age, driverLicense){
//     return age >= 18 && driverLicense ? "You are Eligible to drive" : "You are not Eligible to drive"
// }

// console.log(canDrive(20, true))

// //using logical operator (&&, ||, !)

// //falsy value
// false
// 0
// null
// undefined
// NaN
// // ""(empty, string)
// //Logical AND (&&)
// //Return the last evaluated value if all operand are truthy
// let result1 = 10 && "Hello"
// console.log(result1)
// //If any operandb is falsy return the first falsy operand
// let result2 = 0 && "chi"
// console.log(result2)


// //Logical Or (||)
// //Return the first evaluated value if any operand is truthy
// let result3 = null || 20
// console.log(result3)
// //If all operandis are falsy return the last falsy operand
// let result4 = "" || undefined
// console.log(result4)



// //learning if/else statement switch
// //if/else statement is a type of conditional statement that allows you to execute different blocks of code bassed on conditions

let age = 15

if (age >= 18) {
    console.log("You are an adult");
}else {
    console.log("You are not an adult")
}

let temperature = 37

if (temperature >= 28) {
    console.log("The temperature is Holt")
}else {
    console.log("The temperature is Gold")
}

if (temperature > 35) {
    console.log("Holt")
}else if (temperature >= 30){
    console.log("Moderate")
}else{
    console.log("Gold")
}

let timeOfDay = "afternoon"

if (timeOfDay === "Afternoon") {
    console.log("Good Afternoon")
} else if (timeOfDay === "Morning"){
    console.log("Good Morning")
}else{
    console.log("Good evening")
}

const timeOfDays = (time) => {
    if (time === "evening") {
        return "Good Evening"
    }else if (time === "morning") {
        return "Good Morning"
    }else{
        return ("Good afternoon")
    }
}
console.log(timeOfDays("morning"))

const timeOfDayy = (hour) => {
    if (hour >= 5 && hour < 12) {
        return "Good Morning"
    }else if (hour >= 12 && hour < 17) {
        return "Good AFternoon"
    }else{
        return "Good Evening"
    }
}
console.log(timeOfDayy(17))

//switch case

let dayOfWeek = 4

switch(dayOfWeek){
    case 1:
       console.log("Sunday")
       break
    case 2:
       console.log("Monday")
        break
    case 3:
       console.log("Tuesday")
       break
    case 4:
        console.log("Wednesday")
        break
    default:
        console.log("Other day")
}

const dayWeek = (dayNumber) =>{
    switch(dayNumber){
        case 1:
            return "Monay"
        case 2:
            return "Tuesday"
        case 3:
            return "wednesday"
        default:
            return "Other day"
    }
}
console.log(dayWeek(2))

let weekend = true

switch(weekend){
    case true:
        console.log("Enjoy your weekend")
        break
    default:
        console.log("Not weekend yet!")
}

const week = (end) => {
    switch(end){
        case true:
            return "Enjoy your weekend"
        default:
            return "Not weekend yet!"    
    }
}

console.log(week())


let score = 90

switch(true){
    case score >= 80:
        console.log("Excellent")
        break
    case score >= 70:
        console.log("Pass")
        break
    case score >= 60:
        console.log("Good")
        break
    default:
        console.log("fail")
}

const scores = (grade) => {
    switch(true){
        case grade >= 80:
            return "Excellent"
        case grade >= 70:
            return "Pass"
        case grade >= 60:
            return "Good"
        default:
            return "Fail"
    }
}
console.log(scores(80))


//looping statement/iteration (for, while, do-while, for-in, for-of)
// In programming, a loop is a control structure that allows you to execute a block of code repeatedly for a specified number of times or until a certain condition is met.

// There are several types of loops in JavaScript:

// 1. *For Loop*: A for loop is used to execute a block of code for a specified number of times. It has three parts:

let numbers = [1,2,3,4,5] // we are creating an array called numbers with 5 element numbers of 1,2,3,4 and 5
let sum = 0 // we are creating a variable called sum and initializing to 0: this sum will hold the sum of all the numbers in the array

// for(let i = 0; i < numbers.length; i++)this will iterate over the numbers array

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i] //Inside the loop, we're adding the current element of the `numbers` array to the `sum` variable. We're using the `+=` operator, which is shorthand for `sum = sum + numbers[i]`.
    // 5. `console.log(sum);`: After the loop finishes, we're logging the final value of `sum` to the console.
    
}
console.log(sum)


// priting number from one to ten using for loop

for (let a = 1; a <= 10; a++) {
    console.log(a)
}

for (let b = 10; b >= 1; b--) {
    console.log(b)
}
//outer loop starts
for(let c = 1; c <= 5; c++){
    // Inner loop is *nested* inside the outer loop
    for(let d = 1; d <= 5; d++){
        console.log(c, d)
    }
}

// this code is called combination
for(let e = 1; e <= 5; e++){
    if (e === 3) {
        continue // Skip the rest of this loop when e is 3
    }
    console.log(e)
}
for(let f = 1; f <= 7; f++){
    if (f === 7) {
        break // Exit the loop completely when f is 7
    }
    console.log(f)
} 
    

// 2. *While Loop*: A while loop is used to execute a block of code as long as a certain condition is true.

let g = 1

while(g <= 8){
    console.log(g)
    g++
}

let h = 5

while(h >= 1){
    console.log(h)
    h--
}

let number = [1,2,3,4,5]
let go = 0
let j = 0

while(j < number.length){
    go += number[j]
    j++
}
console.log(go)


// 3. *Do-While Loop*: A do-while loop is similar to a while loop, but it executes the block of code at least once before checking the condition.

let k = 1

do{
    console.log(k)
    k++;
}while(k <=10)


let numberr = [1,2,3,4,5]
let come = 0
let l = 0

do{
    come += numberr[l]
        l++
}while(l < numberr.length)
    console.log(come)


// 4. *For...of Loop*: A for...of loop is used to iterate over the values of an iterable object, such as an array or a string.

let fruits = ["apple", "orange", "mango", "banana"]
for(let fruit of fruits){
    console.log(fruit)
}

let message = ["Hello world"]
for(let item of message){
    console.log(item)
}


// 5. *For...in Loop*: A for...in loop is used to iterate over the properties of an object.
let person = {
    namm: "Nonso",
    age:  20,
    gender: "male"
}
// console.log(person)

for(let item in person){
    console.log(`${item}: ${person[item]}`)
}

for(let item of Object.values(person)){
    console.log(item)
}

// Example:
// ```
// const person = { name: 'John', age: 30 };
// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }
// ```

// adding money to your bank account
let c = 4
console.log(c += 6)

// checking if two thing are not the same
let x = 5;
console.log(x != 4)


// checking if two thing are not the same in value and type
let b = 6;
console.log(b !== "6")

// multiplying number together
let d = 3 
console.log(d * 20)

// Loops are useful for:


//DOM
// The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree-like data structure, where each node in the tree represents an element, attribute, or piece of text in the document.

// const headerElement = document.querySelector("#header")
// headerElement.style.backgroundColor = "red"
// headerElement.style.color = "white"
// headerElement.style.textAlign = "center"
// headerElement.style.fontSize = "25px"

// const listElement = document.querySelectorAll("li")
//     listElement.forEach((item) => {
//         item.style.fontSize = "30px"
//         item.style.textAlign = "center"
//         item.style.color = "purple"
//     })


//     In JavaScript, events refer to actions or occurrences that happen in a web page, such as user interactions, network requests, or changes in the state of a page. JavaScript provides a way to respond to these events using event handlers or event listeners.

// Here are some common types of events in JavaScript:

// 1. *Mouse events*:
//     - `click`: Fired when an element is clicked.
//     - `dblclick`: Fired when an element is double-clicked.
//     - `mousedown`: Fired when a mouse button is pressed.
//     - `mouseup`: Fired when a mouse button is released.
//     - `mousemove`: Fired when the mouse is moved.
// 2. *Keyboard events*:
//     - `keydown`: Fired when a key is pressed.
//     - `keyup`: Fired when a key is released.
//     - `keypress`: Fired when a key is pressed and released.
// 3. *Form events*:
//     - `submit`: Fired when a form is submitted.
//     - `change`: Fired when the value of a form element changes.
//     - `focus`: Fired when an element receives focus.
//     - `blur`: Fired when an element loses focus.
// 4. *Window events*:
//     - `load`: Fired when a page has finished loading.
//     - `unload`: Fired when a page is being unloaded.
//     - `resize`: Fired when the window is resized.
//     - `scroll`: Fired when the window is scrolled.



// const text = document.querySelector(".MyText")
// const button = document.querySelector(".MyButton")
 
// button.addEventListener("click", () => {
//     text.innerHTML = (" I clicked the button")
// })


// let count = 0

// const countDisplay = document.querySelector('.count')
// const buttons = document.querySelectorAll(".cout button")

// buttons[0].addEventListener("click", () => {
//     count--;
//     countDisplay.textContent = count
// })

// buttons[1].addEventListener("click", () => {
//     count = 0
//     countDisplay.textContent = count
// })

// buttons[2].addEventListener("click", () => {
//     count++;
//     countDisplay.textContent = count
// })



let count = 0;

const countDisplay = document.querySelector('.count');
const buttons = document.querySelectorAll('.cout button');

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const action = button.getAttribute('data-action');

    if (action === "decrease") count--;
    if (action === "reset") count = 0;
    if (action === "increase") count++;

    countDisplay.textContent = count;

    color()
    counts()
  });
});


const color = () =>{
    if (count < 0) {
        countDisplay.style.color = "red"
    }else if (count > 0) {
        countDisplay.style.color = "green"
    }else{
        countDisplay.style.color = "black"
    }
}

const counts = () => {
    if (count % 3 === 0 && count % 5 === 0) {
        alert("FuzzBuzz")
    }else if (count % 3 === 0) {
        alert("Fuzz")
    }else if (count % 5 === 0) {
        alert("Buzz")
    }
}

// const result = document.querySelector('.result')
// const decrease = document.querySelector('.decrease')
// const reset = document.querySelector('.reset')
// const increase = document.querySelector('.increase')

// decrease.addEventListener("click", () => {
//     result.innerHTML--;
// })

// reset.addEventListener("click", () => {
//     result.innerHTML = 0;
// })

// increase.addEventListener("click", () => {
//     result.innerHTML++;
// })

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector(".forms").onsubmit = onsubmitHandler
})

function onsubmitHandler(){
    const MyTex = document.querySelector(".MyTex").value
    document.querySelector(".my-text").innerHTML = MyTex
    return false
}

// const changesElement = document.querySelector('.changes')
// const buttonElement = document.querySelectorAll('button')

// buttonElement.forEach(buttonElement => {
//     buttonElement.addEventListener("click", () =>{
//        const color = buttonElement.className //classList[0]
//        changesElement.style.color = color

//     })
// })


document.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector(".red").onclick = function(){
        document.querySelector(".changes").style.color = "red"
    }

    document.querySelector(".green").onclick = function(){
        document.querySelector(".changes").style.color = "green"
    }
     document.querySelector(".yellow").onclick = function(){
        document.querySelector(".changes").style.color = "yellow"
    }
})

// document.addEventListener("DOMContentLoaded", ()=> {
//     document.querySelector(".act").onsubmit = function(){
//         if (document.querySelector(".email").value === "") {
//             alert("Please enter your email address")
//             return false
//         }else if (document.querySelector(".password").value === "") {
//             alert("Please enter your password")
//             return false
//         }else{
//             return true
//         }
//     }
// })

const emailInput = document.querySelector('.email')
const passwordInput = document.querySelector('.password')
const loginButton = document.querySelector('.login')
const longForm = document.querySelector('.act')
const hereElement = document.querySelector('.here')

longForm.addEventListener("submit", (e) => {
    const email = emailInput.value
    const password = passwordInput.value


    if (email === "" && password === ""){
        hereElement.textContent = "Please fill out the form fields"
        e.preventDefault()
    }else if (email === "") {
        hereElement.textContent = "Email is empty"
        e.preventDefault()
    }else if (password === "") {
        hereElement.textContent = "Password is empty"
        e.preventDefault()
    }else{
        emailInput.value = "";
        passwordInput.value = "";
    }
})


//String Property AND Methods

// let val;

// let firstName = "Simple";
// //Property
// val = firstName.length
// //Method
// val = firstName.toUpperCase()
// val = firstName.charAt(3) // charAt` is a string method in JavaScript that returns the character at a specified index (position) in a string.
// val = firstName.indexOf('m')
// val = firstName.split(' ')  //is a string method in programming that divides a string into an array of substrings based on a specified separator
// val = firstName.replace('Simple', 'Williams')
// val = firstName.endsWith('y')
// val = firstName.substring(1, 4)
// val = firstName.charAt(3).toUpperCase()
// console.log(val)


//ARRAY is variables that hold mutiple values
// let tasks = ["study", "praticing", "sleep"]
// console.log(tasks)
// let val;

// let tasks = ["study", "praticing", "sleep"]
// //get a value
// console.log(tasks[2])
// //method
// tasks.push("coding")// add a value to the end
// tasks.unshift("read")// add a value to the begiing
// tasks.pop()// remove the lasst item
// tasks.shift()// remove the first item
// tasks.splice(0,2)// take of data from the array 
// // is check if something is an array
// let me = Array.isArray(tasks)
// // val = tasks.length
// console.log(me)
// // val = tasks


//Array Methods

const tasks = ["eat", "sleep", "code"]

tasks.push("coding"); // Adds "coding" to the end of the array
console.log(tasks); // ["eat", "sleep", "code", "coding"]

tasks.pop(); // Removes the last element ("coding")
console.log(tasks); // ["eat", "sleep", "code"]

tasks.shift(); // Removes the first element ("eat")
console.log(tasks); // ["sleep", "code"]

tasks.unshift("exercise"); // Adds "exercise" at the beginning
console.log(tasks); // ["exercise", "sleep", "code"]

tasks.splice(1, 0, "study"); // Inserts "study" at index 1
console.log(tasks); // ["exercise", "study", "sleep", "code"]
//splice(start, deleteCount, item1, item2, ...) can add, remove, or replace elements.
// Here, at index 1, we delete 0 and insert "study".

tasks.forEach(task => console.log(task)); 
// Logs: "exercise", "study", "sleep", "code"
//forEach() loops over the array, running a function once for each item. It does not return a new array.

const upperTasks = tasks.map(task => task.toUpperCase())
console.log(upperTasks); // ["EXERCISE", "STUDY", "SLEEP", "CODE"]

const longTasks = tasks.filter(task => task.length > 4)
console.log(longTasks); // ["exercise", "study", "sleep"]
//filter() creates a new array with only the items that pass a condition.

//reduce is a method that reduce an array to a signle value
const totalTasks = tasks.reduce((sum, task) => sum + task.length, 0)
console.log(totalTasks);// Total characters in all tasks
//reduce() takes a function and reduces the array to a single value (like a total, sum, or object).

const foundTask = tasks.find(task => task.includes("e"));
console.log(foundTask); // "exercise" (first match)
//cfind() returns the first element that satisfies the condition.
// What is `sort()`
// `sort()` is a method in JavaScript that sorts the elements of an array in place, meaning it modifies the original array. By default, it sorts the elements as strings in ascending order, based on their UTF-16 character codes.
const sortedTasks = [...tasks].sort();
console.log(sortedTasks); // Alphabetically sorted
//sort() arranges items based on UTF-16 character order. Always clone with [...array] if you want to keep the original.

const reversedTasks = [...tasks].reverse();
console.log(reversedTasks); // Reversed order
//reverse() flips the order of elements. Like sort(), it modifies the original array, unless you clone it first.
//*How does `reverse()` work?*
//When you call `reverse()` on an array, it swaps the positions of the elements, starting from the beginning and end of the array, and working its way towards the middle.

const allTasks = tasks.concat(["Simple", "Williams"])
console.log(allTasks);// Combines both arrays
//concat() joins arrays into one without modifying the original.

const tasksString = tasks.join("-")
console.log(tasksString);// "exercise - study - sleep - code"
//join() turns the array into a single string, using a separator like space, comma, dash, etc.



const index = tasks.indexOf("sleep");
console.log(index); // 2
//indexOf() finds the first index of an item. Returns -1 if not found.


const hasCode = tasks.includes("code")
console.log(hasCode);true
//includes() checks whether an item exists in the array. Returns true or false.




//String methods
const messages = " Hello javaScript World! "
console.log(messages);
// " Hello JavaScript World! "

const trimmed = messages.trim()
console.log(trimmed); // Removes whitespace from both ends
// "Hello JavaScript World!"

const upper = messages.toUpperCase()
console.log(upper);// Converts string to uppercase
// "HELLO JAVASCRIPT WORLD!"

const trims = messages.toLowerCase()
console.log(trims);// Converts string to lowercase
// "hello javascript world!"

const sliced = trimmed.slice(6, 16); // Extracts characters from index 6 to 15
console.log(sliced); 
// "JavaScript"

const part = trimmed.substring(6, 16); // Also extracts from 6 to 15 (similar to slice)
console.log(part); 
// "JavaScript"


const sub = trimmed.substr(6, 10); // Gets 10 characters starting from index 6
console.log(sub); 
// "JavaScript"
// Note: `substr()` is deprecated, better to use `slice()` or `substring()`

const words = trimmed.split(":"); // Splits string into an array by space
console.log(words); 
// ["Hello", "JavaScript", "World!"]

const joined = words.join("-"); // Joins array into string using "-"
console.log(joined); 
// "Hello-JavaScript-World!"

const includesWord = trimmed.includes("javaScrip"); // Checks if substring exists
console.log(includesWord); 
// true

const position = trimmed.indexOf("javaScript"); // Finds index of substring
console.log(position); 
// 6

const replaced = trimmed.replace("World", "Universe"); // Replaces first match
console.log(replaced); 
// "Hello JavaScript Universe!"

const character = trimmed.charAt(0); // Gets character at index 0
console.log(character); 
// "H"

const combined = "Hello".concat(" ", "World"); // Combines multiple strings
console.log(combined); 
// "Hello World"




//OBJECT LITERALS
//[], {}

// const persons = {
//     firstName: "Simple",
//     age: 24,
//     gander: "male",
//     hobbies: ["cooking", "sleeping", "cooding"],
//     address: {
//         state: "Anambra",
//         city: "onitsha"
//     }
// }
// console.log(persons.firstName)
// console.log(persons.hobbies)
// console.log(persons.hobbies[1])
// console.log(persons.address.city)
// console.log(persons)

//Array OF AN OBJECT
// const tasks = [
//     {
//         id:1,
//         task: "Html",
//         isComplete: true
//     },
//     {
//         id:2,
//         task: "css",
//         isComplete: true
//     },
//     {
//         id:3,
//         task: "tailwind",
//         isComplete: true
//     },
//     {
//         id:4,
//         task: "Git & Git Gub",
//         isComplete: true
//     },
//     {
//         id:5,
//         task: "Javascript",
//         isComplete: false
//     },
// ]
// const task = JSON.stringify(tasks)
// console.log(tasks)
// console.log(tasks[1])
// console.log(tasks[1].task)

//forEach is a method that allows you to interate over an array and execute function for each element in the array
// tasks.forEach(function(task){
//     return task
// })
// console.log(tasks[4])

//map is a method that allows you to create a new array by tranforming each element of an existing array
// const rest = tasks.map(function(task){
//     return task
// })
// console.log(rest[3].task);

//filter is a method that allows you to create a new array with only the element that meet a certain condition 
// const rests = tasks.filter(function(task){
//     return task.isComplete === true
// }).map(function(task){
//     return task.task
// })
// console.log(rests);


// const numberss = [1,2,3,4,5]

// const foundNumber = numberss.find((number) => number > 4)
// console.log(foundNumber);


// //Based on what you've learned, I'd like to give you an assignment to practice your skills. Here's a task:

// // *Assignment:*

// // Create a JavaScript program that does the following:

// // 1. Declare a string variable `fullName` with your full name.
// let val;

// let firstNames = "simple williams"

// val = firstNames

// // 2. Use string methods to extract your first name and last name from the `fullName` variable.
// val = firstNames.split(' ')

// console.log(val)

// let fullName = "Simple ChukwuNonso"
// let names = fullName.split(' ')
// let firstName = names[0]
// let lastName = names[1]

// console.log(firstName)
// console.log(lastName)

// // 3. Create an array `hobbies` with at least 3 of your favorite hobbies.
// const hobbies = ["FootBall", "Music", "Dancing"]
// // 4. Use array methods to add a new hobby to the end of the array and remove the first hobby from the array.
// hobbies.push("Cooking")
// hobbies.pop()
// hobbies.unshift("Eating")
// hobbies.shift()
// console.log(hobbies)

// // 5. Create an object `person` with properties `firstName`, `lastName`, `age`, and `hobbies`. Assign the extracted first name and last name from step 2 to the `firstName` and `lastName` properties, respectively. Assign the `hobbies` array from step 3 to the `hobbies` property.
// const persons = {
//     firstName: firstName,
//     lastName: lastName,
//     age: 25,
//     hobbies: hobbies
// }
// console.log(persons)


//More on Objects

// const person = {
//     name: "Giddy",
//     age: 23,
//     gender: "male",
//     greet: function(){
//         return(`my is ${this.name} and I am ${this.age} years old`);
//     }
// }
// console.log(person.greet())

// Factory Function, a function that returns a new object. It acts like a factory — producing new instances when called, without using class or new.


// function createPerson (name, age){
//     return{
//         name: name,
//         age: age,
//         Hello: function(){
//             console.log(`my name is ${this.name} and I am ${this.age} years old`);
//         }
//     }
// }
// const person1 = createPerson("Nonso", 24)
// // person1.Hello()
// const person2 = createPerson("Zainab", 29)
// // person2.Hello()

// //Constructor Function is a special type of function used to create and initialize objects. It works with the new keyword to construct instances of a custom object type.
// function Person(name, age){
//     this.name = name
//     this.age = age
//     this.Hello = function(){
//         console.log(`my name is${this.name} and I am ${this.age} years old`);
//     }
// }
// const person3 = new Person("Bassey", 40)
// person3.Hello()
// const person4 = new Person("Victor", 34)
// person4.Hello()
// const person5 = new Person("Simple", 27)
// person5.Hello()


// function movie(name, genre, year){
//     return{
//         name: name,
//         genre: genre,
//         year: year,
//         check: function(){
//             console.log(`my movie is ${this.name} and its an ${this.genre} and ${this.year} year old`);
//         }
//     }
// }

// const movie1 = movie("simple", "action", 20)
// movie1.check()
// const movie2 = movie("will", "action", 10)
// movie2.check()


// function Book(name, author){
//     this. name = name
//     this.author = author
//     this.read = function(){
//         console.log(`i read a ${this.name} and is was written by ${this.author}`);
//     }
// }
// const book = new Book("simple will", "F. scott world")
// read1.read()
// const book = new Book("Jame will", " scott world")
// read2.read()



//Cloning Object
// const person = {
//     name: "Giddy",
//     age: 23,
//     gender: "male",
//     greet: function(){
//         return(`my is ${this.name} and I am ${this.age} years old`);
//     }
// }

// const clonedPerson = {... person, isStudent: true}
// console.log(ClonedPerson);

// const clonedObject = Object.assign({isStudent: false}, person)
// console.log(ClonedObject);


// function Person(name, age){
//     this.name = name
//     this.age = age
//     this.Hello = function(){
//         console.log(`my is${this.name} and I am ${this.age} years old`);
//     }
// }

// const clonedPerson = {... person3, state: "Abia State", occupation: "engineer" }
// // console.log(clonedPerson);
// const clonedPerson4 = {... person4, state: "imo State", occupation: "music" }
// // console.log(clonedPerson);

//String Object
// const text = "Hello, "
// const str2 = "World!"
// console.log(text.length);

//  console.log(text.charAt(2));

//  console.log(text.concat(str2));


//  const str = "Hello, World!"
//  console.log(str.indexOf("World!"));
//  console.log(str.lastIndexOf("l"));

//  console.log(str.slice(7, 13));
//  console.log(str.substring(7, 13));

//  console.log(str.substring(0, 5));


//  console.log(str.toLocaleLowerCase());
//  console.log(str.toLocaleUpperCase());


//  const newStr = "   Hello, World!  "
//  console.log(newStr.trim());

//  const fruits = "orange,mango,banana"
//  console.log(fruits.split(","));

//  console.log("World", "Universe");

//  console.log(str.startsWith("h"));
//  console.log(str.endsWith("World!"));


// More on Array

// const numbers = [1,2,3,4,5]
// console.log(numbers[2]);
// numbers[3] = 7

// numbers[5] = "grape"
// console.log(numbers.length);
// numbers.push(true, "olasile")
// console.log(numbers);

// const removedItem = numbers.pop()
// console.log(removedItem);
// numbers.pop()
// console.log(numbers);

// numbers.unshift("Giddy", 0)
// console.log(numbers);

// const deleteItem = numbers.shift()
// console.log(deleteItem);
// console.log(numbers);

// numbers.splice(4, 0, 4, "orange")
// console.log(numbers);

// numbers.splice(5, 2,)
// console.log(numbers);

// const students = ["Nonso", "Azeez"]
// students.unshift("Frank", "Sandra")
// students.push("Tolu", "Victor")
// students.pop()
// students.shift()
// students.splice(1,2)
// console.log(students);

// const numberss = [1,2,3,4,5]

// numbers.forEach((number)=>{
//     console.log(number *2);
// })



// // 6. Use `JSON.stringify()` to convert the `person` object to a JSON string and log it to the console.
// const personJson = JSON.stringify(persons)
// console.log(personJson)
// // 7. Log the `firstName`, `lastName`, and `hobbies` properties of the `person` object to the console.

// // - Log the `firstName`, `lastName`, and `hobbies` properties of the `person` object to the console.
// console.log(persons.firstName)
// console.log(persons.lastName)
// console.log(persons.hobbies)
// console.log(persons.hobbies[2])
// // Good luck with your assignment! If you have any questions or need help, feel free to ask.


//ES6 OOP
// *What is OOP?*

// OOP stands for Object-Oriented Programming. It's a way of writing code that simulates real-life objects and their interactions.

// *What are the main concepts of OOP?*

// 1. *Objects*: These are the "things" in your code that have properties and behaviors. For example, a car is an object that has properties like color, speed, and brand, and behaviors like accelerating and braking.
// 2. *Classes*: These are templates or blueprints for creating objects. A class defines the properties and behaviors of an object.
// 3. *Inheritance*: This is when one class inherits the properties and behaviors of another class. For example, a "SportsCar" class might inherit from a "Car" class.
// 4. *Methods*: These are functions that belong to an object or class. They define the behaviors of an object.

// let firstName = "Chinonso"
// let lastName = "ChukwuNonso"
// let isStudent = true

// function checkPerson(){
//     console.log(`Hello ${firstName} ${lastName} is he a student ${isStudent}`);
    
// }
// checkPerson()

// let personJ = {
//     firstName: "Chinonso",
//     lastName: "ChukwuNonso",
//     isStudent: true,
//     heckPerson(){
//       console.log(`Hello ${this.firstName} ${this.lastName} is he a student ${this.isStudent}`);
//     }
    
// }
// personJ.heckPerson()


//The constructor() is a special method that runs when a new object is created from the class.

// 1. Class Definition
//A class is like a blueprint for an object 
class Person{

    //2. Constructor Method
    constructor(firstName, lastName, isStudent){
        this.firstName = firstName
        this.lastName = lastName
        this.isStudent = isStudent
    }
    //✅ 3. Method heckPerson()
     heckPerson(){
       console.log(`Hello ${this.firstName} ${this.lastName} is he a student ${this.isStudent}`);
     }
    
}
//✅ 4. Creating Objects from the Class
const person1 = new Person("Simple", "Williams", false)
//✅ 5. Calling the Method (commented out)
// person1.heckPerson()
const person2 = new Person("Chinonso", "ChukwuNonso", true)
// person2.heckPerson()

class AreaCircle{
    constructor(radius){
        this.PI = 3.142
        this.radius = radius
    }

    calcArea(){
        let result = this.PI * this.radius ** 2
        console.log(`The area of the  circle is ${result}`);
        
    }
}
const area = new AreaCircle(9)
// area.calcArea()

class VolumeCylinder extends AreaCircle{
    constructor(radius, height){
        super(radius)
        this.PI = 3.142
        this.height = height
    }
    calcVolume(){
        let result = this.PI * this.radius ** 2 * this.height
        console.log(`The volume of the cylinder is ${result}`);
        
    }
}

const volume1 = new VolumeCylinder(7, 12)
// volume1.calcVolume()

//Summary (Quick Cheatsheet)
// Concept	Meaning
// Class	A blueprint for objects (like Circle or Cylinder)
// Constructor	Initializes values when an object is created
// Inheritance	One class gets properties/methods from another
// Polymorphism	A method behaves differently based on which class is using it
// super()	Calls the constructor of the parent class

class shap{
    constructor(color){
        this.color = color
    }
     area(){
        console.log("an area");
        
     }
}

class Circle extends shap{
    constructor(color, radius){
        super(color)
        this.radius = radius
        this.PI = 3.142
    }

    calcArea(){
        let result = this.PI  * this.radius ** 2
        console.log(`The area of the circle is ${result}`);
    }
}

const circle1 = new Circle("Brown", 7)
circle1.calcArea()


class Rectangle extends shap{
    constructor(color, width, height){
        super(color)
        this.width = width
        this.height = height
    }

    calcRect(){
        let result = this.width * this.height
        console.log(`The area of the rectangle is ${result}`);
    }
}

const rectangle1 = new Rectangle("Red", 22, 30)
rectangle1.calcRect()


class BankAccount{
    constructor(acctno){
        this.balance = 0
        this.accountNumber = acctno
    }

    deposit(amount){
        if (amount <= 0) {
            return("Invalid amount")
        }
        return this.balance += amount
    }

    widthdraw(amount){
        if (amount > this.balance) {
            return("insufficient funds")
        }
        return this.balance -= amount
   }
    getBalance(){
        return this.balance
    }
}

const user1 = new BankAccount("8118188491")
user1.deposit(2000)
user1.widthdraw(10000)
console.log(user1.getBalance());
console.log(user1.widthdraw(10000));


class Book{
    constructor(title, author, yearPublished, genre, age){
        this.title = title
        this.author = author
        this.yearPublished = yearPublished
        this.genre = genre
        this.age = age
    }
    displayBook(){
        console.log(`${this.title} ${this.author} ${this.yearPublished} ${this.genre} ${this.age}`);
        
    }
    calculaAge(){
        const currentYear = 2024
        return currentYear - this.yearPublished
    }
}

class FictionBook extends Book{
    constructor(title, author, yearPublished, age, genre){
        super(title, author, yearPublished, genre, age)
        this.genre = genre
    }
    displayFictionBookInfo(){
        console.log(`Title: ${this.title}, Author: ${this.author}, Year Published: ${this.yearPublished}, Genre: ${this.genre}, Age: ${this.calculaAge()} years,`);
        
    }
}

class NonFictionBook extends Book{
    constructor(title, author, yearPublished, topic, genre, age){
        super(title, author, yearPublished, genre, age)
        this.topic = topic
    }
    displayFictionBookInfo(){
        console.log(`Title: ${this.title}, Author: ${this.author}, Year Published: ${this.yearPublished}, Topic: ${this.topic}, Age: ${this.calculaAge()} years,`);
        
    }
}
const fictionBook1 = new FictionBook("The great king", "F looking good", 1785, 239, "classic")
fictionBook1.displayFictionBookInfo()

const nonFictionBook = new NonFictionBook("Simple the coder", "williams", 1997, "Simple always a joker")
nonFictionBook.displayFictionBookInfo()

const str = "Hello World"
console.log(str.startsWith("H"));


// function CreateCounter(){
//     let count = 0
//     return{
//         increment(){
//             count++
//             console.log(count);
            
//         },
//         getCount(){
//             return count
//         }
//     }
// }
// const counter = CreateCounter()
// counter.increment()
// counter.increment()
// counter.increment()
// console.log(counter.getCount());


//asynchronous (async) programming lets your code run without blocking the execution of other operations—especially useful for tasks like fetching data from APIs, reading files, or waiting for user actions.

//three ways to handle asynchronous JavaScript

//A callback is a function passed into another function, to be called when the task finishes.
// function fetchData(callback){
//     setTimeout(() => {
//         callback("Data fetched!")
//     }, 3000)
// }
// function provides(data){
//     console.log(data);
// }
// fetchData(provides)


//A Promise is a special JavaScript object that represents a value that will be available in the future — either:
//✅ Resolved (success) ❌ Rejected (error)

// function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data fetched")
//         }, 3000)
//     })
// }

// fetchData()
//     .then((data) => {
//         console.log(data);
        
//     })

    
//async and await are keywords that make it easier to work with Promises in JavaScript.

// async function provides() {
//   try {
//       const res = await fetchData();
//       console.log(res);
//   } catch (error) {
//     console.log(error);
    
//   }
// }

// provides()

function fetchData(callback){
    setTimeout(() => {
        callback(["Alice", "Bob", "Charlie"])
    }, 2000)
}
// function provides(user){
//     console.log(user);
// }
// fetchData(provides)

function fetchData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(["Alice", "Bob", "Charlie"])
        }, 3000)
    })
}
// fetchData()
// .then((user) =>{
//     console.log(user);
// })

async function provideUser() {
    try {
        const res = await fetchData()
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
provideUser()


const students = [
    {id: 1, name: "Victor"},
    {id: 2, name: "Sandra"},
    {id: 3, name: "Giddy"},
    {id: 4, name: "Williams"},
]

// const addStudent = (student, callback) => {
//     setTimeout(() => {
//         students.push(student)
//         callback(students)
//     }, 2000)
// }

const addStudent = (student) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            students.push(student)
            const success = true
            if (success) {
               resolve(student) 
            }else{
                reject("something went wrong")
            }
        }, 2000)
    })
}

//1. *Delete Student*: Create a function that deletes a student from the `students` array based on their `id`.
// const deleteStudent = (id) => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             const index = students.findIndex((student) => student.id === id)
//             if (index !== -1) {
//                 const deleteStudent = students.splice(index, 1)[1]
//                 resolve(deleteStudent)
//             }else{
//                 reject("student not found")
//             }
//         },2000)
//     })
// }

// deleteStudent(2)
//       .then((deleteStudent) =>{
//         console.log(`Delete student ${deleteStudent.name}`);
//       })
//       .catch(() => {
//         console.log(error);
        
//       })


const getALLStudent = () => {
    setTimeout(() => {
        let li = ""
        students.forEach((stud) => {
            li += `<li>${stud.name}</li>`
        })
        document.querySelector("ul").innerHTML = li
    }, 1000)
}
// addStudent({id: 4, name: "Simple"}, getALLStudent)
// addStudent({id: 4, name: "Simple"})
//     .then(getALLStudent)
//     .catch(() => {
//         console.log(error);
        
//     })


const proccessData = async() => {
    try {
         await addStudent({id: 4, name: "Simple"})
         getALLStudent()
    } catch (error) {
        console.log(error)
    }
}
// proccessData()


// 2. *Update Student*: Create a function that updates a student's details in the `students` array based on their `id`.

const updateStudent = async (id, updates) => {
    try {
        const index = students.findIndex((student) => student.id === id)
        if (index !== -1){students[index] = {...students[index], ...updates}
            console.log(`student with id ${id} updated successfully`);
        }else{
            throw new Error(`student with id ${id} not found`)
        }
    } catch (error) {
        console.log(error.message);
        
    }
}
// updateStudent(3, {name: "Simple Chinonso"})
// 3. *Search Students*: Create a function that searches for students in the `students` array based on their `name` or `id`.
const searchStudent = async (id, name) => {
    try {
        const  student = students.find((student) => student.id === id || (name && student.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())))
        if (student) {
            return student
        }else{
            throw new Error(`student not found`)
        }
    } catch (error) {
        console.log(error.message);
    }
}
// searchStudent(4, "")
//       .then((student) => console.log(student));
      
// 4. *Sort Students*: Create a function that sorts the `students` array based on their `name` or `id`.
const sortStudent = async (sortBy) => {
    try {
         let sortedStudents;
    if (sortBy === "name"){
        sortedStudents = students.sort((a, b) => a.name.localeCompare(b.name))
    }else if (sortBy === "id") {
       sortedStudents = students.sort((a, b) => a.id - b.id) 
    }else{
        throw new Error(`Invalid paramter.Please user id or name`)
    }
    return sortedStudents
  }catch(error){
    console.log(error.message);
    
  }
}
// sortStudent( "name")
//        .then((sortedStudents) => console.log(sortedStudents));
       
// sortStudent("id")
//       .then((sortedStudents) => console.log(sortedStudents))
     

// These assignments should help you practice working with arrays, promises, and async/await syntax.







let users = [];

function addUser() {
  const input = document.getElementById("username");
  const name = input.value.trim();
  if (name === "") return alert("Enter a name");

  const user = { id: Date.now(), name };
  users.push(user); // ✅ CREATE

  input.value = "";
  displayUsers();   // 🔄 REFRESH LIST
}

function displayUsers() {
  const list = document.getElementById("userList");
  list.innerHTML = "";

  users.forEach(user => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${user.name}
      <button onclick="editUser(${user.id})">Edit</button>
      <button onclick="deleteUser(${user.id})">Delete</button>
    `;
    list.appendChild(li);
  });
}

function editUser(id) {
  const newName = prompt("Enter new name:");
  if (!newName) return;

  const user = users.find(u => u.id === id);
  if (user) {
    user.name = newName; // ✅ UPDATE
    displayUsers();
  }
}

function deleteUser(id) {
  users = users.filter(u => u.id !== id); // ✅ DELETE
  displayUsers();
}



