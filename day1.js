/* Maybe the lists are only off by a small amount! To find out, pair up the numbers and measure how far apart they are. 
Pair up the smallest number in the left list with the smallest number in the right list, then the second-smallest 
left number with the second-smallest right number, and so on.

Within each pair, figure out how far apart the two numbers are; you'll need to add up all of those distances. 
For example, if you pair up a 3 from the left list with a 7 from the right list, the distance apart is 4;
 if you pair up a 9 with a 3, the distance apart is 6.

In the example list above, the pairs and distances would be as follows:

The smallest number in the left list is 1, and the smallest number in the right list is 3. 
The distance between them is 2.
The second-smallest number in the left list is 2, and the second-smallest number in the right list is another 3. 
The distance between them is 1.
The third-smallest number in both lists is 3, so the distance between them is 0.
The next numbers to pair up are 3 and 4, a distance of 1.
The fifth-smallest numbers in each list are 3 and 5, a distance of 2.
Finally, the largest number in the left list is 4, while the largest number in the right list is 9; these are a distance 5 apart.
To find the total distance between the left list and the right list, add up the distances between all of the pairs you found. 
In the example above, this is 2 + 1 + 0 + 1 + 2 + 5, a total distance of 11!

Your actual left and right lists contain many location IDs. What is the total distance between your lists? */



// 3   4
// 4   3
// 2   5
// 1   3
// 3   9
// 3   3



// create arrays 
// sort the arrays from smallest to largest 
// get the difference between each element in the same index (position) og both arrays 

//  get the difference from array1[0] and array2[0] 
//  then add the difference 


// let array1 = [3, 4, 2, 1, 3, 3]; 
// let array2 = [4, 3, 5, 3, 9, 3]; 

// //  a function that sorts an array from smallest to largest 
// const sorted = (arr) => { 
//     return arr.sort()
// }
// //  this sorts the array 
// sorted(array1); 
// sorted(array2);
// // logs the new array, because the array has been changed 
// console.log(array1)
// console.log(array2)

// //  this initializes an empty array 

// //  create a for loop to iterate through each array



// //  this needs to be a function 






// const findSum = (arr) => { 
//     function sum (a, b){ 
//         return a + b
//     }
//     let added = arr.reduce(sum)
//     return added
// }







// let distanceDigits = []


// // for (let i =0; i < arrayInput1.length; i++){ 
// //     distanceDigits.push(arrayInput1[i] - arrayInput2[i])
    
// // }








// console.log(distanceDigits)


// console.log(findSum(distanceDigits))


// sorted(arrayInput1)
// sorted(arrayInput2)





  
 //    function to get answer

  const totalDistance = (array1, array2) => {  
    array1.sort(); 
    array2.sort(); 

    let total = 0; 

    for (let i = 0; i < array1.length; i++){ 
        total += Math.abs(array1[i] - array2[i])
    }
     
    return total; 
}

console.log(totalDistance(leftList, rightList))