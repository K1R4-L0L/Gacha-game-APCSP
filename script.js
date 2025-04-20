let threeStar = ["trash", "poop", "banana"];
let fourStar = ["github guy", "wumpus", "snapchat ghost", "el primo"];
let fiveStar = ["ugly dog", "spiderman", "silly guy", "gurt", "sparkle", "magik", "bakugo", "deku"];
let sixStar = ["buster", "mercuria", "jessica", "kafka", "jane doe", "isolde", "skylar", "qingque", "ena", "mizuki", "fang", "melodie", "colette", "balloon party", "schneider"];
let fourScore = 0;
let fiveScore = 0;
let sixScore = 0;
let hasBook = [];
const collection = document.querySelector(".book-list ul")
const fourCounter = document.querySelector(".fourCounter p");
const fiveCounter = document.querySelector(".fiveCounter p");
const sixCounter = document.querySelector(".sixCounter p");
const button = document.querySelector(".button");
let character = document.querySelector(".character p");

// Function to open the loot box
let openingBox = () => {
    button.addEventListener('click', () => {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                let probability = Math.random() * 100;
                let gotFour = false;
                let gotFive = false;
                let gotSix = false;

                // Check the probability for 6★, 5★, and 4★
                if (probability < 1.5 || sixScore >= 50) {
                    sixPull();
                    gotSix = true;
                } else if (probability < 5 || fiveScore >= 30) {
                    fivePull();
                    gotFive = true;
                } else if (probability < 20 || fourScore >= 10) {
                    fourPull();
                    gotFour = true;
                } else {
                    let randomThree = Math.floor(Math.random() * threeStar.length);
                    character.textContent = threeStar[randomThree];
                    if (!hasBook.includes(threeStar[randomThree])) {
                        hasBook.push(threeStar[randomThree]);
                        collector();
                    } else {
                        console.log("You have character already");
                    }
                }

                // Update the scores after the pull
                ScoreCounter(gotFour, gotFive, gotSix);
            }, i * 2000); // Delay between each pull
        }
    });
};

// Function to update scores
let ScoreCounter = (gotFour, gotFive, gotSix) => {
    // Reset and increment the scores based on the rarity pulled
    if (gotFour) {
        fourScore = 0; // Reset score after pulling 4★
    } else if (fourScore < 10) {
        fourScore += 1; // Increment if no 4★ was pulled
    }

    if (gotFive) {
        fiveScore = 0; // Reset score after pulling 5★
    } else if (fiveScore < 30) {
        fiveScore += 1; // Increment if no 5★ was pulled
    }

    if (gotSix) {
        sixScore = 0; // Reset score after pulling 6★
    } else if (sixScore < 80) {
        sixScore += 1; // Increment if no 6★ was pulled
    }

    // Update the counters on the webpage
    fourCounter.textContent = `4★ Score: ${fourScore}`;
    fiveCounter.textContent = `5★ Score: ${fiveScore}`;
    sixCounter.textContent = `6★ Score: ${sixScore}`;
};

// Pulling a 4★ character
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

// Pulling a 5★ character
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

// Pulling a 6★ character
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

let collector = () => {
hasBook.textContent = 'Collected Characters: [hasBook]'
}

openingBox(); // Start the loot box opening process
