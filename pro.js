// 1. *To-Do List App*: Create a simple to-do list app that allows users to add, remove, and edit tasks. You can use local storage to save the tasks.
let todos = []
//This holds all your todo items. It's later synced with localStorage.
const add = () =>{
    const input = document.querySelector(".add")
    const messageElement = document.querySelector(".message")
    const name = input.value.trim()
    if(name === ""){
        messageElement.textContent = ("Enter todo")
        return
    }
    const todo = {id: Date.now(), name}
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))

    input.value = ""
    displayTodo()
}
// What It Does:
// Gets user input

// Validates it (shows "Enter todo" if empty)

// Creates a todo object {id, name}

// Pushes it to the todos array

// Saves to localStorage

// Clears the input box

// Calls displayTodo() to update the UI



const displayTodo = () => {
    const tod = document.querySelector(".todo3")
    tod.innerHTML = ""

    todos.forEach(todo => {
        const li = document.createElement('li')
        li.innerHTML = `
        ${todo.name}
        <button onclick="editTodo(${todo.id})">Edit</button>
        <button onclick="deleteTodo(${todo.id})">Delete</button>
        `;
        tod.appendChild(li)
    })

 }

 if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"))
     displayTodo() 
}

//     What It Does:
// Selects the element with class todo3

// Clears the list

// Loops over the todos array

// For each item, creates a <li> with:

// Todo text

// Edit and Delete buttons

// Adds each to the page



    const editTodo = (id) => {
        const newName = prompt("Enter name")
        if(!newName)
            return

        const todo = todos.find(t => t.id === id)
        if (todo) {
            todo.name = newName
            localStorage.setItem("todos", JSON.stringify(todos))
            displayTodo()
        }
    }

//     What It Does:
// Prompts user for a new name

// Finds the matching todo by id

// Updates its name

// Saves updated list to localStorage

// Renders updated list


//     What It Does:
// Filters out the todo with the matching id

// Updates the todos array

// Saves to localStorage

// Re-renders the list

    const deleteTodo = (id) => {
        todos = todos.filter(t => t.id !== id)
        localStorage.setItem("todos", JSON.stringify(todos))
        displayTodo()
    }



// 2. *Weather App*: Build a weather app that fetches data from a weather API and displays the current weather and forecast for a given location.
const apikey = "d151ca4a33f2f4c42a15c55bdefe8c93"
const search = async () => {
    const input = document.querySelector(".weather-input")
    const weather = input.value.trim()
    const messagElement = document.querySelector('.messag')
    const location = document.querySelector(".location")
    const list = document.querySelector(".weather-list")

    if (weather === "") {
        messagElement.textContent = ("Please enter a weather city")
        location.textContent = ""
        list.innerHTML = ""
        return
    }

     const url = `https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${apikey}&units=metric`;

        try {
            const res = await fetch(url)
            if (!res.ok) {
                throw new Error("City not found");
            }
             const data = await res.json()

             location.textContent = `${data.name}, ${data.sys.country}`;
             messagElement.textContent = "";
             list.innerHTML = `
             <li>Temperature: ${data.main.temp} °C</li>
             <li>Weather: ${data.weather[0].description}</li>
             <li>Humidity: ${data.main.humidity} %</li>
             <li>Wind speed: ${data.wind.speed} m/s</li>
             `
        } catch (error) {
            messagElement.textContent = error.message;
            location.textContent = "";
            list.innerHTML = "";
        }
}

let transactions = []
let totalIncome = 0;
let totalExpense = 0

const addTransaction = (e) => {
    e.preventDefault()
    const amount = parseFloat(document.querySelector(".amount").value)
    const description = document.querySelector(".description").value
    const type = document.querySelector("#type").value


    if (type === "income") {
        totalIncome += amount
    }else{
        if (totalIncome < totalExpense + amount) {
        alert("Insufficient balance. Transaction cannot be completed");
        return;
    }
        totalExpense += amount
    }

    const transaction = {id: Date.now(),
        type,
        amount,
        description
    }

    transactions.push(transaction)
    updateSummary()
    displayTransactions()
    clearForm()
};

document.querySelector(".transaction-form").addEventListener("submit", addTransaction)

function updateSummary(){
    document.querySelector(".total-income").textContent = `$${totalIncome.toFixed(2)}`
    document.querySelector(".total-expense").textContent = `$${totalExpense.toFixed(2)}`
    document.querySelector(".balance").textContent = `$${(totalIncome - totalExpense).toFixed(2)}`
}
const displayTransactions = () => {
    const transactionList = document.querySelector(".transaction-list")
    transactionList.innerHTML = "";

    transactions.forEach((transaction, index) =>{
        const transactionElement = document.createElement("li")
        transactionElement.classList.add("transaction")
        transactionElement.innerHTML = `${transaction.description}: ${transaction.amount.toFixed(2)}
        <button  onclick="deleteTransaction(${transaction.id})">Delete</button>
        `
        transactionList.appendChild(transactionElement)
    }) 
}

const clearForm = () => {
    document.querySelector(".amount").value = ""
    document.querySelector(".description").value = ""
}
const deleteTransaction = (id)=>{
    // transaction is just a variable that holds one item from list of transactions — the one that matches the given id.
    const transaction = transactions.find(tran => tran.id ===id)
    if (transaction) {
        if (transaction.type === "income") {
            totalIncome -= transaction.amount
        }else{
            totalExpense -= transaction.amount
        }
    }
    transactions = transactions.filter(tran => tran.id !== id)
    updateSummary()
    displayTransactions()
}






