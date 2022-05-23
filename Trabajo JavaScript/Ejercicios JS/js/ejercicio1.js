// EJERCICIO 1 - SUMA Y RESTA

export function adicion(array, numero){

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

export function resta(array, numero){

    let arrayToNumber = "";

    for(let element of array){
        arrayToNumber += element.toString();
    }

    arrayToNumber = (Number(arrayToNumber) - numero);

    if(arrayToNumber < 0){

        arrayToNumber = [0];
    }else{

        arrayToNumber = arrayToNumber.toString();
        
        arrayToNumber = arrayToNumber.split("");

        arrayToNumber = arrayToNumber.map(function(element){
            return Number(element);
        })

    }
    console.log(arrayToNumber);
}
