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