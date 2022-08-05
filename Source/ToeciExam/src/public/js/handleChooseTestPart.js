const { decode } = require("jsonwebtoken")

function chooseTest1() {
    const part1 = document.getElementById("part1")
    const content = document.getElementById("content-part-2")
    if(part1){
        part1.onclick = function() {
            content.style.display = "none"
            renderHeading()
            const part1sApi = "http://localhost:5000/api/v1/getTest/part1"
            // const part5sApi = "http://localhost:5000/api/v1/getTest/part5"
            let numPart = 0
            function getQuestionPart1(callback){
                fetch(part1sApi)
                    .then(function(response) {
                        return response.json()
                    })
                    .then(callback)
            }

            function getTest(part1s) {
                part1s = part1s.data
                var listCodeBlock = document.getElementById('col-box-area-1')
                let temp = part1s[0].numTest
                numPart += 1
                part1s.forEach(function(part1) {
                    if(part1.numTest) {
                        if(part1.numTest !== temp){
                            temp = part1.numTest
                            numPart +=1
                        }
                    }
                })
                renderTest(numPart)
                showPart1()
            }
            function renderHeading(){
                const content =document.getElementById("content-choose-part")
                console.log(content)
                const htmls =`<h1 class="heading-choose-part" id="id-heading-choose-part">Chọn đề: </h1>
                <div class="col-box-part part-lead" id="test">
                </div>`
                content.innerHTML = htmls
            }

            function renderTest(num) {
                const getTest = document.getElementById('test')
                let i = 0
                let htmlss =``
                while(i<num) {
                    htmlss +=`<a href="/test/part1/test${i+1}" class="part-1 choose-part" id="de${i+1}">Đề số ${i+1}</div>`
                    i+=1
                }
                console.log(htmlss)
                getTest.innerHTML = htmlss
            }
            function startPart5(){
                getQuestionPart1(getTest)
            }
            startPart5() 
        }
        return 1
    }
}

function chooseTest5() {
    const part5 = document.getElementById("part5")
    const content = document.getElementById("content-part-2")
    if(part5){
        part5.onclick = function() {
            content.style.display = "none"
            renderHeading()
            // const part1sApi = "http://localhost:5000/api/v1/getTest/part1"
            const part5sApi = "http://localhost:5000/api/v1/getTest/part5"
            let numPart = 0
            function getQuestionPart1(callback){
                fetch(part5sApi)
                    .then(function(response) {
                        return response.json()
                    })
                    .then(callback)
            }
            function getTest(part1s) {
                part1s = part1s.data
                var listCodeBlock = document.getElementById('col-box-area-5')
                let temp = part1s[0].numTest
                numPart += 1
                part1s.forEach(function(part1) {
                    if(part1.numTest) {
                        if(part1.numTest !== temp){
                            temp = part1.numTest
                            numPart +=1
                        }
                    }
                })
                renderTest(numPart)
            }
            function renderHeading(){
                const content =document.getElementById("content-choose-part")
                console.log(content)
                const htmls =`<h1 class="heading-choose-part">Chọn đề: </h1>
                <div class="col-box-part part-lead" id="test">
                </div>`
                content.innerHTML = htmls
            }

            function renderTest(num) {
                const getTest = document.getElementById('test')
                let i = 0
                let htmls =``
                while(i<num) {
                    htmls +=`<a href="/test/part5/test${i+1}" class="part-1 choose-part" id="${i+1}">Đề số ${i+1}</a>`
                    
                    i+=1
                }
                console.log(htmls)
                return getTest.innerHTML = htmls
            }
            function startPart5(){
                getQuestionPart1(getTest)
            }
            startPart5()

            return 5
        }
        
    }
}