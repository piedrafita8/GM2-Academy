import { adicion, resta } from "./ejercicio1.js";
import { hayParOPareja } from "./ejercicio2.js";
import { esPalindromo } from "./ejercicio3.js";
import { convertirARomano } from "./ejercicio4.js";

const formLogic = (event) => {
    event.preventDefault();

    let form = event.target;
    let element = form.elements;
    let infoResult = document.getElementById("resultInfo");

    let input = element['content'].value;
    let excercise = element['excercises'].value;

    switch(excercise) {
        case 'exercise2':
            let miArray = transformInputToNumberArray(input);
            let result = hayParOPareja(miArray);
            if(result === true){
                infoResult.innerHTML = "<p> Hay paridad y pareja </p>";
            }else{
                infoResult.innerHTML = "<p> No hay paridad o no hay pareja </p>";
            }
            break;
        case 'exercise3':
            let result3 = esPalindromo(input);
            if(result3 === true){
                infoResult.innerHTML = "<p> Es palindromo! </p>";
            }else{
                infoResult.innerHTML = "<p> No es palindromo :( </p>";
            }
            break;
        case 'exercise4':
            let intNumber = transformInputToNumber(input);
            let result4 = convertirARomano(intNumber);
            infoResult.innerHTML = "<p>" + result4 + "</p>";
            break;


    }

    form.reset();
}

const opcionCambiada = () => {

    let excercise = element['excercises'].value;

    let infoToUser = document.getElementById("resultInfo");

    if(excercises == exercise2){


    }

}

function transformInputToNumberArray(input){

    const stringArray = input.split(",");

    let numberArray = [];
    
    for (let element of stringArray){
        numberArray.push(Number(element));
    }

    return numberArray;
}

function transformInputToNumber(input){
    let number = Number(input);
    return number;
}




/** Add event listener */
const form = document.getElementById("form");
form.addEventListener('submit', formLogic);

const exerciseList = document.getElementById("excercises");
exerciseList.addEventListener("change", opcionCambiada);