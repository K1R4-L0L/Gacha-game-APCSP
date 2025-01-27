let threeStar = ["trash","poop", "banana"];
let fourstar = ["github guy", "wumpus","snapchat ghost", "el primo"]
let fivestar =["ugly dog", "spiderman", "silly guy", "war criminal", "sparkle", "magik", "bakugo"]
let sixstar = ["buster","mercuria","jessica","kafka","jane doe","isolde","skylar", "qingque","ena", "mizuki", "fang","melodie", "colette", "balloon party", "schneider"]
let index = 0;
let score = 0;
const box = document.querySelector(".lootbox")
const openbox = document.querySelector(".open-lb")
const button = document.querySelector(".button")

// function to open the loot box 
let openingBox  = () => {
    button.addEventListener('click', () =>{
    for