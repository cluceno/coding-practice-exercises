/*

Create 5 star buttons (just use the text "★" for each) inside the #stars div.
Clicking a star sets the rating to that star's position (1 through 5) and updates #ratingLabel to show "Rating: N / 5".
Track the current rating in a variable.

Select stars and ratingLabel as variables 
create stars function and run it on page load 
    create a for loop that runs 5 times to create 5 stars
        attach an event handler to each star
            clicking the star sets the rating to that star's position by changing the text content of ratingLabel

*/

const stars = document.querySelector("#stars");
const ratingLabel = document.querySelector("#ratingLabel");

let currentRating; 

function createStars() {
    for (let i = 0; i < 5; i++) {
        const star = document.createElement("button");
        star.textContent = "★";
        star.addEventListener("click", () => {
            currentRating = i + 1; 
            console.log(currentRating);
            ratingLabel.textContent = `Rating: ${i + 1} / 5`;
        })
        stars.appendChild(star);
    }
}

createStars();

/* 

Key learning points: 

1. I don't think I've got enough reps with DOM manipulation. I keep forgetting how to add stuff
To review, here are some common ones that have come up repeatedly. 
    - element.textContent
    - document.createElement("ElementType")
    - element.addEventListener()
    - parent.appendChild()

2. If you create an element in a for loop, you have to set it to a variable to manipulate it. 

3. Remember arrow notation. I haven't used it that often but just pointing it out. 

4. In a for loop, don't forget to set the variable on the iteration number. 

Overall impression: This was easy when I see the solution. But to create it from scratch is difficult. I also had trouble with 
thinking of the details of the pseudocode prior to starting to code. I think this represents a lack of familiarity and knowledge with
the tools. My instinct is to want to code right away and solve the problems as they come up. I think this is ok, because it 
shows specifically where the lack of knowledge is as I learn. But the problem of not knowing what tools to use before I start is a glaring one. 

*/ 