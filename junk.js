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

// if (gameMatrix[row][index] === 0) {
//     document.getElementById(e).innerText = "0"
//     return checkZero(position);
//     function checkZero(position) {
//         // console.log(position)
//         // console.log(index)
//         // console.log(row)
//         debugger
//         if (gameMatrix[row + 1][index + 1] === 0 && row + 1 < 9 && index + 1 < 9) {
//             let newPosition = JSON.stringify([row + 1, index + 1])
//             console.log(gameMatrix[row + 1][index + 1])
//             console.log(position)
//             console.log(gameMatrix[row][index])
//             document.getElementById(newPosition).innerText = gameMatrix[row][index];
//             return checkZero(newPosition)

//         }
//     }

// }

(gameMatrix[position[0]][position[1]] !== undefined && gameMatrix[position[0]][position[1]] === 0)




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

function checkZeroTwo(position){

console.log(position[0] > 0)
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
function checkZeroThree(position){

if(position[0] > 0 && gameMatrix[position[0]][position[1]] === 0) {
    document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
    let newPosition1 = [position[0]-1, position[1]]
    console.log(newPosition1)
    checkZeroThree(newPosition1);
} else if(typeof gameMatrix[position[0]][position[1]] === "number"){
    document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
    return;
} else {
    return
}
}
function checkZeroFour(position){

if(position[0] < 8 && gameMatrix[position[0]][position[1]] === 0) {
    document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
    let newPosition1 = [position[0]+1, position[1]]
    console.log(newPosition1)
    checkZeroFour(newPosition1);
} else if(typeof gameMatrix[position[0]][position[1]] === "number"){
    document.getElementById(`[${position}]`).innerText = gameMatrix[position[0]][position[1]]
    return;
} else {
    return
}
}

if (gameMatrix[row][index] === 0) {
    checkZero(position)
    checkZeroTwo(position)
    checkZeroThree(position)
    checkZeroFour(position)
}
}

// source 
// https://stackoverflow.com/questions/4235426/how-can-i-capture-the-right-click-event-in-javascript