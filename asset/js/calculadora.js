var num1 = 8
var num2 = 2

function multi(num1,num2){

    let multi = num1*num2;
    document.getElementById("multi").textContent = multi;
    return multi;
    
}

multi(num1,num2);


function soma(num1,num2){

    let soma = num1+num2;
    document.getElementById("soma").textContent = soma;
    return soma;
    
}

soma(num1,num2);


function div(num1,num2){
    let div = num1/num2;
    document.getElementById("div").textContent = div;
    return div;
}

div(num1,num2);


function sub(num1,num2){
    let sub=num1-num2;
    document.getElementById("sub").textContent = sub;
    return sub;
}

sub(num1,num2);