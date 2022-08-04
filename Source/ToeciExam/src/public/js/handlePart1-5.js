
let result = []
let userResult = []
let point = 0
const part1sApi = "http://localhost:5000/api/v1/getTest/part1/test1"
const part5sApi = "http://localhost:5000/api/v1/getTest/part5/test1"

function getQuestionPart1(callback){
    fetch(part1sApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}
function getQuestionPart5(callback){
    fetch(part5sApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}

function renderQuestionPart1(part1s) {
    part1s = part1s.data
    var listCodeBlock = document.getElementById('col-box-area-1')
    part1s.forEach(function(part1) {
        result.push(part1.Answer)
    })
    console.log(result)
    var htmls = part1s.map(function(part1) {
        return `
                <div data-part="${part1.num}" class="question fullest-page-1" data-page="${part1.num}">
                    <p class="part-lead">Look at the picture and listen to the sentences. Choose the
                                sentence that best describes the picture:</p>
                            <div class="myquestion-area form-group">
                                <p>
                                    <b>Question ${part1.Q}:</b>
                                </p>
                                <figure class="picture-area">
                                    <img src="${part1.imageLink}"
                                        alt="q1-part1s" class="image-ques">
                                </figure>
                                <div class="audio-area">
                                    <audio
                                        src="${part1.audioLink}"
                                        controls="play"></audio>
                                </div>
                                <div class="answer">
                                    <label for="a${part1.Q}" class="form-label answer-number ">
                                        <input name="q${part1.Q}" id="a${part1.Q}" type="radio" value="A" class="form-control">
                                        <strong>A</strong>
                                    </label>
                                    <label for="b${part1.Q}" class="form-label answer-number">
                                        <input name="q${part1.Q}" id="b${part1.Q}" type="radio" value="B" class="form-control">
                                        <strong>B</strong>
                                    </label>
                                    <label for="c${part1.Q}" class="form-label answer-number">
                                        <input name="q${part1.Q}" id="c${part1.Q}" type="radio" value="C" class="form-control">
                                        <strong>C</strong>
                                    </label>
                                    <label for="d${part1.Q}" class="form-label answer-number">
                                        <input name="q${part1.Q}" id="d${part1.Q}" type="radio" value="D" class="form-control">
                                        <strong>D</strong>
                                    </label>
                                </div>
                                <span class="form-message"></span>
                                </div>
                        </div>`
    })
    listCodeBlock.innerHTML = htmls.join('')
}
function renderQuestionPart5(part5s) {
    part5s = part5s.data
    var listCodeBlock = document.getElementById('col-box-area-5')
    part5s.forEach(function(part5) {
        result.push(part5.answer)
    })
    console.log(result)
    var htmls = part5s.map(function(part5) {
        return `
            <div data-part="${part5.numTest}" class="question fullest-page-1" data-page="${part5.numTest}">
            <p class="part-lead">Choose the word that best completes the sentence:</p>
            <div class="myquestion-area form-group">
                <p>
                    <b>Question ${part5.numQ}:</b>
                </p>
                <div class="question-text">
                    <p>${part5.Q}</p>
                </div>
                <div class="answer">
                    <label for="a${part5.numQ}" class="form-label answer-number ">
                        <input name="q${part5.numQ}" id="a${part5.numQ}" type="radio" value="A" class="form-control">
                        <strong>A</strong>
                        <span>${part5.A}</span>
                    </label>
                    <label for="b${part5.numQ}" class="form-label answer-number">
                        <input name="q${part5.numQ}" id="b${part5.numQ}" type="radio" value="B" class="form-control">
                        <strong>B</strong>
                        <span>${part5.B}</span>
                    </label>
                    <label for="c${part5.numQ}" class="form-label answer-number">
                        <input name="q${part5.numQ}" id="c${part5.numQ}" type="radio" value="C" class="form-control">
                        <strong>C</strong>
                        <span>${part5.C}</span>
                    </label>
                    <label for="d${part5.numQ}" class="form-label answer-number">
                        <input name="q${part5.numQ}" id="d${part5.numQ}" type="radio" value="D" class="form-control">
                        <strong>D</strong>
                        <span>${part5.D}</span>
                    </label>
                </div>
                <span class="form-message"></span>
            </div>
        </div>`
    })
    listCodeBlock.innerHTML = htmls.join('')
}

//show point and result
function renderPoint() {
    point = 0
    for (let i in result){
        if(result[i] == userResult[i]){
            point += 5
        }
    }
    const showPoint = document.getElementById("show-point")
    const htmls = `<h2 class="heading-point">Điểm số của bạn là:</h2>
                <span class="show-point">${point}</span>`
    showPoint.innerHTML = htmls
}

function renderResult(result){
    const showRes = document.getElementById("show-result")
    console.log(result)
    var htmls = result.map(function(res,index) {
        return `<li class="answer-item">${index+1}. ${res}</li>`
    })
    showRes.innerHTML = htmls.join('')
}





