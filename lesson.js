// слайдер


let slide = document.querySelectorAll(".slide")
let currentSlide = 0

function showSlide(n) {
    slide.forEach(function(element) {
        element.classList.remove("active_slide")
    })
    slide[n].classList.add("active_slide")
}

function nextSlide() {
    currentSlide = currentSlide + 1 
    if (currentSlide >= slide.length) {
        currentSlide = 0
    }
    showSlide(currentSlide)
}

setInterval (function() {
    nextSlide()
}, 3000)

const prev = document.querySelector("#prev")
const next = document.querySelector("#next")

function prevSlide() {
    currentSlide = currentSlide - 1
    if (currentSlide < 0) {
        currentSlide = slide.length - 1
    }
    showSlide(currentSlide)
}

next.addEventListener("click", function() {
    nextSlide()
})

prev.addEventListener("click", function() {
    prevSlide()
})