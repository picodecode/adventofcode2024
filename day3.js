//      puzzle input === corrupted 
//      multiply some numbers 
//      mul(X,Y)
//      X and Y are 1-3 digit numbers 
//      EXAMPLE: 
//      xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
//      2*4 + 5*5 + 11*8 + 8*5
//      ANSWER: 161

//      PROBLEMS 

//  take in an input, maybe string 
//  find certain cahracters and patterns
//  mul(x, y)
//  the pattern must be, 'mul' then open (1-3 digits, seperated by a comma, then 1-3 more digits and a closed )

//  create a regex? 
//  take that string, turn into an arary and check???? 
//  regex may be best 

let regexChecker1; //regex here

let puzzle = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))'; 

let text = 'How are you doing today?'

const myArray = text.split(" "); 
let word = myArray[1]

console.log(word)
