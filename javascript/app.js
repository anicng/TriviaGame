$(document).ready(
    function triviaGame() {
        var number = 3;
        var intervalId;

        // Timer decrement
        function decrement() {
            number--;
            $("#time-countdown-text").text(number);
            if (number === 0) {
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

        // When click on startButton, go to question page and start timer
        $("#startButton").click(function () {
            window.location.href = "index.html";
            run();
            console.log(number);
            console.log(intervalId);
        });

        var correctCount = 0;
        var incorrectCount = 0;


        // function selectedRadioValue() {
        //     var radioValue = $("input").attr("value");
        //     console.log(radioValue);
        //     if (radioValue === "correct") {
        //         correctCount++;
        //         $("correctAnswers").text(correctCount);
        //     }
        // };

        function selectedRadioValue() {
            var radioValue = $("input[type=radio][name=question1]:checked").val();
            console.log(radioValue);
        }

        $("input").on("click", function () {
            selectedRadioValue();
        });


    });