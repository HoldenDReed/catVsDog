import { getFeed } from "./database.js";

// diplays previous contestants

export const displayFeed = () => {
    const feed = getFeed()
    let html = ""
    feed.forEach(entry => {
    html += `
    <div class = "dogFeed">
        <div class ='dogPicBox'><img src = ${entry.dogUrl} alt ="Dog picture" class ="dogFeedPic"></div>
    </div>
    <div class = "catFeed">
        <div class ='catPicBox'><img src = ${entry.catUrl} alt ="cat picture" class ="catFeedPic"></div>
    </div>
        `
    })
    return html
}