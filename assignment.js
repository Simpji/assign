
// *Assignment:*

// Create a program that determines whether a person is eligible for a loan based on their age, income, and credit score.

// *Requirements:*

// 1. Create variables for the person's age, income, and credit score.
let person = {
    firstName: "Simple",
    lastName: "ChukwuNonso",
    age: 30,
    income: 2000,
    creditScore: 600
}

console.log(person)


// 2. Use logical operators to determine whether the person is eligible for a loan based on the following conditions:
let age = 25;
let income = 5000;
let  creditScore = 600

let person1 = age >= 25 && income > 50000 && creditScore > 600 ? "You are Eligible for a loan" : "You are not Eligible for a loan"
console.log(person1)

//using function
const person2 = (age, income, creditScore) => {
    return age >= 25 && income && creditScore ? "You are Eligible for a loan" : "You are not Eligible for a loan"
}
console.log(person2(10,5000,600))
// - Age: 25-50 years old
// - Income: Above ₦500,000 per annum
// - Credit score: Above 600


// 3. Use a ternary operator to display a message indicating whether the person is eligible for a loan or not.
let ages = 25

let person3 = ages >=25 ? "You are Eligible for a loan" : "You are not Eligible fo a loan"
console.log(person3)

//using function
function person4 (ages){
    return ages >=25 ? "You are Eligible for a loan" : "You are not Eligible fo a loan"
}
console.log(person4(27))
// 4. Use `console.log()` to display the result.

// *Challenge:*

// Modify the program to include additional conditions, such as:

// - Employment status: Employed or self-employed
let agee = 30;
let incomee = 6000;
let employmentStatus = "self-employed"

let person5 = agee >=25 && incomee > 5000 && employmentStatus === "Employed" || employmentStatus === "self-employed" ? "You are Eligible for a loan" : "You are not Elgible for a loan"
console.log(person5)

//using function
const person6 = (agee, incomee,employmentStatus) => {
    return agee >=25 && incomee > 5000 && employmentStatus === "Employed" || employmentStatus === "self-employed" ? "You are Eligible for a loan" : "You are not Elgible for a loan"
}
console.log(person6(25,6000,"Employed"))
// - Loan amount: Not exceeding 5 times the person's income
let incomen = 100000
let loanamount = 50000
let agese = 25
let employmentStatuss = "employed"

let person7 = agese >= 25 && agese <= 50 && employmentStatuss === "employed" && loanamount <= incomen * 5 ? "You are Eligible to borrow" : "You are not Eligible to borrow"
console.log(person7)

//using function
const person8 = (agea, incomene, employmentStatusse, loanamounts) => {
    return agea >= 25 && agea <= 50 && employmentStatusse === "employed" && loanamounts <= incomene * 5 ? "You are Eligible to borrow" : "You are not Eligible to borrow"
}
console.log(person8(30,100000,"employed", 50000))
// Use logical operators and ternary operators to determine whether the person is eligible for a loan based on these additional conditions.

// *Tips:*
// - Use `&&` and `||` operators to combine conditions.
// - Use ternary operators to display a message based on the result.
// - Use `console.log()` to display the result.

// Good luck with your assignment!





// You've covered a lot of ground in JavaScript, including:

// 1. Conditional statements (`if-else`)
// 2. Functions with conditional statements
// 3. `switch` statements
// 4. Functions with `switch` statements

// Here are some assignment ideas to help you practice:

// *Assignment 1:*

// Write a function `checkGrade` that takes a score as an argument and returns the corresponding grade based on the following criteria:
const checkGrade = (score) => {
    if (score >= 90 && score <= 100) {
        return "A"
    }else if (score >= 80 && score <= 89){
        return "B"
    }else if (score >= 70 && score <= 79) {
        return "C"
    }else if (score >= 60 && score <= 69 ) {
        return "D"
    }else{
        return "F"
    }
}
console.log(checkGrade(89))

//usin switch statement and function together
const grade = (scor) => {
    switch(true){
        case scor >= 90 && scor <= 100:
            return "A"
        case scor >= 80 && scor <= 89:
            return "B"
        case scor >= 70 && scor <= 79:
            return "C"
        case scor >= 60 && scor <= 69:
            return "D"
        default:
            return "F"
    }
}
console.log(grade(90))
// - 90-100: A
// - 80-89: B
// - 70-79: C
// - 60-69: D
// - Below 60: F

// Use `if-else` statements or `switch` statements to implement this function.


// *Assignment 2:*

// Write a function `getDayType` that takes a day of the week (1-7) as an argument and returns whether it's a weekday or weekend.
const getDayType = (day) => {
    switch(true){
        case day >= 1 && day <= 5:
            return "Weekday"
        case day === 6 || day === 7:
            return "Weekend"
        default:
            return "Invalid day"
    }
}
console.log(getDayType(6))

// - Use `switch` statements to implement this function.

// *Assignment 3:*

// Write a function `calculateDiscount` that takes a purchase amount as an argument and returns the discount percentage based on the following criteria:
const calculateDiscount = (amount) => {
    if (amount >= 0 && amount <= 100) {
        return "0% Discount"
    }else if (amount >= 101 && amount <= 500){
        return "5% Discount"
    }else if (amount >= 501 && amount <= 1000) {
        return "10% Discount"
    }else if (amount >= 1000) {
        return "15% Discount"
    }else{
        return "No Discount"
    }
}
console.log(calculateDiscount(1000))

// - 0-100: 0% discount
// - 101-500: 5% discount
// - 501-1000: 10% discount
// - Above 1000: 15% discount

// Use `if-else` statements or `switch` statements to implement this function.

// *Assignment 4:*

// Write a function `greetUser` that takes a user's name and time of day (morning, afternoon, evening) as arguments and returns a personalized greeting.
const greetUser = (name, timeOfDaye) =>{
    switch(timeOfDaye.toLowerCase()){
        case "morning":
            return "Good Morning," + name + "!"
        case "afternoon":
            return "Good Afternoon," + name + "!"
        case "evening":
            return "Good Evening," + name + "!"
        default:
            return "The time is not correct"
    }
}
console.log(greetUser("simple", "afternoon"))
// - Use `switch` statements or `if-else` statements to implement this function.

// These assignments should help you practice your JavaScript skills and reinforce your understanding of conditional statements and functions. Good luck!

let sum = 0
let i = 1

while(i <= 15){
    if(i % 2 !== 0){
        sum += i;
    }
    i++
}
console.log(sum)


let numbers = [4,7,8,9,1]
let smallest = numbers[0]

for(let num of numbers){
    if (num < smallest) {
        smallest = num
    }
}
console.log(smallest)

let num = 5
for(let b = 1; b <= 10; b++){
    console.log(`${num} * ${b} ${num * b}`)
}

for(let c = 1; c <= 100; c++){
    if (c % 4 === 0 && c % 9 === 0) {
        console.log("four nine")
    }else if (c % 4 === 0) {
        console.log("four")
    }else if (c % 9 === 0) {
        console.log("nine")
    }else{
        console.log(c)
    }
    
}

for(let d = 100; d <= 200; d++){
    if(d % 7 !== 0){
        console.log(d)
    }
}

for(let e = 1; e <= 20; e++){
    if (e % 3 === 0 && e % 5 === 0) {
        console.log("FizzBuzz")
    }else if ( e % 3 === 0) {
        console.log("Fuzz")
    }else if (e % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(e)
    }
}


// It looks like you've learned about different types of loops in JavaScript, including:

// 1. For Loop
// 2. While Loop
// 3. Do-While Loop
// 4. For...of Loop
// 5. For...in Loop

// Here's an assignment to practice your skills:

// *Assignment:*y

// Write a JavaScript program that uses each of the above loop types to solve the following problems:

// 1. *For Loop:* Calculate the sum of all numbers from 1 to 100.
let summ = 0
for(let a = 1; a <= 100; a++){
    summ += a
}
console.log(summ)

// 2. *While Loop:* Print the numbers from 10 to 1 in reverse order.
let g = 10

while(g >= 1){
    console.log(g)
    g--;
}



// 3. *Do-While Loop:* Calculate the product of all numbers from 1 to 5.
let product = 1
let u = 1

do{
    product *= u;
    u++
}while(u <= 5)
    console.log(product)


// 4. *For...of Loop:* Iterate over an array of strings and print each string in uppercase.
let fruit = ["Apple", "Manago", "Banana",]
for(let item of fruit){
    console.log(item.toUpperCase())
}
// 5. *For...in Loop:* Iterate over an object with properties `name`, `age`, and `city`, and print each property and its value.
let persons = {
    name: "Simple",
    age: 30,
    city: "Lagos"
}

for(let item in persons){
    console.log(`${item}: ${persons[item]}`)
}


for(let item of Object.values(persons)){
    console.log(item)
}

// *Additional Challenges:*

// 1. Use a `for` loop to print the multiplication table for a given number (e.g., 5).
let nums = 5

for(let h = 1; h <= 5; h++){
    console.log(`${nums} * ${h} = ${nums * h}`)
}

// 2. Use a `while` loop to simulate a countdown timer that starts from 10 and decreases by 1 each second.
let countdown = 10

while(countdown >= 0){
    console.log(countdown)
    countdown--
}
// 3. Use a `do-while` loop to ask the user for input until they enter a valid number.
// let userInput; 

// do{
//     userInput = parseInt(prompt("Please enter a valid number. between 10 and 20"))
//     if (isNaN(userInput) || userInput < 10 || userInput > 20) {
//         alert("That not a valid number. please enter between 10 and 20")
//     }
// }while(isNaN(userInput) || userInput < 10 || userInput > 20)
//     alert(`Great,You enter a valid number! ${userInput}`)



// `parseFloat` is used to convert the input values from strings to numbers. When you enter a number in an input field, it's treated as a string by default. If you try to perform arithmetic operations on strings, you'll get unexpected results.

// For example, if you enter `10` and `5` in the input fields and select the `+` operation, without `parseFloat`, the result would be `"105"` instead of `15`. This is because the `+` operator would concatenate the two strings instead of adding them as numbers.

// `parseFloat` converts the string to a floating-point number, allowing you to perform arithmetic operations correctly.

// However, it's worth noting that `parseFloat` can also parse strings that contain numbers followed by non-numeric characters. For example, `parseFloat("10abc")` would return `10`. If you want to ensure that the input is a valid number, you might want to use a different approach, such as using `Number()` or checking if the input is a valid number using a regular expression.

// In your case, using `parseFloat` is a good approach, but you might want to consider adding additional checks to ensure that the input is a valid number. For example:

// ```
// const num1 = parseFloat(num1Input.value);
// if (isNaN(num1) || num1Input.value.trim() === "") {
//   // handle invalid input
// }
// ```

// This way, you can ensure that the input is not only a valid number but also not empty.


// 4. Use a `for...of` loop to iterate over a string and print each character.
let fruits = ["Apple", "Mango", "Banana"]

for(let item of fruits){
    console.log(`${item}`)
}
// 5. Use a `for...in` loop to iterate over an object and print only the property names.
 let personss = {
    name: "Osifo",
    age: 20,
    gander: "male",
    city: "Abia state"
 }

 for(let item in personss){
    console.log(`${item}`)
 }


 for(let d = 100; d <= 200; d++){
    if(d % 7 !== 0){
        console.log(d)
    }
}

// *Tips:*

// - Make sure to use the correct loop type for each problem.
// - Use console.log() to print the results.
// - Test your code thoroughly to ensure it works as expected.

// I hope this assignment helps you practice your loop skills! Let me know if you have any questions or need further clarification.


const num1Input = document.querySelector('.num1')
const operationSelect = document.querySelector('.operation')
const num2Input = document.querySelector('.num2')
const calculateButton = document.querySelector('.calculate')
const resultElement = document.querySelector('.result')


calculateButton.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value) //parseFloat() is used here to convert the input values (which are strings by default) into numbers, 
    // specifically floating-point numbers (i.e., numbers that can have decimals).
    const operation = operationSelect.value
    const num2 = parseFloat(num2Input.value)
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "please enter valid numbers"
        return
    }else{
        switch(operation){
            case '+':
                result = num1 + num2;
                break
            case '-':
                result = num1 - num2;
                break
            case '*':
                result = num1 * num2
                break
            case '/':
                result = num1 / num2
                break
            default:
                result = "Invalid operation"

        }
    }

    resultElement.textContent = `Result: ${result}`

    // if (operation === "+") {
//     result = num1 + num2;
// }else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// }else if (operation === "/") {
//     result = num1 / num2
// }else{
//     result = "Cannot divide by zero!"
// }
// resultElement.textContent = `Result: ${result}`


})

const nameInput = document.querySelector('.name')
const ageInput = document.querySelector('.age')
const submitButton = document.querySelector('.submit')
const getElements = document.querySelector('.get')


submitButton.addEventListener("click", () => {
    const name = nameInput.value
    const age = parseInt(ageInput.value)

    if (name === "" || age === "" || isNaN(age)) {
        getElements.textContent = "Please fill out the form fields"
    }else{
        const get = age >= 18 ? "You are Eligiable to vote!" : "You are not Eligiable to vote!"
        getElements.textContent = `Hello, ${name}! ${get}`
    }
})

