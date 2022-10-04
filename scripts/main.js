// render everything
import { fetchCat, fetchDog } from "./database.js"

const render = async () => {
    await fetchCat()
    await fetchDog()
}

render()

document.addEventListener("stateChanged", (event) => {
    render()
})