console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        data.message.forEach( img => postImg(img))
    })

function postImg(info) {
    let img = document.createElement('img')
        img.src = info
    let div = document.querySelector('#dog-image-container')
    div.append(img)
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        breeds = Object.keys(data.message)
        breeds.forEach(breeds => postBreed(breeds))
     })

let ul = document.querySelector('#dog-breeds')

function postBreed(dogInfo) {
    let li = document.createElement('li')
        li.textContent = dogInfo
    ul.append(li)
}

ul.addEventListener('click', function(event) {
    console.log(event.target)
    if (event.target.tagName === 'LI') {
        event.target.style.color = 'green'
    }
})

let dropdown = document.querySelector('select#breed-dropdown')

dropdown.addEventListener('change', function(event) {
    console.log(event.target.value)
    showBreed(event.target.value)
})

function showBreed(letter) {
    let lis = document.querySelectorAll('li')
    lis.forEach(element => element.remove())

    let selectBreed = breeds.filter(breed => breed.startsWith(letter))

    selectBreed.forEach(dog => postBreed(dog))
    // console.log(breeds)
    // postBreed(selectBreed)
}