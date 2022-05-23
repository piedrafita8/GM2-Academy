//EJERCICIO 3 - ES PALINDROMO

export function esPalindromo(string){
    let newString = "";

    newString = string.split("");

    newString = newString.reverse();

    newString = newString.toString().replace(/,/g,"");

    if(string===newString){
        return true;
    }else{
        return false;
    }
}