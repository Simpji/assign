function fetchData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 2000);
}

fetchData((result) => {
  console.log(result); // Logs after 2 seconds: "Data received!"
});

const fetchDataa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise: Data received!");
      // reject("Something went wrong!");
    }, 3000);
  });
};

fetchDataa()
  .then((data) => console.log(data)) // Success
  .catch((error) => console.error(error)); // Error


const fetchDat = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async/Await: Data received!");
    }, 4000);
  });
};

async function getData() {
  try {
    const result = await fetchDat();
    console.log(result); // "Async/Await: Data received!"
  } catch (error) {
    console.error(error);
  }
}

// getData();

async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data); // Array of users
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// loadUsers();

// let z = 5
// console.log(z !== "5");





const person = {
    name: "Victor",
    age: 23,
    isStudent: true
}

// const person2 = {
//     "name": "Victor",
//     "age": "23",
//     "isStudent": true
// }

// ["apple", "banana", "orange"]
// //JSON(Javaascript object notation) is a lightweight data interchange format that is easy for human to read and write and easy for machines parse and generate
// const jsonItem = JSON.stringify(person)
// console.log(jsonItem);

// const person2 = `{"name": "Zainab", "age": 25, "isStudent": true}`
// const newObj = JSON.parse(person2)
// console.log(newObj);

function getText(){
    fetch("data.txt")
        .then((res)=>{
            return res.text()
        })
        .then((data)=>{
            document.querySelector("#demo").innerHTML = data
        })
    
}

getText()

// const getJson = () =>{
//     fetch("sample.json")
//     .then((res)=>{
//         return res.json()
//     })
//     .then((info)=>{
//         let li = ""
//         for(const item of info){
//             li += `<li> Name: ${item.name}occupation: ${item.occupation}</li>`
//         }
//         document.querySelector("ul").innerHTML = li
//     })
// }

const getJson = async() =>{
  try {
    const res = await fetch("sample.json")
    if (!res.ok) {
        throw new Error("can't fetch data")
    }
    const simple = await res.json()
    let li = ""
    for(const come of simple)
      li += `<li>Name: ${come.name} Occupation: ${come.occupation}</li>`
    document.querySelector("ul").innerHTML = li
  } catch (error) {
    console.log(error);
    document.querySelector("ul").innerHTML = `<li>Error Landing Data</li>`
    
  }
}

async function getApi(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        if(!res){
            return("Something went wrong")
        }
        const data = await res.json()
        let li = ""
        for(const item of data)
        li += `<li>ID: ${item.id} - Title: ${item.title}</li>`
        document.querySelector("ul").innerHTML = li
    } catch (error) {
        console.log(error);
    }
}

// async function getJson(){
//     try {
//         const res = await fetch("sample.json")
//         if(!res){
//             return("Something went wrong")
//         }
//         const info = await res.json()
//         let li = ""
//         for(const item of info){
//             li += `<li> Name: ${item.name}occupation: ${item.occupation}</li>`
//         }
//         document.querySelector("ul").innerHTML = li
//     } catch (error) {
//         console.log(error);
//     }
// }

