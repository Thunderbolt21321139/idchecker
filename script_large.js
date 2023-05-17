// variables to store score
var correct = 0;
var reasonable = 0;
var unreasonable = 0;
var incorrect = 0;

// load file names, player names, and player ages as 3 arrays
var imagePaths = [
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1004364.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/996554.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/290801.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/296296.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/994385.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/292128.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1023025.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1020670.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/271045.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/994539.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/295898.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1004385.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/280078.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/298268.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/290826.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1006576.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1017057.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1023167.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/294859.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1006550.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1009291.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/998128.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1008282.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/240283.png?im=Scale,width=0.504,height=0.504",
    "phttps://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1011449.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/290838.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/993820.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1005599.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1020057.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/998791.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1006114.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1017718.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1020371.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/997823.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1003192.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/990290.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1020595.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/990978.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1011243.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1011437.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1023142.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1023496.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1023502.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFL/2023014/1020802.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1022825.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/998041.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1021419.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1022823.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1021415.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1017333.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1005432.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1017334.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1014972.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1005256.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1014034.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1003021.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/998032.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1007029.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1023815.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1027611.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/998156.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1012259.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1019055.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1009900.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1026170.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1009892.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1022818.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1010255.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1029614.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1017343.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1021530.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1026143.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1021416.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1010656.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1014801.png?im=Scale,width=0.504,height=0.504",
    "https://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1012292.png?im=Scale,width=0.504,height=0.504",
    "phttps://s.afl.com.au/staticfile/AFL%20Tenant/AFL/Players/ChampIDImages/AFLW/2101264/1017342.png?im=Scale,width=0.504,height=0.504"
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
    "Tim Kelly",
    "Oscar Allen",
    "Luke Shuey",
    "Liam Duggan",
    "Jamie Cripps",
    "Luke Edwards",
    "Campbell Chesser",
    "Brady Hough",
    "Jeremy Mcgovern",
    "Jack Petruccelle",
    "Isiah Winder",
    "Alex Witherden",
    "Xavier O'Neill",
    "Shannon Hurn",
    "Zane Trew",
    "Jack Darling",
    "Tom Cole",
    "Luke Foley",
    "Harry Barnett",
    "Jamaine Jones",
    "Bailey J Williams",
    "Rhett Bazzo",
    "Jack Williams",
    "Josh Rotham",
    "Connor West",
    "Tom Barrass",
    "Jordyn Baker",
    "Greg Clark",
    "Callum Jamieson",
    "Harry Edwards",
    "Tyrell Dewar",
    "Noah Long",
    "Coby Burgiel",
    "Jai Culley",
    "Lauren Wakfer",
    "Kellie Gibson",
    "Charlotte Thomas",
    "Ella Roberts",
    "Courtney Rowley",
    "Isabella Lewis",
    "Aimee Schmidt",
    "Sasha Goranova",
    "Isabella Simmons",
    "Jessica Sedunary",
    "Aisling Mccarthy",
    "Emma Humphries",
    "Emma Swanson",
    "Belinda Smith",
    "Abbygail Bushby",
    "Zoe Wakfer",
    "Dana Hooker",
    "Jaide Britton",
    "Imahra Cameron",
    "Kate Bartlett",
    "Mikayla Western",
    "Ella Smith",
    "Sarah Lakay",
    "Hayley Bullas",
    "Eleanor Hartill",
    "Emily Bennett",
    "Shanae Davison",
    "Emily Elkington",
    "Beth Schilling",
    "Evangeline Gooch",
    "Krstel Petrevski",
    "Ashleigh Gomes",
    "Sophie Mcdonald" 
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
    28,
    24,
    32,
    26,
    31,
    21,
    20,
    20,
    31,
    24,
    20,
    24,
    22,
    35,
    21,
    30,
    25,
    23,
    19,
    24,
    23,
    19,
    19,
    25,
    24,
    27,
    19,
    25,
    22,
    22,
    19,
    18,
    18,
    20,
    19,
    26,
    19,
    18,
    19,
    20,
    30,
    21,
    21,
    32,
    27,
    28,
    28,
    27,
    18,
    19,
    32,
    20,
    26,
    23,
    24,
    22,
    20,
    26,
    22,
    20,
    21,
    18,
    19,
    27,
    22,
    25,
    22  
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

// reset the game
function resetGame() {
    currentIndex = photoObjects.length;
    correct = 0;
    reasonable = 0;
    unreasonable = 0;
    incorrect = 0;

    nextPlayer();
}
