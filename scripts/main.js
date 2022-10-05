// render everything
import { fetchCat, fetchDog, fetchHistory, fetchScore } from "./database.js"

const render = async () => {
    await fetchCat()
    await fetchDog()
    await fetchHistory()
    await fetchScore()
}

render()

document.addEventListener("stateChanged", (event) => {
    render()
})
