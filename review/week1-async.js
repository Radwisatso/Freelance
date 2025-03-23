// Callback

function addSync(num1, num2) {
    let result = num1 + num2
    return result
}

function addAsync(num1, num2, callback) {
    let result // sync
    setTimeout(() => { // Async - non blocking
        result = num1 + num2
        callback(result)
    }, 2000)
}
console.log('start')
addAsync(1, 2, (hasil) => {
    console.log(hasil)
    addAsync(hasil, 5, (hasil1) => {
        console.log(hasil1)
    })
})
console.log('end')