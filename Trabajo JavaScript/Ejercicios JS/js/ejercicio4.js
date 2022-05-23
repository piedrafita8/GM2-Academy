// EJERCICIO 4 - NUMEROS ROMANOS

export function convertirARomano(number){

    const roman = {
        M:  1000,
        CM: 900,
        D:  500,
        CD: 400,
        C:  100,
        XC: 90,
        L:  50,
        XL: 40,
        X:  10,
        IX: 9,
        V:  5,
        IV: 4,
        I:  1,
    };

    let result = "";

    if(number>3999 || number<1){
        return result = "El numero a ingresar debe ser entre 1 y 3999";
    }

    for(let i in roman){
        while(number>=roman[i]){
            result += i;
            number -= roman[i];
        }
    }   

    return result;
}