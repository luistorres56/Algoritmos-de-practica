function numPrimos(numero){ 
    for(let i = 2; i < numero; i++){
        if(numero%i===0){
            return false;
        }
    }
    return numero>1;
}

function numN(){
    texto = "";
    let N=parseInt(prompt("ingrese un número:")) 
    for(let x=0;x<=N;x++){
        if(numPrimos(x)){ 
            texto = texto +" "+ x;
        }
    }
    document.getElementById("demo").innerHTML=texto;
}

function sumatoriaN(){
    let N=parseInt(prompt("ingrese un número:")) 
    if(Number.isNaN(N)){
        return;
    }
    if(N == 0){
        return document.getElementById("demo").innerHTML=0;
    }
    var sumatoria = 0;
    for(let i = 0; i<=N;i++){
        sumatoria = Math.pow(i,N) + sumatoria;
    }
    document.getElementById("demo").innerHTML=sumatoria;
}

function fibonacci(){
    let N=parseInt(prompt("ingrese un número:")) 
    console.log(N);
    var arrayFibonacci = [0,1]; 
    if(Number.isNaN(N) || N == 0){
        return;
    }
    if(N == 1){
        texto = "0"
    }else{

        texto = "0 1 ";
    }
    for(i=2; i<=N-1;i++){
        arrayFibonacci.push(arrayFibonacci[i-1]+arrayFibonacci[i-2]);
        texto = texto + arrayFibonacci[i] + " ";
    }
    document.getElementById("demo").innerHTML=texto;
}


