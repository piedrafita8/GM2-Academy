// EJERCICIO 1 - SUMA Y RESTA

function adicion(array, numero){

    let arrayToNumber = "";

    for(let element of array){
        arrayToNumber += element.toString();
    }

    arrayToNumber = (Number(arrayToNumber) + numero);
    arrayToNumber = arrayToNumber.toString();
    arrayToNumber = arrayToNumber.split("");

    arrayToNumber = arrayToNumber.map(function(element){
        return Number(element);
    })
    
    console.log(arrayToNumber);
    return arrayToNumber;
}

function resta(array, numero){

    let arrayToNumber = "";

    for(let element of array){
        arrayToNumber += element.toString();
    }

    arrayToNumber = (Number(arrayToNumber) - numero);

    if(arrayToNumber < 0){

        arrayToNumber = [0]
    }else{

        arrayToNumber = arrayToNumber.toString();
        
        arrayToNumber = arrayToNumber.split("");

        arrayToNumber = arrayToNumber.map(function(element){
            return Number(element);
        })

    }
    console.log(arrayToNumber);
}

let miArray = [1, 2, 3, 4];

adicion(miArray, 4000);
resta(miArray,4000);

// EJERCICIO 2 - PARIDAD Y PAREJAS

//EJERCICIO 3 - PALINDROMO

function esPalindromo(string){
    newString = "";

    newString = string.split("");

    newString = newString.reverse();

    newString = newString.toString().replace(/,/g,"");

    console.log(string);
    console.log(newString);

    if(string===newString){
        console.log("Es palindromo!");
        return true;
    }else{
        console.log("No es palindromo :(");
        return false;
    }
}

esPalindromo("neuquen");

// EJERCICIO 4 - NUMEROS ROMANOS

