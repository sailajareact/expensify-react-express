// const add = (a,b)=>{
//     return a+b;
// }

// test('should add 2 numbers', () => {
//     if (add) {
        
//     } else {
        
//     }
// }
// )

const add = (a,b)=>{
    return a+b+1
}

test("add 2 numbers", ()=>{
    const res = add(3,2);
    if(res !== 5){
       throw new Error(`expected 5 , actual is ${res}`)
    }
})

test("add 2 numbers", ()=>{
    expect(add(3,2)).toBe( 6)
}

)