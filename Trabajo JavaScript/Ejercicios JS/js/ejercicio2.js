// EJERCICIO 2 - PARIDAD Y PAREJAS

export function hayParOPareja(array){

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