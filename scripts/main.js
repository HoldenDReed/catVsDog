// render everything
import { fetchCat, fetchDog, fetchHistory } from "./database.js"

const render = async () => {
    await fetchCat()
    await fetchDog()
    await fetchHistory()
}

render()

document.addEventListener("stateChanged", (event) => {
    render()
})