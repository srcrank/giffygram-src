import { getUsers } from "./data/dataManager.js"
/**
 * Main logic module for what should happen on initial page load for Giffygram
 */

//Get a reference to the location on the DOM where the app will display
let postElement = document.querySelector(".postList");
let navElement = document.querySelector("nav");
let entryElement = document.querySelector(".entryForm")

/*
    This function performs one, specific task.

    1. Can you explain what that task is?
    2. Are you defining the function here or invoking it?
*/
const startGiffyGram = () => {
	postElement.innerHTML = "Hello Cohort 47"
}
// Are you defining the function here or invoking it?
startGiffyGram();

getUsers()
.then(data => {
    console.log("User Data", data)
})