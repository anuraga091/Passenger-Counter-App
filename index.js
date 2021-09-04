//Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")

//Create two variable(name and greeting) that contains your name
// and the greeting we want to render on the page
let myName = "Anurag"
let greeting = "Welcome back "

//Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + myName

//Add an emoji to the end
welcomeEl.innerText += "👋"

//Initialize the count as 0
//listen for click on the increment button
//increment the count button when variable is clicked
//change the count-el in HTML to reflect the count
let countEl = document.getElementById("count-el") //pass in argument
let count = 0;
function increment(){
    count += 1;
    countEl.textContent = count;
}

//Create a function, save(), which logs out when it's called
//Grab the save-el paragraph and store it in a variable called saveEl
//Create a variable that contains both the count and dash separator i.e "1-6-9"
//Render the variable in the saveEl using innerText 
// N.B: Make sure not to delete existing content of the paragraph
let saveEl = document.getElementById("save-el")
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr;
    console.log(count)
    countEl.textContent = 0;
    count = 0;
}
let errorMessage = document.getElementById("error")
function purchase(){
    errorMessage.textContent = "Something went wrong, please try again";
}



// create a variable,message that stores the string : "You have three new notifications"
//let message = "You have three new notifications";
 
