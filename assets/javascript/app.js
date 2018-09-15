$(document).ready(function () {

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
            "question": "What is the name of the robot in the 1951 science fiction film classic 'The Day the Earth Stood Still'?",
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
            "question": "In the movie 'Scream' who is Ghost Face?",
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
            "question": "In 'Star Trek Nemesis', why was Praetor Shinzon created?",
            "correct_answer": "To replace Picard as a Romulan Agent",
            "answers": [
                "To destroy the Enterprise",
                "To become Picard's friend ",
                "To steal the Enterprise",
                "To replace Picard as Romulan Agent",
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What is the species of the Predator in the 1987 movie 'Predator'?",
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
            "question": "In the Friday The 13th series, what is Jason's mother's first name?",
            "correct_answer": "Pamela",
            "answers": [
                "Mary",
                "Christine",
                "Angeline",
                "Pamela",
            ]
        }
    ];

    var incorrect;
    var correct;
    var randomTrivia;
    var count;
    var timer;

    //Function new game that append the buttons to the empty div in HTML
    function newGame() {
        correct = 0;
        incorrect = 0;
        randomTrivia = triviaCard[Math.floor(Math.random() * triviaCard.length)];
        $("#questionBox").text(randomTrivia.question);
        $(".buttonContainer").empty();
        for (var i = 0; i < randomTrivia.answers.length; i++) {
            var button = $("<button>").html(randomTrivia.answers[i]);
            $(button).attr("class", "answerButton");
            $(button).attr("value", randomTrivia.answers[i]);
            $(button).attr("id", "button" + i);
            $(".buttonContainer").append(button);
        }
        $(document).on("click", ".answerButton", answerReview);
        
        $(".correctKeeper").html("Your correct score is: " + correct);
        $(".incorrectKeeper").html("Your Incorrect score is: " + incorrect);

        startTimer();
    };

    function startTimer() {
        count = 30;
        if(!timer)
        {
            $("#timerBox").html(count);
            timer = setInterval(myTimer, 1000);
        }
    };

    function myTimer() {
        $("#timerBox").html(count);
        if (count < 1) {
            stopInterval();
        }
        count--;
    };

    function stopInterval() {
        console.log('time is up!');
        alert("Time is Up");
        clearInterval(timer);
        incorrect++;
        $(".incorrectKeeper").html("Your Incorrect score is: " + incorrect);
        checkEndGame();
        nextCard();
    };


    function answerReview() {
        event.stopPropagation();
        var response = $(this).val();
        console.log("correct answer " + randomTrivia.correct_answer);
        if (response === randomTrivia.correct_answer) {
            correct++;
            $(".correctKeeper").html("Your correct score is: " + correct);
        }
        else {
            incorrect++;
            $(".incorrectKeeper").html("Your Incorrect score is: " + incorrect);
        }
        checkEndGame();
        nextCard();
    };

    function nextCard() {
        randomTrivia = triviaCard[Math.floor(Math.random() * triviaCard.length)];
        $("#questionBox").text(randomTrivia.question);
        $("#button0").attr("value", randomTrivia.answers[0]);
        $("#button0").html(randomTrivia.answers[0]);
        $("#button1").attr("value", randomTrivia.answers[1]);
        $("#button1").html(randomTrivia.answers[1]);
        $("#button2").attr("value", randomTrivia.answers[2]);
        $("#button2").html(randomTrivia.answers[2]);
        $("#button3").attr("value", randomTrivia.answers[3]);
        $("#button3").html(randomTrivia.answers[3]);
        startTimer();
    };

    function checkEndGame() {
        if (correct >= 5) {
            alert("Congratulations! Thanks for playing.");
            newGame();
        }
        else if (incorrect >= 7) {
            alert("Better luck next time!")
            newGame();
        }
    };


    // start the game
    newGame();
});