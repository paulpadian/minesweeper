 document.querySelectorAll('.gamePiece').forEach(element => {
    element.addEventListener('click', () => {
        checkWinLoss(element.id)
        checkWin();
        changeColor();
    })
});

document.getElementById("start").addEventListener("click", () => {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("reset").style.visibility = "visible";
    document.getElementById("bombDisplay").style.visibility = "visible"
    document.querySelectorAll(".gamePiece").forEach(element => {
        element.style.visibility = "visible";
        element.style.pointerEvents = "auto";
    });
    document.getElementById("timer").style.visibility = "visible";
    renderGrid();
    timer();
})

const bombNum = {
    easy: 10,
    easyR: 9,
    medium: 0,
    mediumR: 0
}

let gameMatrix = [];

function renderGrid() {
    let count = 0;
    while (count < 9) {
        var arr = Array.apply(null, Array(9))
        arr.forEach(function (el, index) {
            arr[index] = 0;
        })
        gameMatrix.push(arr)
        count++;
    }
    populateBoardBomb();
}

let bombLocations = []

function populateBoardBomb() {

    let bombs = 0
    const rowLength = bombNum.easyR
    function random(rowLength) {
        return Math.floor(Math.random() * Math.floor(rowLength))
    }
    function populateBombs() {
        let x = random(rowLength)
        let y = random(rowLength)

        if (gameMatrix[x][y] === 0) {
            bombs++
            gameMatrix[x][y] = "X"
            bombLocations.push([x, y])

        }

    }
    while (bombs < 10) {
        populateBombs();

    }
    if (bombLocations.length == 10) {
        populateNum();
        document.getElementById("bombDisplay").innerText = bombLocations.length;
    }
    
}

function populateNum() {
    gameMatrix.forEach((element, row) => {
        let below = row - 1
        let above = row + 1
        element.forEach((square, index) => {
            let previous = [index - 1]
            let next = [index + 1]

            if (typeof element[previous] === "number" && square === "X") {
                element[previous] += 1
            }
            if (typeof element[next] === "number" && square === "X") {
                element[next] += 1
            }
            if (below >= 0 && typeof gameMatrix[below][index] === "number" && square === "X") {
                gameMatrix[below][index] += 1
            }
            if (above <= bombNum.easyR - 1 && typeof gameMatrix[above][index] === "number" && square === "X") {
                gameMatrix[above][index] += 1
            }
            if (above <= bombNum.easyR - 1 && typeof gameMatrix[above][next] === "number" && square === "X") {
                gameMatrix[above][next] += 1
            }
            if (above <= bombNum.easyR - 1 && typeof gameMatrix[above][previous] === "number" && square === "X") {
                gameMatrix[above][previous] += 1
            }
            if (below >= 0 && typeof gameMatrix[below][next] === "number" && square === "X") {
                gameMatrix[below][next] += 1
            }
            if (below >= 0 && typeof gameMatrix[below][previous] === "number" && square === "X") {
                gameMatrix[below][previous] += 1
            }
        });

    });
}

boxesDisplayed = []

function checkWinLoss(e) {
    let position = JSON.parse(e)
    let row = position[0]
    let index = position[1]
    if (gameMatrix[row][index] === "X") {
        document.getElementById("lossDisplay").innerText = "You Lost"
        bombLocations.forEach((bomb, index) => {
            let bombLocation = JSON.stringify(bomb)
            document.getElementById(bombLocation).innerText = "X"
            // SHOW LOSS
            
        })
        document.querySelectorAll(".gamePiece").forEach(element => { 
            element.style.pointerEvents = "none";
        });
        stopTimer();
        return
    
    }
    // if its a number other than zero
    if (gameMatrix[row][index] !== 0 && typeof gameMatrix[row][index] === "number") {
        document.getElementById(e).innerText = gameMatrix[row][index]

    } // ...and then: 

    //no bomb and nothing around it
    let gameZeros = []
    function checkZeroOne(position) {
    //diag right
        if (position[0] < 8 && position[1] < 8 && gameMatrix[position[0]][position[1]] === 0) {
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            let newPosition1 = Array.from(position).map(el => el + 1)
            gameZeros.push(newPosition1)
            return checkZeroOne(newPosition1)
        } else if(typeof gameMatrix[position[0]][position[1]] === "number"){
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            return;
        } else {
            return
        } 
    }
    //diag left
    function checkZeroTwo(position){
     
        if(position[0] > 0 && position[1] > 0 && gameMatrix[position[0]][position[1]] === 0) {
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            let newPosition1 = Array.from(position).map(el => el -1)
            gameZeros.push(newPosition1)
            return checkZeroTwo(newPosition1);
        } else if(typeof gameMatrix[position[0]][position[1]] === "number"){
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            return;
        } else {
            return
        }
    }
    //up
    function checkZeroThree(position){
    
        if(position[0] > 0 && gameMatrix[position[0]][position[1]] === 0) {
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            let newPosition1 = [position[0]-1, position[1]]
            gameZeros.push(newPosition1)
            return checkZeroThree(newPosition1);
        } else if(typeof gameMatrix[position[0]][position[1]] === "number"){
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            return;
        } else {
            return
        }
    }
    //down
    function checkZeroFour(position){
      
        if(position[0] < 8 && gameMatrix[position[0]][position[1]] === 0) {
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            let newPosition1 = [position[0]+1, position[1]]
            gameZeros.push(newPosition1)
            return checkZeroFour(newPosition1);            
        } else if(typeof gameMatrix[position[0]][position[1]] === "number"){
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            return;
        } else {
            return
        }
    }
    //horizontal R
    function checkZeroFive(position){
        
        if(position[1] <= 8 && gameMatrix[position[0]][position[1]] === 0){
          
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            let newPosition1 = [position[0], position[1]+1]
            gameZeros.push(newPosition1)
            return checkZeroFive(newPosition1);
           
        } else if(typeof gameMatrix[position[0]][position[1]] === "number"){
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            return;
        } else {
            return;
        }
    }
    function checkZeroSix(position){
      
        if(position[1] > 0 && gameMatrix[position[0]][position[1]] === 0){
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            let newPosition1 = [position[0], position[1]-1]
            gameZeros.push(newPosition1)
            return checkZeroSix(newPosition1);
        } else if(typeof gameMatrix[position[0]][position[1]] === "number"){
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            return;
        } else {
            return;
        }
    }
    function checkZeroSeven(position){
        if(position[1] > 0 && position[0] < 8 && gameMatrix[position[0]][position[1]] === 0){
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            let newPosition1 = [position[0]+1, position[1]-1]
            gameZeros.push(newPosition1)
            return checkZeroSix(newPosition1);
        } else if(typeof gameMatrix[position[0]][position[1]] === "number"){
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            return;
        } else {
            return;
        }
    }
    function checkZeroEight(position){
        if(position[0] > 0 && position[1] < 8 && gameMatrix[position[0]][position[1]] === 0){
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            let newPosition1 = [position[0]-1, position[1]+1]
            gameZeros.push(newPosition1)
            return checkZeroSix(newPosition1);
           
        } else if(typeof gameMatrix[position[0]][position[1]] === "number"){
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            return;
        } else {
            return;
        }
    }
    if (gameMatrix[row][index] === 0) {
        checkZeroOne(position)
        checkZeroTwo(position)
        checkZeroThree(position)
        checkZeroFour(position)
        checkZeroFive(position)
        checkZeroSix(position)
        checkZeroSeven(position)
        checkZeroEight(position)
        gameZeros.forEach((zero, location) => {
            if(zero[0] >= 0 && zero[0] < 9 && zero[1] >= 0 && zero[1] < 9){
                checkZeroOne(zero)
                checkZeroTwo(zero)
                checkZeroThree(zero)
                checkZeroFour(zero)
                checkZeroFive(zero)
                checkZeroSix(zero)
                checkZeroSeven(zero)
                checkZeroEight(zero)
            }
        });
        gameZeros.forEach((zero, location) => {
            if(zero[0] > -1 && zero[0] < 9 && zero[1] > -1 && zero[1] < 9){
                checkZeroOne(zero)
                checkZeroTwo(zero)
                checkZeroThree(zero)
                checkZeroFour(zero)
                checkZeroFive(zero)
                checkZeroSix(zero)
                checkZeroSeven(zero)
                checkZeroEight(zero)
            }
        });
    }
}

document.getElementById("reset").addEventListener("click", () =>{
    gameMatrix.forEach((element, row) => {
        element.forEach((square, index) => {
            document.querySelectorAll(".gamePiece").forEach(element => {
                element.innerText = "";
            });
        })
    })
    gameMatrix = []
    bombLocations = []
    document.getElementById("lossDisplay").innerText = ""
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("reset").style.visibility = "hidden";
    stopTimer();
    document.getElementById("bombDisplay").style.visibility = "hidden"
    document.querySelectorAll(".gamePiece").forEach(element => {
       element.style.visibility = "hidden";
    });
  
} );

var sec = 00;
var min = 00;
function timer(){
    var timer = setInterval(function(){
        document.getElementById('timer').innerText = `${min}: ${sec}`;
        sec++;
        if (sec === 60) {
            sec = 00;
            min++
        }
    }, 1000);
}

function stopTimer(){
    document.getElementById("timer").style.visibility = "hidden";
    sec = 00;
    min = 00;
}

function checkWin(e) {
    let count = 0
    document.querySelectorAll(".gamePiece").forEach(element => {
        if(!!element.innerText) {
            count++
        }    

    });
    if(count === gameMatrix.flat().length-bombNum.easy){
        document.getElementById("lossDisplay").innerText = "YOU WON!"
        document.querySelectorAll(".gamePiece").forEach(element => {
            element.style.pointerEvents = "none";
        });
    }
}

function changeColor(){
    document.querySelectorAll(".gamePiece").forEach(element => {
        if(element.innerText === "0"){
            element.style.color = "white"
        }
        if(element.innerText === "1"){
            element.style.color = "blue"
        }
        if(element.innerText === "2"){
            element.style.color = "Green"
        }
        if(element.innerText === "3"){
            element.style.color = "red"
        }
        if(element.innerText === "4"){
            element.style.color = "purple"
        }
        if(element.innerText === "5"){
            element.style.color = "maroon"
        }
        if(element.innerText === "6"){
            element.style.color = "turquoise"
        }
        if(element.innerText === "7"){
            element.style.color = "black"
        }
        if(element.innerText === "8"){
            element.style.color = "grey"
        }
        if(element.innerText === "X"){

            element.style.color = "Black"
        }   
     });
}

document.querySelectorAll('.gamePiece').forEach(element => {
    element.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    element.innerText = "⛳"
    return false;
    }, false);
});