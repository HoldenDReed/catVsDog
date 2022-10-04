// fetch apis
const applicationState = {
    dogImage: [],
    catImage: []
}

export const fetchCat = async () => {
    const catImage = await fetch(`https://api.thecatapi.com/v1/images/search`)
    const catImageResponse = await catImage.json()
    applicationState.catImage = catImageResponse
}

export const fetchDog = async () => {
    const dogImage = await fetch(`https://api.thedogapi.com/v1/images/search`)
    const dogImageResponse = await catImage.json()
    applicationState.dogImage = dogImageResponse
}