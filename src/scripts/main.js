import { getUsers, getPosts } from "./data/dataManager.js"
import { PostList } from "./feed/postList.js"
import { NavBar } from "./nav/navBar.js"
import { footer } from "./nav/footer.js"


let postElement = document.querySelector(".postList");
let navElement = document.querySelector(".nav");
let entryElement = document.querySelector(".entryForm")


const showNavBar = () => {
    const navElement = document.querySelector("nav");
	navElement.innerHTML = NavBar();
}

const showFooter = () => {
    //Get a reference to the location on the DOM where the nav will display
    const footerElement = document.querySelector("footer");
	footerElement.innerHTML = footer();
}

const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", event => {
	if (event.target.id === "logout"){
		console.log("You clicked on logout")
	}
})

applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
  
      console.log(`User wants to see posts since ${yearAsNumber}`)
    }
  })

getUsers()
.then(data => {
    console.log("User Data", data)
})

const showPostList = () => {
    const postElement = document.querySelector(".postList");
    getPosts().then((allPosts) => {
        postElement.innerHTML  = PostList(allPosts);
    })
}

const startGiffyGram = () => {
	showNavBar();
    showPostList();
    showFooter();
}
// Are you defining the function here or invoking it?
startGiffyGram();
