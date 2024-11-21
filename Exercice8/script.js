//Votre code ici

 export default add;

 function add(a, b) {
    if (
        (typeof a === 'number' && !isNaN(a)) &&
        (typeof b === 'number' && !isNaN(b))
    ) {
        return a + b;
    } else {
        throw new Error("Both a and b must be numbers (int or float).");
    }
}
