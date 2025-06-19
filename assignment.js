
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