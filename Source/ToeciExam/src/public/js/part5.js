function startPart5(){
getQuestionPart5(renderQuestionPart5)
}
startPart5()
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
            Validator.isRequired('input[name="q7"]'),
            Validator.isRequired('input[name="q8"]'),
            Validator.isRequired('input[name="q9"]'),
            Validator.isRequired('input[name="q10"]'),
            Validator.isRequired('input[name="q11"]'),
            Validator.isRequired('input[name="q12"]'),
            Validator.isRequired('input[name="q13"]'),
            Validator.isRequired('input[name="q14"]'),
            Validator.isRequired('input[name="q15"]'),
            Validator.isRequired('input[name="q16"]'),
            Validator.isRequired('input[name="q17"]'),
            Validator.isRequired('input[name="q18"]'),
            Validator.isRequired('input[name="q19"]'),
            Validator.isRequired('input[name="q20"]'),
            Validator.isRequired('input[name="q21"]'),
            Validator.isRequired('input[name="q22"]'),
            Validator.isRequired('input[name="q23"]'),
            Validator.isRequired('input[name="q24"]'),
            Validator.isRequired('input[name="q25"]'),
            Validator.isRequired('input[name="q26"]'),
            Validator.isRequired('input[name="q27"]'),
            Validator.isRequired('input[name="q28"]'),
            Validator.isRequired('input[name="q29"]'),
            Validator.isRequired('input[name="q30"]'),
            Validator.isRequired('input[name="q31"]'),
        ],
        onSubmit: function (data) {
            console.log(data)
            userResult = []
            for (var value of Object.keys(data)) {
                userResult.push(data[value])
            }
            console.log(userResult)
            clearInterval(x);
            renderPoint()
            renderResult(result)
            var res = document.querySelector('.col-show-result')
            res.style.display = 'block'
        }
    });

}
countDown(0, 10, 0)