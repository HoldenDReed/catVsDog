import { getRandomCat, getRandomDog, addNewFeed } from "./database.js";
// add random cat and dog imagies

export const randomCat = () => {
    const randomCat = getRandomCat()
    let catHTML = `<div class="catImage">
    <h3>⬇ Click Down Here to Vote for Cat! ⬇</h3>
    <img src =${randomCat[0].url} alt="randomCat" id="randomCatImage" class="vsImageStyle">
    </div>`

    return catHTML
}

export const randomDog = () => {
    const randomDog = getRandomDog()
    let dogHTML = `<div class="dogImage">
    <h3>⬇ Click Down Here to Vote for Dog! ⬇</h3>
    <img src =${randomDog[0].url} alt="randomDog" id="randomDogImage" class="vsImageStyle">
    </div>`

    return dogHTML
}
// add button to score with and refresh images


// add current images to database

document.addEventListener("click", (e) => {
    const catImage = getRandomCat()
    const dogImage = getRandomDog()
    let newFeed = {}
    if (e.target.id === "randomCatImage") {
        newFeed = {
            catUrl: catImage[0].url,
            catId: catImage[0].id,
            dogUrl: dogImage[0].url,
            dogId: dogImage[0].id,
            catWin: true
        }
        addNewFeed(newFeed) }
    })

    document.addEventListener("click", (e) => {
    const catImage = getRandomCat()
    const dogImage = getRandomDog()
    let newFeed = {}
    if (e.target.id === "randomDogImage") {
        newFeed = {
            catUrl: catImage[0].url,
            catId: catImage[0].id,
            dogUrl: dogImage[0].url,
            dogId: dogImage[0].id,
            catWin: false
        } 
        addNewFeed(newFeed) }
    })