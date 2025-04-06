let threeStar = ["trash","poop", "banana"];
let fourStar = ["github guy", "wumpus","snapchat ghost", "el primo"]
let fiveStar =["ugly dog", "spiderman", "silly guy", "war criminal", "sparkle", "magik", "bakugo", "deku"]
let sixStar = ["buster","mercuria","jessica","kafka","jane doe","isolde","skylar", "qingque","ena", "mizuki", "fang","melodie", "colette", "balloon party", "schneider"]
let indexBook = ["trash","poop", "banana","github guy", "wumpus","snapchat ghost", "el primo","ugly dog", "spiderman", "silly guy", "war criminal", "sparkle", "magik", "bakugo", "deku", "buster","mercuria","jessica","kafka","jane doe","isolde","skylar", "qingque","ena", "mizuki", "fang","melodie", "colette", "balloon party", "schneider"]
let fourScore = 0;
let fiveScore = 0;
let sixScore = 0;
let counter = 0;
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
                if((randomThree) = randomThree) {
                    character.textcontent = randomThree;
                 } }
                if(threeStar[randomThree]  != indexBook[threeStar[randomThree]]){
                    hasBook += indexBook;
                    console.log(indexBook)
                }else{
                    console.log(hasBook)
                }
            }
            }
            if(probability(15)) {
                randomFour = fourStar
                if (fourScore > 10) {
                    let randomFour = Math.floor(Math.random() * 4) + 0;
                    character.textcontent = randomFour;
                    if(fourStar[randomFour]  != indexBook[fourStar[randomFour]]){
                        hasBook += indexBook;
                        console.log(indexBook)
                    }else{
                        console.log(hasBook)
                    }
                } else {
                     randomFour = Math.floor(Math.random() * 4) + 0;
                    for ( let i =0; i < 3; i++){
                        let randomFour = Math.floor(Math.random() * 4) + 0;
                        if((randomFour) = randomFour) {
                            character.textcontent = randomFour;
                            if(fourStar[randomFour]  != indexBook[fourStar[randomFour]]){
                                hasBook += indexBook;
                                console.log(indexBook)
                            }else{
                                console.log(hasBook)
                            }
                         } }
                }
            }
            if(probability(1.5)) { 
                randomFive = fiveStar
                if (fiveScore > 30) {
                     randomFive = Math.floor(Math.random() * 7) + 0;
                    character.textcontent = randomFive;
                    if(fiveStar[randomFive]  != indexBook[fiveStar[randomFive]]){
                        hasBook += indexBook;
                        console.log(indexBook)
                    }else{
                        console.log(hasBook)
                    } 
                } else {
                    randomFive = Math.floor(Math.random() * 7) + 0;
                   for ( let i =0; i < 3; i++){
                        randomFive = Math.floor(Math.random() * 7) + 0;
                       if((randomFive) = randomFive) {
                           character.textcontent = randomFive;
                           if(fiveStar[randomFive]  != indexBook[fiveStar[randomFive]]){
                               hasBook += indexBook;
                               console.log(indexBook)
                           }else{
                               console.log(hasBook)
                           }
                        } }
               } 
                 }
          }})}