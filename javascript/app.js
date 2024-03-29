$(document).ready(
    function triviaGame() {
        var time = 30;
        var intervalId;

        // Timer decrement
        function decrement() {
            time--;
            $("#time-countdown-text").text(time);
            if (time === 0) {
                stop();
            }
        };

        // Run timer
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        };
        run();

        // Timer stop
        function stop() {
            clearInterval(intervalId);
        };
        // hide .question-container and .scoreScreen when game
        $(".question-container").hide(0);
        $(".scoreScreen").hide(0);

        // When click on startButton, go to question page and start timer
        $("#startButton").click(function () {
            // window.location.href = "index.html";
            $(".start-container").hide(200);
            $(".question-container").show(300);

            run();
            console.log(time);
            console.log(intervalId);
        });

        var correctCount = 0;
        var incorrectCount = 0;

        // check for selectedRadioValue to be correct or not
        $("input").on("click", function selectedRadioValue() {
            var radioValue = $(this).attr("value");
            console.log(radioValue);
            // if selected the correct answer correctCount++
            if (radioValue === "correct") {
                correctCount++;
                console.log(correctCount);
            } else {
                incorrectCount++;
            }
        });
         
       

        function gameend() {
            $("#correctCountText").text(correctCount);
            $("#incorrectCountText").text(incorrectCount);
        };

        // when submit button hit, show correctCountText and incorrectCountText
        $("#submitButton").on("click", function (e) {
            e.preventDefault();
            stop();
            gameend();
            // hide form and show score
            $("form").hide(500, gameend());
            $(".scoreScreen").show(600);
        });
        // Need to restrict radio button to be only clicked once.

        // None selected radios are count as incorrectCounts

        // When time = 0, do the samething as #submitButton 
            // function timeUp() {
            //     if (time === 0) {
            //         gameend();
            //         // hide form and show score
            //         $("form").hide(500, gameend());
            //         $(".scoreScreen").show();
            //         console.log("times up");
            //     };
            // };
            // timeUp();


        // Probably a better idea to dynamically generate questions instead of typing them out in html...

    });