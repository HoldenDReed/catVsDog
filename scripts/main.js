// render everything
import { fetchCat, fetchDog, fetchFeed, } from "./database.js"
import { displayFeed } from "./feed.js"
import { randomCat, randomDog } from "./catsVsDog.js"

const feedContainer = document.getElementById('feed')
const dogVsContainer = document.getElementById("dogCard") 
const catVsContainer = document.getElementById("catCard") 

const render = async () => {
    await fetchCat()
    await fetchDog()
    await fetchFeed()
    feedContainer.innerHTML = displayFeed()
    dogVsContainer.innerHTML = randomDog()
    catVsContainer.innerHTML = randomCat()
}

render()

document.addEventListener("stateChanged", (event) => {
    render()
})
