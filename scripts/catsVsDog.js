import { getRandomCat, getRandomDog  } from "./database.js";
// add random cat and dog imagies

export const randomCat = () => {
    const randomCat = getRandomCat()
    let catHTML = `<div class="catImage">
    <p>${randomCat[0].id}</p>
    <img src =${randomCat[0].url} alt="randomCat" id="randomCatImage" class="vsImageStyle">
    </div>` 

    return catHTML
    }
    
export const randomDog = () => {
    const randomDog = getRandomDog()
    let dogHTML = `<div class="dogImage">
    <p>${randomDog[0].id}</p>
    <img src =${randomDog[0].url} alt="randomDog" id="randomDogImage" class="vsImageStyle">
    </div>`
    
    return dogHTML
    }
// add button to score with and refresh images


// add current images to database

// }

