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

const headerElement = document.querySelector("#header")
headerElement.style.backgroundColor = "red"
headerElement.style.color = "white"
headerElement.style.textAlign = "center"
headerElement.style.fontSize = "25px"

const listElement = document.querySelectorAll("li")
    listElement.forEach((item) => {
        item.style.fontSize = "30px"
        item.style.textAlign = "center"
        item.style.color = "purple"
    })


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



const text = document.querySelector(".MyText")
const button = document.querySelector(".MyButton")
 
button.addEventListener("click", () => {
    text.innerHTML = (" I clicked the button")
})


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