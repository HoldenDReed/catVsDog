import { getRandomCat, getRandomDog  } from "./database.js";
// add random cat and dog imagies

export const randomCat = () => {
const randomCat = getRandomCat()
   let catHTML = `<div class="catImage">
    <p>${randomCat.id}</p>
    <img src =${randomCat.url} alt="randomCat" class="randomCatImage">` 

    return catHTML
    }
    
   export const randomDog = () => {
    const randomDog = getRandomDog()
    let dogHTML =`<div class="dogImage">
    <p>${randomDog.id}</p>
    <img src= ${randomDog.url} alt="randomDog" class= "randomDogImage">`
    
    return dogHTML
    }
    document.getElementById("catCard").innerHTML = catHTML
    document.getElementById("dogCard").innerHTML = dogHTML
// add button to score with and refresh images


// add current images to database

// }

