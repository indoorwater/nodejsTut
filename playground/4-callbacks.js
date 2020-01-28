// asynchronous callback as it's nodejs code
setTimeout(() =>{
    console.log("two seconds are up")
}, 2000)


// synchronous callback as it's standard java code
const names = ['andrew', 'john', 'eric']
const shortNames = names.filter((name) => {
    return names.length <= 4
})



// custom callback is Asynchronous
const add = (num1, num2, callback) => {
    setTimeout(() =>{
        const data = num1 + num2
        callback(data)
    }, 2000)
    
   
}

add(1,4, (sum) =>{
    console.log(sum)
})
