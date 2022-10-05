// render everything
import { fetchCat, fetchDog, fetchFeed, fetchScore } from "./database.js"

const render = async () => {
    await fetchCat()
    await fetchDog()
    await fetchFeed()
    await fetchScore()
}

render()

document.addEventListener("stateChanged", (event) => {
    render()
})
