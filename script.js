// const player1 = document.querySelector('.player-1')
// const player2 = document.querySelector('.player-2')
// const player1Btn = document.querySelector('.player-1_btn')
// const player2Btn = document.querySelector('.player-2_btn')
// const resetBtn = document.querySelector('.reset-btn')
// const changes = document.querySelector('#changes')

// let playerScore1 = 0
// let playerScore2 = 0
// let gameLevel = 3
// let gameOver = false

// player1Btn.addEventListener('click', ()=> {
//     if(!gameOver) {
//         playerScore1++
//         if(playerScore1 >= gameLevel) {
            // gameOver = true
//             player1.style.color = 'var(--color-green)'
//             player2.style.color = 'var(--color-red)'
//         }
//     }
//     player1.textContent = playerScore1
// })

// player2Btn.addEventListener('click', ()=> {
//     if(!gameOver) {
//         playerScore2++
//         if(playerScore2 >= gameLevel) {
//             gameOver = true
//             player1.style.color = 'var(--color-red)'
//             player2.style.color = 'var(--color-green)'
//         }
//     }
//     player2.textContent = playerScore2
// })

// changes.addEventListener('change', ()=> {
//     const value = changes.value
//     gameLevel = value
//     restart()
// })

// resetBtn.addEventListener('click', restart)

// function restart() {
//     player1.style.color = '#000'
//     player2.style.color = '#000'
//     playerScore1 = 0
//     playerScore2 = 0
//     player1.textContent = 0
//     player2.textContent = 0
//     gameOver = false
// }

const changes = document.getElementById('changes')
let player1 = document.querySelector('.player-1')
let player2 = document.querySelector('.player-2')
let player1Btn = document.querySelector('.player-1_btn')
let player2Btn = document.querySelector('.player-2_btn')
let resetBtn = document.querySelector('.reset-btn')

let playerScore1 = 0
let playerScore2 = 0
let gameLevel = 3
let gameOver = false
player1Btn.addEventListener('click', ()=> {
   if(!gameOver) {
     playerScore1 ++

    player1.textContent = playerScore1
    if(playerScore1 >= gameLevel) {
        player1.style.color = 'var(--color-green)'
        player2.style.color = 'var(--color-red)'
        gameOver = true
    }
   }
})

player2Btn.addEventListener('click', ()=> {
    if(!gameOver) {
        playerScore2 ++
    player2.textContent = playerScore2

    if(playerScore2 >= gameLevel) {
        player1.style.color = 'var(--color-red)'
        player2.style.color = 'var(--color-green)'
        gameOver = true
    }
    }
})

changes.addEventListener('change', ()=> {
    gameLevel = changes.value
    restart()
})

resetBtn.addEventListener('click', ()=> {
    restart()
})

function restart() {
    player1.style.color = '#000'
    player2.style.color = '#000'
    playerScore1 = 0
    playerScore2 = 0
    player1.textContent = playerScore1
    player2.textContent = playerScore2
    gameOver = false
}