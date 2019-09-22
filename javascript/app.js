$(document).ready(
    function triviaGame() {
        var number = 60;
        var intervalId;

        function decrement() {
            number--;
            $("#time-countdown-text").text(number);
            if (number === 0) {
                stop();
            }
        };

        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        };
        run();
        console.log(intervalId);

        function stop() {
            clearInterval(intervalId);
        };

        $("#startButton").click(function () {
            window.location.href = "index.html";
            run();
            console.log(number);
            console.log(intervalId);
        });
    });