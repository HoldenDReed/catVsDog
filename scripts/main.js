// render everything
import { fetchCat, fetchDog, fetchFeed } from "./database.js"

const render = async () => {
    await fetchCat()
    await fetchDog()
    await fetchFeed()
}

render()

document.addEventListener("stateChanged", (event) => {
    render()
})
