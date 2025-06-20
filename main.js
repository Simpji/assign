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