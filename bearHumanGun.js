var choices = ['bear','human','gun'];

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (choices.includes(userInput)) {
        return userInput
    }
    else {
        console.log('Wrong input')
    }
}

function getComputerChoice() {
    randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function determineWinner(userChoice,computerChoice) {
    if (userChoice == computerChoice) {
        return 'Tie'
    }
    else if (userChoice == 'bear') {
        if (computerChoice == 'human') {
            return 'User beats Computer: bear mauls human.'
        }
        else if (computerChoice == 'gun') {
            return 'Computer beats User: gun shoots bear.'
        }
    }
    else if (userChoice == 'human') {
        if (computerChoice == 'bear') {
            return 'Computer beats User: bear mauls human.'
        }
        else if (computerChoice == 'gun') {
            return 'User beats Computer: human disarm gun.'
        }
    }
    else if (userChoice == 'gun') {
        if (computerChoice == 'bear') {
            return 'User beats Computer: gun shoots bear.'
        }
        else if (computerChoice == 'human') {
            return 'Computer beats User: human disarms gun.'
        }
    }
}

function playGame() {
    promptUserChoice = prompt("Please choose bear, human or gun.");
    userChoice = getUserChoice(promptUserChoice);
    computerChoice = getComputerChoice();
    message = determineWinner(userChoice,computerChoice);
    console.log(message);
}

playGame();
