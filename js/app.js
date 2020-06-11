//EuWuents: 
document.querySelectorAll('#gamePiece').forEach(element => {
    element.addEventListener('click', ()=> {
        //go win
        //go loss
        console.log(element.className)
    })
}); 

document.getElementById("start").addEventListener("click", ()=> {
    //go game populate
    console.log('hi')
    renderGrid();


}
)

const bombNum = {
    easy : 10,
    easyP : 9,
}

let gameMatrix = [];

function renderGrid(){
    let count = 0;
    while(count < 9){
        gameMatrix.push(new Array(9))
        count++
    }
  console.log(gameMatrix)
  populateBoard();
}


function populateBoard(){
    let bombs = 0
    const rowLength = bombNum.easyP
    function random(rowLength){
         return Math.floor(Math.random() * Math.floor(rowLength))
    } 
    function populateBombs(){
        let x = random(rowLength)
        let y = random(rowLength)
    
        if(gameMatrix[x][y] === undefined) {
            gameMatrix[x][y] = "B"

        }
        console.log(gameMatrix)
    
    }
    
    while(bombs < 10){
        populateBombs();
        bombs++
        console.log(gameMatrix)
        console.log(bombs)
     
    }
    
}
function clearBoard(){

}

function showAllBombs(){
//all rendered bombs display
}

function checkLoss(){
    //if bomb click, bomb style clicked to red => show all bombs
    //loss message

}
function checkNull(){
// check null square clicked and display all conected null squares and numbers
}
function displayNumber(){

}

function checkWin(){
    //if boxes left === bombs => displayWin message
    //if boxes clicked === null => checkNull
    //if boxes clicked === number => displayNumber

}
//populate grid
//assign event listeners to divs