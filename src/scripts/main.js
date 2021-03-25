import { getUsers, getPosts } from "./data/dataManager.js"
import { PostList } from "./feed/postList.js"
import { NavBar } from "./nav/navBar.js"
import { footer } from "./nav/footer.js"
import { PostEntry } from "./feed/PostEntry.js"
import { createPost } from "./data/dataManager.js"


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

  applicationElement.addEventListener("click", (event) => {
	
	if (event.target.id.startsWith("edit")){
		console.log("post clicked", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	}
})

applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
      console.log(`User wants to see posts since ${yearAsNumber}`)
      //invoke a filter function passing the year as an argument
      showFilteredPosts(yearAsNumber);
    }
  })
  
  const showFilteredPosts = (year) => {
    //get a copy of the post collection
    const epoch = Date.parse(`01/01/${year}`);
    //filter the data
    const filteredData = usePostCollection().filter(singlePost => {
      if (singlePost.timestamp >= epoch) {
        return singlePost
      }
    })
    const postElement = document.querySelector(".postList");
    postElement.innerHTML = PostList(filteredData);
  }

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

applicationElement.addEventListener("click", event => {
  if (event.target.id === "newPost__cancel") {
      //clear the input fields
  }
})

applicationElement.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id === "newPost__submit") {
  //collect the input values into an object to post to the DB
    const title = document.querySelector("input[name='postTitle']").value
    const url = document.querySelector("input[name='postURL']").value
    const description = document.querySelector("textarea[name='postDescription']").value
    //we have not created a user yet - for now, we will hard code `1`.
    //we can add the current time as well
    const postObject = {
        title: title,
        imageURL: url,
        description: description,
        userId: 1,
        timestamp: Date.now()
    }

  // be sure to import from the DataManager
      createPost(postObject)
  }
})

const showPostEntry = () => { 
  //Get a reference to the location on the DOM where the nav will display
  const entryElement = document.querySelector(".entryForm");
  entryElement.innerHTML = PostEntry();
}

const startGiffyGram = () => {
	  showNavBar();
    showPostList();
    showFooter();
    showPostEntry();
}
// Are you defining the function here or invoking it?
startGiffyGram();
