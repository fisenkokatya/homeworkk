const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-z0-9]+(\.?[a-z0-9]+)*@gmail\.com$/i

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'Error'
        gmailResult.style.color = 'red'
    }
}

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let x = 0

const move = () => {
    const maxX = parentBlock.clientWidth - childBlock.offsetWidth

    x += 2
    childBlock.style.left = x + 'px'

    if (x < maxX) {
        requestAnimationFrame(move)
    }
}

requestAnimationFrame(move)

//characters

const charactersList = document.querySelector('.characters-list')
const xhr = new XMLHttpRequest()
xhr.open('GET', '../data/characters.json')
xhr.setRequestHeader('Content-type', 'application/json')
xhr.send()

xhr.onload = () => {
    const data = JSON.parse(xhr.response)

    const photos = document.querySelectorAll('.photo')
    const names = document.querySelectorAll('.name')
    const ages = document.querySelectorAll('.age')

    data.forEach(function(character, i) {
        photos[i].src = character.photo
        photos[i].alt = character.name
        names[i].innerText = character.name
        ages[i].innerText = character.age
    })
}