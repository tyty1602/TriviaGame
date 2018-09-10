var triviaCard = [
    {
    "response_code": 0,
    "results": [
    {
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    "correct_answer": "Harry Potter",
    "incorrect_answers": [
    "Ted",
    "Spy Kids",
    "Pirates of the Caribbean "
    ]
    },
    {
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What is the name of the robot in the 1951 science fiction film classic &#039;The Day the Earth Stood Still&#039;?",
    "correct_answer": "Gort",
    "incorrect_answers": [
    "Robby",
    "Colossus",
    "Box"
    ]
    },
    {
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which of the following James Bond villains is not affiliated with the SPECTRE organization?",
    "correct_answer": "Auric Goldfinger",
    "incorrect_answers": [
    "Dr. Julius No",
    "Rosa Klebb",
    "Emilio Largo"
    ]
    },
    {
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What was the first James Bond film?",
    "correct_answer": "Dr. No",
    "incorrect_answers": [
    "Goldfinger",
    "From Russia With Love",
    "Thunderball"
    ]
    },
    {
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Who plays Alice in the Resident Evil movies?",
    "correct_answer": "Milla Jovovich",
    "incorrect_answers": [
    "Madison Derpe",
    "Milla Johnson",
    "Kim Demp"
    ]
    },
    {
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "hard",
    "question": "In the movie &quot;Scream&quot; who is Ghost Face?",
    "correct_answer": "Billy Loomis and Stu Macher",
    "incorrect_answers": [
    "Dewey Riley",
    "Sidney Prescott",
    "Archie Prescott and Philip Marv"
    ]
    },
    {
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which animated film did Steven Lisberger direct in 1980 before going on to direct Tron?",
    "correct_answer": "Animalympics",
    "incorrect_answers": [
    "The Fox and the Hound",
    "The Black Cauldron",
    "The Great Mouse Detecive"
    ]
    },
    {
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "hard",
    "question": "In &quot;Star Trek Nemesis&quot;, why was Praetor Shinzon created?",
    "correct_answer": "To replace Picard as a Romulan Agent",
    "incorrect_answers": [
    "To destroy the Enterprise",
    "To become Picard&#039;s friend ",
    "To steal the Enterprise"
    ]
    },
    {
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What is the species of the &quot;Predator&quot; in the 1987 movie &quot;Predator&quot;?",
    "correct_answer": "Yautja",
    "incorrect_answers": [
    "Xenomorph",
    "Praetorian",
    "Phocrex"
    ]
    },
    {
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In the Friday The 13th series, what is Jason&#039;s mother&#039;s first name?",
    "correct_answer": "Pamela",
    "incorrect_answers": [
    "Mary",
    "Christine",
    "Angeline"
    ]
    }
    ]
    }];

var counter =0;
var incorrect =0;
var correct =0;
var randomTrivia="";

//JS code here
function newGame () {
    console.log("Does new game work?")
    var randomTrivia = triviaCard[Math.floor(Math.random() * triviaCard.length)];
    console.log("randomfunctionwork?");
    for (var j = 0; j < randomTrivia.length; j++) 
    {$(".bigbox").html(randomTrivia);
    console.log("ishtmlworking?");
}}

//Call fucntions
newGame ();