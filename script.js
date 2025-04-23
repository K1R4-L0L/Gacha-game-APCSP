let threeStar = ["trash", "poop", "banana","mr man"];///lists the rarity of most common, three star
let fourStar = ["github guy", "wumpus", "snapchat ghost", "el primo", "eye of rah", "property in egypt"]; // list rarity of 4 star
let fiveStar = ["ugly dog", "spiderman", "silly guy", "gurt", "sparkle", "magik", "bakugo", "deku"]; // list rarity of 5 star
let sixStar = ["buster", "mercuria", "jessica", "kafka", "jane doe", "isolde", "skylar", "qingque", "ena", "mizuki", "fang", "melodie", "colette", "balloon party", "schneider"];// lists rarest rarity, 6 star 
let fourScore = 0; // sets up pity/ score to get an garunteed character for all below 
let fiveScore = 0;
let sixScore = 0;
let hasBook = []; // sets up an array to push all collected characters 
const collection = document.querySelector(".book-list"); // supposed to change text for collected characyters
const fourCounter = document.querySelector(".fourCounter p"); // counters below are all there to change the pity/ score counters 
const fiveCounter = document.querySelector(".fiveCounter p");
const sixCounter = document.querySelector(".sixCounter p");
const button = document.querySelector(".button"); // button to open lootbox
let character = document.querySelector(".character p"); //shows the characters gotten that pull

// Function to open the loot box
let openingBox = (numPulls) => { //parameter for number of pulls ( 10 )
    button.addEventListener('click', () => {
        for (let i = 0; i < numPulls; i++) { // sets up a loop about number of pulls 
            setTimeout(() => { /// initializing a timeout so user can view each character individually 
                let probability = Math.random() * 100; // sets up probability/ percentage for the gacha pulls
                let gotFour = false;// reminds the score counter they are false at that m,oment
                let gotFive = false;
                let gotSix = false;

                // Check the probability in order to pull a charactrt 
                if (probability < 1.5 || sixScore >= 50) { // six star probability and conditions to be pulled 
                    sixPull();
                    gotSix = true; //shows true for the pity counters
                } else if (probability < 5 || fiveScore >= 30) { // five star probability and conditions to be pulled 
                    fivePull();
                    gotFive = true;
                } else if (probability < 20 || fourScore >= 10) { // four star probability and conditions to be pulled 
                    fourPull();
                    gotFour = true;
                } else {// three star pull function
                    let randomThree = Math.floor(Math.random() * threeStar.length); // randomly selects from three star array
                    character.textContent = threeStar[randomThree]; // changes character text content to whatever three star pulled 
                    if (!hasBook.includes(threeStar[randomThree])) {
                        hasBook.push(threeStar[randomThree]); // pushes to array to apply later to reveal to the user what characters they have 
                        collector(); // calls to the function that shows all the characters 
                    } else {
                        console.log("You have character already");
                    }
                }

                // Update the scores after the pull
                ScoreCounter(gotFour, gotFive, gotSix); 
            }, i * 2000); // Delays between each pull by 2 secs 
        }
    });
};

// Function to update scores/ pity 
let ScoreCounter = (gotFour, gotFive, gotSix) => {
    if (gotFour) {
        fourScore = 0; // Reset score after pulling a 4 star 
    } else if (fourScore < 10) {
        fourScore += 1; // add by 1 score/ pity if no one was pulled 
    }

    if (gotFive) {
        fiveScore = 0; // Reset score after pulling a 5 star 
    } else if (fiveScore < 30) {
        fiveScore += 1; // add by 1 score/ pity if no one was pulled 
    }

    if (gotSix) {
        sixScore = 0; // Reset score after pulling a six  star 
    } else if (sixScore < 50) {
        sixScore += 1; // add by 1 score/ pity if no one was pulled 
    }

    // Update the counters 
    fourCounter.textContent = `4★ Score: ${fourScore}`;
    fiveCounter.textContent = `5★ Score: ${fiveScore}`;
    sixCounter.textContent = `6★ Score: ${sixScore}`;
};

// Pulling a 4 star  character ( its the same as the three star one but with different values ) [ same function for rest of the pulls below ]
let fourPull = () => {
    let randomFour = Math.floor(Math.random() * fourStar.length);
    character.textContent = fourStar[randomFour];
    if (!hasBook.includes(fourStar[randomFour])) {
        hasBook.push(fourStar[randomFour]);
        collector();
    } else {
        console.log("You have character already");
    }
};

// Pulling a 5 star character
let fivePull = () => {
    let randomFive = Math.floor(Math.random() * fiveStar.length);
    character.textContent = fiveStar[randomFive];
    if (!hasBook.includes(fiveStar[randomFive])) {
        hasBook.push(fiveStar[randomFive]);
        collector();
    } else {
        console.log("You have character already");
    }
};

// Pulling a 6 star  character
let sixPull = () => {
    let randomSix = Math.floor(Math.random() * sixStar.length);
    character.textContent = sixStar[randomSix];
    if (!hasBook.includes(sixStar[randomSix])) {
        hasBook.push(sixStar[randomSix]);
        collector();
    } else {
        console.log("You have character already");
    }
};
//function to show collection of characters 
let collector = () => {
    collection.innerHTML = `Collected characters: ${hasBook.join(', ')}`; // adds characters that were added to has book  array to the text
    collection.classList.add("update");
};
// calls back the function to start the event listener 
openingBox(10);