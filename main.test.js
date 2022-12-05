const main = require("./main") ;
const add = main.add ;
const multiply = main.multiply ;
const clone = main.clone ;

// console.log(add(2, 2)) ;

test("2 plus 2 is 4", ()=>{
    expect(
    add(2, 2)
    ).toBe(4) ;
})

test("5 times 5 is 25 ", ()=>{
   expect(
    multiply(5, 5)
    ).toBe(25) ;
})

test("array is the same", ()=>{
    expect(clone([1,2,3])).toEqual([1,2,3])
})
