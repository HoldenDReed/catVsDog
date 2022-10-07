// render everything
import { fetchCat, fetchDog, fetchFeed, } from "./database.js"
import { displayFeed } from "./feed.js"

const feedContainer = document.getElementById('feed')

const render = async () => {
    await fetchCat()
    await fetchDog()
    await fetchFeed()
    feedContainer.innerHTML = displayFeed()
}

render()

document.addEventListener("stateChanged", (event) => {
    render()
})
