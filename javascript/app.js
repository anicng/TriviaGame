$(document).ready(
    function triviaGame() {
        var time = 60;
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

        // When click on startButton, go to question page and start timer
        $("#startButton").click(function () {
            window.location.href = "index.html";
            run();
            console.log(time);
            console.log(intervalId);
        });

        var correctCount = 0;
        var incorrectCount = 0;

        function selectedRadioValue() {
            var radioValue = $("input[type=radio][name=question1]:checked").val();
            console.log(radioValue);
            // if selected the correct answer correctCount++
            if (radioValue === "correct") {
                correctCount++;
                console.log(correctCount);
            }
        }

        $("input").on("click", function () {
            selectedRadioValue();
        });

        $("#submitButton").on("click",function(){
            $("correctCountText").text(correctCount);
            console.log (correctCount);
        })
        // when submit button hit, show correctCountText and incorrectCountText

    });