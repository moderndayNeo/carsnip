
// function loop(array) {

//     while(array.length < 10) {
//         array.push(1)
//     }

//     return array;
// }

// console.log(loop([1, 1]))

// ----------------------------------------

// function loop(array) {

//     for (let i = array.length; array.length < 10; i++) {
//         array.push(1)
//     }

//     return array;
// }

// console.log(loop([1, 1]))

// -------------------------------------------














function addPrevious(number) {
    for(let i = number - 1; i > 0; i--) {
        number += i;
    } return number;
}
//
//
//
//
let result = addPrevious(3)
console.log(result)





