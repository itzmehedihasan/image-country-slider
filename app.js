let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let slide = document.querySelector(".slide")

next.addEventListener("click", function(){
let items = document.querySelectorAll(".item")

 slide.appendChild(items[0])
})

prev.addEventListener("click", function(){
let items = document.querySelectorAll(".item")

 slide.prepend(items[items.length - 1])

})

