let threeStar = ["trash","poop", "banana"];
let fourStar = ["github guy", "wumpus","snapchat ghost", "el primo"]
let fiveStar =["ugly dog", "spiderman", "silly guy", "war criminal", "sparkle", "magik", "bakugo", "deku"]
let sixStar = ["buster","mercuria","jessica","kafka","jane doe","isolde","skylar", "qingque","ena", "mizuki", "fang","melodie", "colette", "balloon party", "schneider"]
let indexBook = ["trash","poop", "banana","github guy", "wumpus","snapchat ghost", "el primo","ugly dog", "spiderman", "silly guy", "war criminal", "sparkle", "magik", "bakugo", "deku", "buster","mercuria","jessica","kafka","jane doe","isolde","skylar", "qingque","ena", "mizuki", "fang","melodie", "colette", "balloon party", "schneider"]
let score = 0;

const box = document.querySelector(".lootbox")
const openbox = document.querySelector(".open-lb")
const button = document.querySelector(".button")

// function to open the loot box 
let openingBox  = () => {
    button.addEventListener('click', () =>{
        for (let i = 0; i < 9; i++) {
            if(probability(80)){
                randomThree = threeStar
                let randomThree = Math.floor(Math.random() * 3) + 1;
                if(randomThree[0]  != indexbook[0]){
                     let hasBook =+ indexBook[0];
                    console.log(myArray[0]);

            }

          }})}