
const formLogic = (event) => {
    event.preventDefault();

    let form = event.target;
    let element = form.elements;

    let input = element['content'].value;
    let excercise = element['excercises'].value;

    let miArray = transformInputToNumberArray(input);

    switch(excercise) {
        case 'exercise2':
            let result = hayParOPareja(miArray);
            if(result === true){
                console.log("Hay paridad y pareja");
            }else{
                console.log("No hay paridad o no hay pareja");
            }
            break;

    }

    form.reset();
}

function transformInputToNumberArray(input){

    const stringArray = input.split(",");

    numberArray = [];
    
    for (let element of stringArray){
        numberArray.push(Number(element));
    }

    return numberArray;
}




/** Add event listener */
const form = document.getElementById("form");
form.addEventListener('submit', formLogic);













































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

// EJERCICIO 2 - PARIDAD Y PAREJAS

function hayParOPareja(array){

    let peers = [];

    for(let element of array){
        if(element%2==0 && element!=0){
            peers.push(element);
        }
    }

    if(peers.length==0){
        return false;
    }


    let pair = false;

    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            for(let k=0; k<peers.length; k++){
                if(array[i] + array[j] == peers[k]){
                    pair = true;
                }
            }
        }
    }

    if(pair===true){
        return true;
    }else{
        return false; 
    }


}

// EJERCICIO 3 - PALINDROMO

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

// EJERCICIO 4 - NUMEROS ROMANOS

function convertirARomano(number){

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