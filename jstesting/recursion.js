// function collatz(n) {
    
//     if (n === 1) {
//         return 0;
//     }

//      if (n % 2 === 0) {
//         return 1 + collatz(n / 2);
//     }
//     else {
//         return 1 + collatz((3 * n) + 1);
//     }
// }

// console.log(collatz(3))

// ----------------------------------------------

// 5 + 4 + 3 + 2 + 1 

function addPrevious(number) {
    if (number > 100) return 1;         // base case
    return number + addPrevious(number * 5 - 3);        // recursive case
}
//                      6
//                                      
//                                                          

console.log(addPrevious(5));


















//                         SYNTAX
//        /* --------------------------------------- */

// function recursive() {

//         if ( /* condition */ ) { // base case
//             return answer;
//         }
//         else { // recursive case
//            /* invoke recursive() function with a different input */
//         }

// }
