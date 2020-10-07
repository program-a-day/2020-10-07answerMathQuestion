// Initialize document
const TOTAL_RIGHT_ANS = 10
const TOTAL_WRONG_ANS = 3
let rightAnswersCount = 0
let wrongAnswersCount = 0
let graphFill = '0%'
let questionDisplay = document.querySelector('.question')
let answerInput = document.querySelector('.answer')
let message = document.querySelector('.message')
let graph = document.querySelector('.graph')
let gameOver = document.querySelector('.game-over')
let winLoseMessage = document.querySelector('.win-lose-message')
displayNewQuestion()
updateMessageAndGraph()
document.forms[0].onsubmit = () => false

// Analize answer
answerInput.onchange = e => {
    console.log()
    eval(questionDisplay.textContent) == +answerInput.value ?
        rightAnswersCount++ :
        wrongAnswersCount++;
    console.log(rightAnswersCount, wrongAnswersCount)
    if (wrongAnswersCount == TOTAL_WRONG_ANS) {
        displayGameEnd('win')
    } else if (rightAnswersCount == TOTAL_RIGHT_ANS) {
        displayGameEnd('lose')
    }
    displayNewQuestion()
    updateMessageAndGraph()
}

// פונקציות עזר
function displayNewQuestion() {
    answerInput.value = ""
    questionDisplay.textContent = `${~~(Math.random() * 20)} ${['-', '+', '*'][~~(Math.random() * 3)]} ${~~(Math.random() * 20)}`
}
function updateMessageAndGraph() {
    message.textContent = `You need now ${TOTAL_RIGHT_ANS - rightAnswersCount} points, and are allowed to make ${TOTAL_WRONG_ANS - wrongAnswersCount} more mistakes`
    graph.style.setProperty('--rightAnswer', `${rightAnswersCount / TOTAL_RIGHT_ANS * 100}%`)
}
function displayGameEnd(status) {
    graph.style.setProperty('--rightAnswer', "0%")
    console.log('Game end')
    answerInput.value = ''
    gameOver.style.display = 'flex'
    wrongAnswersCount == TOTAL_WRONG_ANS ?
        winLoseMessage.textContent = 'You lose, try again ! 🌛' :
        winLoseMessage.textContent = 'Great, you win ! 😍'
    rightAnswersCount = wrongAnswersCount = 0
}

document.querySelector('.start-again-btn').onclick = () => gameOver.style.display = 'none'


