var triviaCard = [
    //"response_code": 0,
    {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
        "correct_answer": "Harry Potter",
        "answers": [
            "Ted",
            "Spy Kids",
            "Pirates of the Caribbean",
            "Harry Potter",
        ]
    },
    {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the name of the robot in the 1951 science fiction film classic &#039;The Day the Earth Stood Still&#039;?",
        "correct_answer": "Gort",
        "answers": [
            "Robby",
            "Colossus",
            "Box",
            "Gort",
        ]
    },
    {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of the following James Bond villains is not affiliated with the SPECTRE organization?",
        "correct_answer": "Auric Goldfinger",
        "answers": [
            "Dr. Julius No",
            "Rosa Klebb",
            "Emilio Largo",
            "Auric Goldfinger",
        ]
    },
    {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What was the first James Bond film?",
        "correct_answer": "Dr. No",
        "answers": [
            "Goldfinger",
            "From Russia With Love",
            "Thunderball",
            "Dr. No",
        ]
    },
    {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who plays Alice in the Resident Evil movies?",
        "correct_answer": "Milla Jovovich",
        "answers": [
            "Madison Derpe",
            "Milla Johnson",
            "Kim Demp",
            "Milla Jovovich",
        ]
    },
    {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "hard",
        "question": "In the movie &quot;Scream&quot; who is Ghost Face?",
        "correct_answer": "Billy Loomis and Stu Macher",
        "answers": [
            "Dewey Riley",
            "Sidney Prescott",
            "Archie Prescott and Philip Marv",
            "Billy Loomis and Stu Marcher",
        ]
    },
    {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which animated film did Steven Lisberger direct in 1980 before going on to direct Tron?",
        "correct_answer": "Animalympics",
        "answers": [
            "The Fox and the Hound",
            "The Black Cauldron",
            "The Great Mouse Detecive",
            "Animalympics",
        ]
    },
    {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "hard",
        "question": "In &quot;Star Trek Nemesis&quot;, why was Praetor Shinzon created?",
        "correct_answer": "To replace Picard as a Romulan Agent",
        "answers": [
            "To destroy the Enterprise",
            "To become Picard&#039;s friend ",
            "To steal the Enterprise",
            "To replace Picard as Romulan Agent",
        ]
    },
    {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What is the species of the &quot;Predator&quot; in the 1987 movie &quot;Predator&quot;?",
        "correct_answer": "Yautja",
        "answers": [
            "Xenomorph",
            "Praetorian",
            "Phocrex",
            "Yautja",
        ]
    },
    {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In the Friday The 13th series, what is Jason&#039;s mother&#039;s first name?",
        "correct_answer": "Pamela",
        "answers": [
            "Mary",
            "Christine",
            "Angeline",
            "Pamela",
        ]
    }
];

var counter = 0;
var incorrect = 0;
var correct = 0;
var randomTrivia = "";

//JS code here

// window.onload = function() {
//     $("#start").on("click", stopwatch.start);
//   };

function newGame() {
    // console.log("Does new game work?")
    var randomTrivia = triviaCard[Math.floor(Math.random() * triviaCard.length)];
    //console.log(randomTrivia);
    // for (var j = 0; j < triviaCard.length; j++) {
    // console.log("does for loop work");
    $("#questionBox").append(randomTrivia.question);
    $("#button1").html(randomTrivia.answers[0]);
    $("#button2").html(randomTrivia.answers[1]);
    $("#button3").html(randomTrivia.answers[2]);
    $("#button4").html(randomTrivia.answers[3]);
    //console.log("ishtmlworking?");
    $(".button").click(function () {
    console.log(button);
    });
    return randomTrivia;
}

// Function checkAnwers
// function checkAnswer() {
//     var hasMatch=true;
//     for (var i=0; i<triviaCard.length; i++) {
//         if (.button = randomTrivia.answer[i])

//     }

// };
// //Function load newCard function

// function loadNewCard() {

// }


// // }

//Call fucntions
newGame();