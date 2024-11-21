//votre code ici

export default printNumbers

function printNumbers(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr.join(' ')
}