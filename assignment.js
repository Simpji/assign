
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