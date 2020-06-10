
//global var
//current click
// event listeners 
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

}
)


window.gameMatrix = [
[[null],[null],[null],[null],[null],[null],[null],[null],[null]],
[[null],[null],[null],[null],[null],[null],[null],[null],[null]],
[[null],[null],[null],[null],[null],[null],[null],[null],[null]],
[[null],[null],[null],[null],[null],[null],[null],[null],[null]],
[[null],[null],[null],[null],[null],[null],[null],[null],[null]],
[[null],[null],[null],[null],[null],[null],[null],[null],[null]],
[[null],[null],[null],[null],[null],[null],[null],[null],[null]],
[[null],[null],[null],[null],[null],[null],[null],[null],[null]],
[[null],[null],[null],[null],[null],[null],[null],[null],[null]]
];


function renderGrid(){
// dont use until dynamic
}


function populateGrid(){
 let bombs = 10
 let random = Math.random();
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