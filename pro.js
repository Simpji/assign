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

// Now that you've learned JavaScript, it's time to put your skills to the test with a project. Here are some project ideas that you might find interesting:

// 1. *To-Do List App*: Create a simple to-do list app that allows users to add, remove, and edit tasks. You can use local storage to save the tasks.
// 2. *Weather App*: Build a weather app that fetches data from a weather API and displays the current weather and forecast for a given location.
// 3. *Quiz Game*: Create a quiz game that asks users a series of questions and keeps track of their scores. You can use JavaScript to generate random questions and track user answers.
// 4. *Personal Finance Tracker*: Build a personal finance tracker that allows users to track their income and expenses. You can use JavaScript to calculate totals and display charts and graphs.
// 5. *Simple Chatbot*: Create a simple chatbot that responds to user input. You can use JavaScript to parse user input and generate responses.
// 6. *Image Gallery*: Build an image gallery that displays a collection of images. You can use JavaScript to add effects like lightbox and slideshow.
// 7. *Timer App*: Create a timer app that allows users to set a timer for a specific amount of time. You can use JavaScript to count down the time and display alerts.
// 8. *Random Quote Generator*: Build a random quote generator that displays a new quote each time the user clicks a button. You can use JavaScript to fetch quotes from an API or generate them randomly.
// 9. *Simple Calculator*: Create a simple calculator that performs basic arithmetic operations like addition, subtraction, multiplication, and division. You can use JavaScript to handle user input and calculate results.
// 10. *Rock, Paper, Scissors Game*: Build a Rock, Paper, Scissors game that allows users to play against the computer. You can use JavaScript to generate random choices and determine the winner.

// Which project idea interests you the most? Do you have any specific requirements or features in mind for your project?

// Let's get started! 😊





