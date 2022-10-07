import { getFeed } from "./database.js";

// diplays previous contestants

export const displayFeed = () => {
    const feed = getFeed()
    for (let i = 0; i < feed.length; i++) {
        html += `
    <div class = "dogFeed">
        <div class = 'dogPicBox'><img src = ${feed.dogUrl} alt = "Dog picture" class = "dogPic"></div>
    </div>
    <div class = "catFeed">
        <div class = 'catPicBox'><img src = ${feed.catUrl} alt = "cat picture" class = "catPic"></div>
    </div>
        `
    }
    return html
}