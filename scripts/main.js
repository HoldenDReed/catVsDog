// render everything
import { fetchCat, fetchDog, fetchFeed, } from "./database.js"
import { displayFeed } from "./feed.js"
import { randomCat, randomDog } from "./catsVsDog.js"
import { catScores, dogScores } from "./scoreboard.js"

const feedContainer = document.getElementById('feed')
const dogVsContainer = document.getElementById("dogCard") 
const catVsContainer = document.getElementById("catCard") 
const dogScoreContainer = document.getElementById('catScore')
const catScoreContainer = document.getElementById('dogScore')

const render = async () => {
    await fetchCat()
    await fetchDog()
    await fetchFeed()
    dogScoreContainer.innerHTML = catScores()
    catScoreContainer.innerHTML = dogScores()
    feedContainer.innerHTML = displayFeed()
    dogVsContainer.innerHTML = randomDog()
    catVsContainer.innerHTML = randomCat()
}

render()

document.addEventListener("stateChanged", (event) => {
    render()
})
