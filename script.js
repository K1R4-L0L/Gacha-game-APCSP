let threeStar = ["trash","poop", "banana"];
let fourStar = ["github guy", "wumpus","snapchat ghost", "el primo"]
let fiveStar =["ugly dog", "spiderman", "silly guy", "war criminal", "sparkle", "magik", "bakugo", "deku"]
let sixStar = ["buster","mercuria","jessica","kafka","jane doe","isolde","skylar", "qingque","ena", "mizuki", "fang","melodie", "colette", "balloon party", "schneider"]
let indexBook = ["trash","poop", "banana","github guy", "wumpus","snapchat ghost", "el primo","ugly dog", "spiderman", "silly guy", "war criminal", "sparkle", "magik", "bakugo", "deku", "buster","mercuria","jessica","kafka","jane doe","isolde","skylar", "qingque","ena", "mizuki", "fang","melodie", "colette", "balloon party", "schneider"]
let score = 0;
let hasBook = 0;
const box = document.querySelector(".lootbox")
const openbox = document.querySelector(".open-lb")
const button = document.querySelector(".button")
let character = document.querySelector(".character")

// function to open the loot box 
let openingBox  = () => {
    button.addEventListener('click', () =>{
        for (let i = 0; i < 9; i++) {
            if(probability(80)){
                randomThree = threeStar
                for (let i =0; i < 2; i++) {
                let randomThree = Math.floor(Math.random() * 3) + 0;
                for ( let i =0; i < 2; i++){
                if(randomThree) = randomThree[1] {
                    character.textcontent = threeStar[1];
                } }
                if(threeStar[randomThree]  != indexBook[threeStar[randomThree]]){
                    hasBook += indexBook;
                    console.log(indexBook)
                }else{
                    console.log(hasBook)
                }
            }
            }

          }})}