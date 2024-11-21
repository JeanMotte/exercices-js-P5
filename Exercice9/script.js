// votre code ici

export default checkAge;

function checkAge(age) {
    if (Number(age) < 18) {
        return "Vous êtes mineur.";
    } else if (Number(age) >= 18 && Number(age) < 65) {
        return "Vous êtes majeur.";
    } else if (Number(age) >= 65) {
        return "Vous êtes senior.";
    }
}