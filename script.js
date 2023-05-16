// variables to store score
var correct = 0;
var reasonable = 0;
var unreasonable = 0;
var incorrect = 0;

// load file names, player names, and player ages as 3 arrays
var imagePaths = [
    "photos/wce1.PNG",
    "photos/wce2.PNG",
    "photos/wce3.PNG",
    "photos/wce4.PNG",
    "photos/wce5.PNG",
    "photos/wce6.PNG",
    "photos/wce7.PNG",
    "photos/wce8.PNG",
    "photos/wce9.PNG",
    "photos/wce10.PNG",
    "photos/wcew1.PNG",
    "photos/wcew2.PNG",
    "photos/wcew3.PNG",
    "photos/wcew4.PNG",
    "photos/wcew5.PNG",
    "photos/wcew6.PNG",
    "photos/wcew7.PNG",
    "photos/wcew8.PNG",
    "photos/wcew9.PNG",
    "photos/wcew10.PNG"
];
var playerNames = [
    "Liam Ryan",
    "Jake Waterman",
    "Andrew Gaff",
    "Dom Sheed",
    "Jayden Hunt",
    "Elliot Yeo",
    "Reuben Ginbey",
    "Elijah Hewett",
    "Nic Naitanui",
    "Sam Petrevski-Seton",
    "Lauren Wakfer",
    "Kellie Gibson",
    "Charlotte Thomas",
    "Ella Roberts",
    "Courtney Rowley",
    "Isabella Lewis",
    "Aimee Schmidt",
    "Sasha Goranova",
    "Isabella Simmons",
    "Jessica Sedunary"
];
var playerAges = [
    26,
    25,
    30,
    28,
    28,
    29,
    18,
    18,
    33,
    25,
    19,
    26,
    19,
    18,
    19,
    20,
    30,
    21,
    21,
    32
];

// group player information into photo objects
var photoObjects = [];
for(var i = 0; i < imagePaths.length; i++) {
    var photoObject = {
        path: imagePaths[i],
        age: playerAges[i],
        name: playerNames[i]
    };
    photoObjects.push(photoObject);
}

// select random photo
var currentIndex = photoObjects.length;

function selectRandomPhoto() {
    currentIndex--;
    var randomIndex = Math.floor(Math.random() * (currentIndex + 1));

    // Fisher Yates shuffle, move used photo objects to end to not reuse them
    var temp = photoObjects[currentIndex];
    photoObjects[currentIndex] = photoObjects[randomIndex];
    photoObjects[randomIndex] = temp;
}

// display a new player
function nextPlayer() {
    // end the game
    if (currentIndex === photoObjects.length - 10) {
        endGame();
        return;
    }

    selectRandomPhoto();
    player = photoObjects[currentIndex];

    // Change image
    var image = document.getElementById("myImage");
    image.src = player.path;

    // Change text
    var textElement = document.getElementById("myText");
    textElement.textContent = "Should you check " + player.name + "'s ID?"

    disableNextButton();
}

// disable yes no, enable next
function disableAnswerButtons() {
    var yesButton = document.getElementById("yes");
    var noButton = document.getElementById("no");
    var nextButton = document.getElementById("next");

    yesButton.disabled = true;
    noButton.disabled = true;
    nextButton.disabled = false;
}

// enable yes no, disable next, clear result
function disableNextButton() {
    var yesButton = document.getElementById("yes");
    var noButton = document.getElementById("no");
    var nextButton = document.getElementById("next");

    yesButton.disabled = false;
    noButton.disabled = false;
    nextButton.disabled = true;

    var resultElement = document.getElementById("result");
    resultElement.textContent = "";
}

// show the current results
function updateResult(result) {
    player = photoObjects[currentIndex];
    var total = correct + reasonable + unreasonable + incorrect;

    var resultElement = document.getElementById("result");
    resultElement.textContent = result + " - " + player.name + " is " + player.age + " years old. You have got " + correct + " correct, " + reasonable + " reasonable, " + unreasonable + " unreasonable, " + incorrect + " incorrect, out of " + total + ".";
}

// disable buttons and display score
function endGame() {
    var yesButton = document.getElementById("yes");
    var noButton = document.getElementById("no");
    var nextButton = document.getElementById("next");

    yesButton.disabled = true;
    noButton.disabled = true;
    nextButton.disabled = true;

    var resultElement = document.getElementById("result");
    var total = correct + reasonable + unreasonable + incorrect;
    var score = (correct + reasonable) * 100.0 / total;
    resultElement.textContent = "You got " + correct + " correct, " + reasonable + " reasonable, " + unreasonable + " unreasonable, " + incorrect + " incorrect, out of " + total + ". (" + score + "%)";

    var textElement = document.getElementById("myText");
    textElement.textContent = "";
}

// check if id was checked correctly and score appropriately
function checkAnswer(checked) {
    player = photoObjects[currentIndex];

    if (checked == 1 & player.age <= 25) {
        correct++;
        updateResult("Correct");
    }
    else if (checked == 1 & player.age <= 27) {
        reasonable++;
        updateResult("Reasonable");
    }
    else if (checked == 1 & player.age > 27) {
        unreasonable++;
        updateResult("Unreasonable");
    }
    else if (checked == 0 & player.age <= 22) {
        incorrect++;
        updateResult("Incorrect");
    }
    else if (checked == 0 & player.age <= 25) {
        reasonable++;
        updateResult("Reasonable");
    }
    else {
        correct++
        updateResult("Correct");
    }
    disableAnswerButtons();
}

// check answer under id checked conditions
function button1Clicked() {
    checkAnswer(1);
}

// check answer under id not checked conditions
function button2Clicked() {
    checkAnswer(0);
}