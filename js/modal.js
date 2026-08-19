
// modalwindow

const modal = document.querySelector(".modal")
const modalclose = document.querySelector(".modal_close")

let modalShown = false

document.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100)
        if (modalShown === false){
            modal.style.display = 'block'
            modalShown = true
        }
})
modalclose.onclick = () => {
    modal.style.display = 'none'
}

setTimeout(function() {
    if (modalShown === false) {
        modal.style.display = 'block'
        modalShown = true
    }
}, 10000)