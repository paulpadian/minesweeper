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
    //go start / reset switch
    // go timer
    //go bomb number
    //go change border on div elements in gameMatrix 

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
        arr.forEach(function(el, index){
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
    }
    
}

function populateNum(){  
    gameMatrix.forEach((element, row) => {
       let below = row-1
       let above = row+1
        element.forEach((square, index) => {
            let previous = [index - 1]
            let next = [index + 1]
            
            if(typeof element[previous] === "number" && square === "B"){
                element[previous] += 1
            }
            if(typeof element[next] === "number" && square === "B"){
                element[next] += 1
            }
            if(below >= 0 && typeof gameMatrix[below][index] === "number" && square === "B"){
                gameMatrix[below][index] += 1
            }   
            if(above <= bombNum.easyR-1 && typeof gameMatrix[above][index] === "number" && square === "B"){
                gameMatrix[above][index] += 1
            }
            if(above <= bombNum.easyR-1 && typeof gameMatrix[above][next] === "number" && square === "B"){
                gameMatrix[above][next] += 1
            }
            if(above <= bombNum.easyR-1 && typeof gameMatrix[above][previous] === "number" && square === "B"){
                gameMatrix[above][previous] += 1
            }
            if(below >= 0 && typeof gameMatrix[below][next] === "number" && square === "B"){
                gameMatrix[below][next] += 1
            }
            if(below >= 0 && typeof gameMatrix[below][previous] === "number" && square === "B"){
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
        if(gameMatrix[row][index] === "B"){
            console.log("you lost");
            //go show all bombs/message
            //
        }
        if(gameMatrix[row][index] === 0) {
            //go show blank square 
            console.log("blank")
        }
        if(gameMatrix[row][index] !== 0 && typeof gameMatrix[row][index] === "number") {
         
            console.log("show the number")
            console.log(`${gameMatrix[row][index]}`)
            console.log(`[${position}]`)
            document.getElementById(e).innerText = gameMatrix[row][index]
            
        }
   

}
//populate grid
//assign event listeners to divs





function clearBoard() {

}

function showAllBombs() {
    //all rendered bombs display
}

function checkLoss() {
    //if bomb click, bomb style clicked to red => show all bombs
    //loss message

}
function checkNull() {
    // check null square clicked and display all conected null squares and numbers
}
function displayNumber() {

}

