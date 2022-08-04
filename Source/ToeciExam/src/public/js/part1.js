//render point and result

function startPart1(){
    getQuestionPart1(renderQuestionPart1)
}
startPart1()
//count down
function countDown(h, m, s) {
    // Set the date we're counting down to
    const currentYear = new Date().getFullYear()
    // console.log(currentYear)
    const currentMonth = new Date().getMonth() + 1
    // console.log(currentMonth)
    const currentDay = new Date().getDate()
    // console.log(currentDay)
    const currentHour = new Date().getHours() + h
    // console.log(currentHour)
    const currentMin = new Date().getMinutes() + m
    const currentSec = new Date().getSeconds() + s
    var countDownDate = new Date(`${currentMonth} ${currentDay} ${currentYear} ${currentHour}:${currentMin}:${currentSec}`);

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        //   console.log(distance)

        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("timer").innerHTML = hours + "h "
            + minutes + "m " + seconds + "s "

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            renderPoint()
            renderResult(result)
            document.getElementById("timer").innerHTML = "TIME UP";
            var res = document.querySelector('.col-show-result')
            res.style.display = 'block'

        }
    }, 1000);
    Validator({
        form: '#form-1',
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        rules: [
            Validator.isRequired('input[name="q1"]'),
            Validator.isRequired('input[name="q2"]'),
            Validator.isRequired('input[name="q3"]'),
            Validator.isRequired('input[name="q4"]'),
            Validator.isRequired('input[name="q5"]'),
            Validator.isRequired('input[name="q6"]'),
        ],
        onSubmit: function (data) {
            console.log(data)
            userResult = []
            for (var value of Object.keys(data)) {
                userResult.push(data[value])
            }
            clearInterval(x);
            renderPoint()
            renderResult(result)
            var res = document.querySelector('.col-show-result')
            res.style.display = 'block'

        }
    });

}

countDown(0, 5, 0)