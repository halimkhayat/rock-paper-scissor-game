
// main function of this game
function rpsGame(yourChoice) {
    let humanChoice = yourChoice.id
    console.log(humanChoice)

    // create random pick number with math method
    let botChoice = randomPick(randomNum());
    console.log(botChoice)

    // result between two choices
    let result = winnerRps(humanChoice,botChoice)
    console.log(result)

    // message for who win or lost, or tied...
    message = finalMessage(result)
    console.log(message)

    // display frontend for the result
    displayResult(humanChoice, botChoice, message)
    
}

function randomPick(num){
    return ['rock', 'paper', 'scissor'] [num]
}

function randomNum(){
    return Math.floor(Math.random() * 3)
}

function winnerRps(yourChoice, botChoice){
    const rpsData = {
        'rock': {'rock': 0.5, 'paper': 0, 'scissor': 1},
        'paper': {'paper': 0.5, 'scissor': 0, 'rock': 1},
        'scissor': {'scissor': 0.5, 'rock': 0, 'paper': 1}
    }

    let humanScore = rpsData[yourChoice][botChoice]
    console.log(humanScore)
    let botScore = rpsData[botChoice][yourChoice]
    return[humanScore, botScore]
}

function finalMessage([yourScore, botScore]){
    if(yourScore === 0){
        return {'message': 'You Lost! try again', 'color': 'red'}
    } else if (yourScore === 0.5) {
        return {'message': 'You Tied!', 'color': 'yellow'}
    } else {
        return {'message': 'Hooray! you win', 'color': 'green'}
    }

}

function displayResult(humanChoice, botChoice, answerMessage){
    let imageSrc = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissor').remove()

    let humanAnswer = document.createElement('div');
    let botAnswer = document.createElement('div');
    let answerText = document.createElement('div');
   

    humanAnswer.innerHTML = "<img src='" + imageSrc[humanChoice] + "'height=150 width=150 >"
    botAnswer.innerHTML = "<img src='" + imageSrc[botChoice] + "'height=150 width=150 >"
    answerText.innerHTML = "<h1 style='color:" + answerMessage['color'] + ";font-size: 50px; padding: 20px;'> " + answerMessage['message'] + "</h1>";

    console.log(humanAnswer)
    console.log(answerText)

    document.getElementById('rps-id').appendChild(humanAnswer)
    document.getElementById('rps-id').appendChild(answerText)
    document.getElementById('rps-id').appendChild(botAnswer)
}

let resetPic = document.getElementById('rps-id')


function resetBtn(){
   location.reload() 
}

