//  contains many reports
//  one report per line 
// report = list of numbers called LEVELS, and seperated by spaces


//  EXAMPLE: 
//  7 6 4 2 1       <-- ARRAYS 
//  1 2 7 8 9
//  9 7 6 2 1
//  1 3 2 4 5
//  8 6 4 4 1
//  1 3 6 7 9
//          ^elements in array

//   safe IF levels are either ALL INCREASING or DECREASING
//   any two adjacent levels differ by at least ONE and at most THREE 


//  every element in the array must be increasing or decreasing concurrently 
//  can only increase by 1, 2, or 3


let array1 = [7, 6, 4, 2, 1]
let testArray = [7, 6]

//const checker1 = (array) => { 


    //on the right track? 
    for (let i = 0; i < testArray.length; i++) { 
        if (testArray[i] === testArray[i] - 1 ) { 
        console.log('decrease')
        } else { 
            console.log('no')
        }
        
            
 }
//}
