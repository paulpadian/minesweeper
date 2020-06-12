//EuWuents: 
document.querySelectorAll('#gamePiece').forEach(element => {
    element.addEventListener('click', () => {
        //go win
        //go loss
        console.log(element.className)
    })
});

document.getElementById("start").addEventListener("click", () => {
    //go game populate
    console.log('hi')
    renderGrid();
}
)

const bombNum = {
    easy: 10,
    easyP: 9,
    medium: 0
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
    const rowLength = bombNum.easyP
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
            console.log(bombLocations)
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
        element.forEach((square, index) => {
            let previous = [index - 1]
            let next = [index + 1]
            let below = [row -1]
            let above = [row + 1]
            if(typeof element[previous] === "number" && square === "B"){
                element[previous] += 1
            }
            if(typeof element[next] === "number" && square === "B"){
                element[next] += 1
            }
            if(typeof element[){

            }
        });
    });
    console.log(gameMatrix);
}




//im so sorry you're about to read this function
// function populateNum() {
//     bombLocations.forEach(bomb => {
//         if (bomb[1] < 8 && bomb[0] < 8 && !gameMatrix[bomb[0] + 1][bomb[1] + 1]) {
//             gameMatrix[bomb[0] + 1][bomb[1] + 1] = 1
//         } else if(!!gameMatrix[bomb[0] + 1][bomb[1] + 1] && typeof(gameMatrix[bomb[0] + 1][bomb[1] + 1]) === Number) {
//             console.log('hi')
//             gameMatrix[bomb[0] + 1][bomb[1] + 1]++
//         };
//         if (bomb[1] < 8 && !gameMatrix[bomb[0]][bomb[1] + 1]) {
//             gameMatrix[bomb[0]][bomb[1] + 1] = 1
//         } else if(!!gameMatrix[bomb[0]][bomb[1] + 1] && typeof(gameMatrix[bomb[0]][bomb[1] + 1]) === Number) {
//             console.log('hi')
//             gameMatrix[bomb[0] + 1][bomb[1] + 1]++
//         };
//         if (bomb[1] <= 8 && bomb[0] > 0 && !gameMatrix[bomb[0] - 1][bomb[1] + 1]) {
//             gameMatrix[bomb[0] - 1][bomb[1] + 1] = 1
//         } else if(!!gameMatrix[bomb[0] - 1][bomb[1] + 1] && gameMatrix[bomb [0] - 1][bomb[0 + 1]] !== "B") {
//             console.log('hi')
//             gameMatrix[bomb[0] - 1][bomb[1] + 1]++
//         }////////right?
//         if (bomb[1] <= 8 && bomb[0] > 0 && !gameMatrix[bomb[0] - 1][bomb[1] - 1]) {
//             gameMatrix[bomb[0] - 1][bomb[1] - 1] = 1
//         } else if(typeof(gameMatrix[bomb[0] - 1][bomb[1] - 1]) === Number) {
//             console.log('hi')
//             gameMatrix[bomb[0] - 1][bomb[1] - 1]++
//         };


//         if (bomb[1] < 0 && !gameMatrix[bomb[0]][bomb[1] - 1]) {
//             gameMatrix[bomb[0]][bomb[1] - 1] = 1
//         } else if(typeof(gameMatrix[bomb[0]][bomb[1] - 1]) === Number) {
//             gameMatrix[bomb[0]][bomb[1] - 1]++
//         };


//         if (bomb[1] <= 8 && bomb[0] > 0 && !gameMatrix[bomb[0] + 1][bomb[1] - 1]) {
//             gameMatrix[bomb[0] + 1][bomb[1] - 1] = 1
//         } else if(typeof(gameMatrix[bomb[0] + 1][bomb[1] - 1]) === Number) {
//             gameMatrix[bomb[0] + 1][bomb[1] - 1]++
//         }//left
     
//         if (bomb[1] < 0 && !gameMatrix[bomb[0]-1][bomb[1]]) {
//             gameMatrix[bomb[0] + 1][bomb[1]] = 1
//         } else if(typeof(gameMatrix[bomb[0] + 1][bomb[1]]) === Number) {
//             gameMatrix[bomb[0] + 1][bomb[1] + 1]++
//         };

//         if (bomb[1] <= 8 && bomb[0] > 0 && !gameMatrix[bomb[0] + 1][bomb[1]]) {
//             gameMatrix[bomb[0] - 1][bomb[1] + 1] = 1
//         } else if(typeof(gameMatrix[bomb[0] + 1][bomb[1] - 1]) === Number) {
//             gameMatrix[bomb[0] - 1][bomb[1] + 1]++
//         }//top bot
//     })




// }

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

function checkWin() {
    //if boxes left === bombs => displayWin message
    //if boxes clicked === null => checkNull
    //if boxes clicked === number => displayNumber

}
//populate grid
//assign event listeners to divs