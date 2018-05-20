// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve('this is from promise resolve ') //resolve only have 1 argument
        // we can only call resolve only one time
        resolve({
            name: 'test',
            age: 23
        })
        // reject('this s from reject')
    }, 3000)
})

console.log('before')
promise.then((data)=>{
    console.log(data);
    return data
}).then((str)=>{
    console.log('is this run!', str)
})
.catch((error)=>{
    console.log('error: ',error )
})
console.log('after')
