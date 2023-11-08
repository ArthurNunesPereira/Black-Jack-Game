let player = {
    name: "Player",
    chips: 150
}
let cards = []
let sumCards = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el") 
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    if (hasBlackJack == true) {
        window.alert("The game has already ended, please refresh the page to start a new game!")
    } else {
        isAlive = true
        let newCard1 = getRandomCard()
        cards.push(newCard1)
        let newCard2 = getRandomCard()
        cards.push(newCard2)
        sumCards = newCard1 + newCard2
        renderGame()
    }  
}

function getRandomCard() {
    let randomCard = Math.floor((Math.random() * 13) + 1)
        if (randomCard > 10) {
            return 10;
        } else if (randomCard === 1) {
            return 11;
        } else {
            return randomCard
        }
}

function drawCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sumCards += newCard
        cards.push(newCard)
        renderGame()
    }
    
}

function renderGame() {
    if(sumCards > 0 && sumCards < 21) {
        message = "Do you want to draw a new card?"
    } else if(sumCards === 21) {
        message = "You've got Blackjack!"
        playerEl.textContent = player.name + ": $" + (player.chips + 50)
        hasBlackJack = true
    } else {
        message = "You're out of the game, please refresh the page to start a new game!"
        playerEl.textContent = player.name + ": $" + (player.chips - 50)
        isAlive = false
    }
    messageEl.textContent = message
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " " 
    }
    sumEl.textContent = "Sum: " + sumCards
}


