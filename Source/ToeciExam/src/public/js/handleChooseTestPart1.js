function chooseTest1() {
    const part1 = document.getElementById("part1")
    const part5 = document.getElementById("part5")
    if(part1){

        console.log(part1)
        part1.onclick = function(){
            console.log(1)
            return 1
        }
    }
    else if(part5)
        {
            part5.onclick = function(){
            console.log(5)
            return 5
        }
    }
}
