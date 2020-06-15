//EuWuents: 
document.querySelectorAll('.gamePiece').forEach(element => {
    element.addEventListener('click', () => {
        //go win
        //go loss
        checkWinLoss(element.id)

    })
});

document.getElementById("start").addEventListener("click", () => {
    //go game populate - done
    //go start / reset switch- done
    // go timer 
    //go bomb number
    //go change border on div elements in gameMatrix 
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("reset").style.visibility = "visible";
    document.querySelectorAll(".gamePiece").forEach(element => {
        element.style.visibility = "visible";
    });
    renderGrid();

}
)

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

    console.log(gameMatrix)
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
            gameMatrix[x][y] = "B"
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

            if (typeof element[previous] === "number" && square === "B") {
                element[previous] += 1
            }
            if (typeof element[next] === "number" && square === "B") {
                element[next] += 1
            }
            if (below >= 0 && typeof gameMatrix[below][index] === "number" && square === "B") {
                gameMatrix[below][index] += 1
            }
            if (above <= bombNum.easyR - 1 && typeof gameMatrix[above][index] === "number" && square === "B") {
                gameMatrix[above][index] += 1
            }
            if (above <= bombNum.easyR - 1 && typeof gameMatrix[above][next] === "number" && square === "B") {
                gameMatrix[above][next] += 1
            }
            if (above <= bombNum.easyR - 1 && typeof gameMatrix[above][previous] === "number" && square === "B") {
                gameMatrix[above][previous] += 1
            }
            if (below >= 0 && typeof gameMatrix[below][next] === "number" && square === "B") {
                gameMatrix[below][next] += 1
            }
            if (below >= 0 && typeof gameMatrix[below][previous] === "number" && square === "B") {
                gameMatrix[below][previous] += 1
            }
        });

    });

    console.log(gameMatrix)
}

boxesDisplayed = []

function checkWinLoss(e) {
    let position = JSON.parse(e)
    let row = position[0]
    let index = position[1]
    if (gameMatrix[row][index] === "B") {
        console.log("you lost");
        bombLocations.forEach((bomb, index) => {
            let bombLocation = JSON.stringify(bomb)
            document.getElementById(bombLocation).innerText = "B"
            // SHOW LOSS
        })
    }
    // if its a number other than zero
    if (gameMatrix[row][index] !== 0 && typeof gameMatrix[row][index] === "number") {

        console.log("show the number")
        console.log(`${gameMatrix[row][index]}`)
        console.log(`[${position}]`)
        document.getElementById(e).innerText = gameMatrix[row][index]

    } // ...and then: 

    //no bomb and nothing around it
    let gameZeros = []
    function checkZero(position) {
    //diag right
        if (position[0] < 8 && position[1] < 9 && gameMatrix[position[0]][position[1]] === 0) {
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            let newPosition1 = Array.from(position).map(el => el + 1)
            
            console.log(newPosition1)
            return checkZero(newPosition1)
        } else if(typeof gameMatrix[position[0]][position[1]] === "number"){
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            return;
        } else {
            return
        } 
    }
    //diag left
    function checkZeroTwo(position){
     
        if(position[0] > 0 && gameMatrix[position[0]][position[1]] === 0) {
            document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
            let newPosition1 = Array.from(position).map(el => el -1)
            
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
            console.log(newPosition1)
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
            console.log(newPosition1)
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
        
        if(position[0] < 8 && gameMatrix[position[0]][position[1]] === 0){
            console.log("hi")
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

    console.log('here', position, gameMatrix[position[0]][position[1]])
    if (gameMatrix[row][index] === 0) {
        checkZero(position)
        checkZeroTwo(position)
        checkZeroThree(position)
        checkZeroFour(position)
        checkZeroFive(position)
        console.log(gameZeros)
    }
}

//populate grid
//assign event listeners to divs



document.getElementById("reset").addEventListener("click", () =>{
    console.log("hi")
    gameMatrix.forEach((element, row) => {
        element.forEach((square, index) => {
            
            document.querySelectorAll(".gamePiece").forEach(element => {
                element.innerText = "";
            });
        })
    })
    gameMatrix = []
    bombLocations = []
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("reset").style.visibility = "hidden";
    console.log(gameMatrix)

} )

function timer(){
    var sec = 00;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function displayNumber() {

}

