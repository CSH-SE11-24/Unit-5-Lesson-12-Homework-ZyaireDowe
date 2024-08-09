console.log("Script running")
// Task 1: Light & Dark Mode
// Select the light and dark buttons (you can do this separately or with querySelectorAll)

let jk=document.querySelectorAll(".btn")
console.log(jk)

// Extra credit: Select the navbar
let body=document.querySelector("#body")

// Add the event listener to the light button such that when it's clicked, the body's background color is white and text color is black
// Extra credit: Add the bg-light class and remove the bg-dark class to the navbar
jk[0].addEventListener("click", function(event){
  body.style.backgroundColor="white"
})
jk[1].addEventListener("click", function(event){
  body.style.backgroundColor="black"
})

// Add the event listener to the dark button such that when it's clicked, the body's background color is black and text color is white
//  Extra credit: Add the bg-dark class and remove the bg-light class to the navbar



// Task 2: Video thumbnails
// Use getElementsByClassName to select all the images in the cards
let imgs=document.querySelectorAll(".rounded")
// Console log the length of the array to confirm you have all 4 images
console.log(imgs.length)

// Add event listeners to each one such that on mouse over, the image becomes the corresponding gif and on mouse out, the gif goes back to the image
// e.g. mouseover: ears.jpg -> ears.gif
// e.g. mouseout: ears.gif -> ears.jpg
// Extra credit: do this with a for loop and one event listener (you will need string manipulation)

imgs[0].addEventListener("mouseover", function(event){
  imgs[0].src="images/ears.gif"
})

imgs[0].addEventListener("mouseout", function(event){
  imgs[0].src="images/ears.jpg"
})

imgs[1].addEventListener("mouseover", function(event){
  imgs[1].src="images/halp.gif"
})

imgs[1].addEventListener("mouseout", function(event){
  imgs[1].src="images/halp.jpg"
})


imgs[2].addEventListener("mouseover", function(event){
  imgs[2].src="images/husky.gif"
})

imgs[2].addEventListener("mouseout", function(event){
  imgs[2].src="images/husky.jpg"
})

imgs[3].addEventListener("mouseover", function(event){
  imgs[3].src="images/dance.gif"
})

imgs[3].addEventListener("mouseout", function(event){
  imgs[3].src="images/dance.jpg"
})





