function suma (){
    var num1,num2,suma1;
    num1=parseInt(document.getElementById("num1").value);
    num2=parseInt(document.getElementById("num2").value);
    suma1=num1+num2;
    document.getElementById("respuesta").innerHTML = suma1;
}

function resta (){
    var num1,num2,resta1;
    num1=parseInt(document.getElementById("num1").value);
    num2=parseInt(document.getElementById("num2").value);
    resta1=num1-num2;
    document.getElementById("respuesta").innerHTML = resta1;
}

function producto (){
    var num1,num2,mult1;
    num1=parseInt(document.getElementById("num1").value);
    num2=parseInt(document.getElementById("num2").value);
    mult1=num1*num2;
    document.getElementById("respuesta").innerHTML = mult1;
}

function cociente (){
    var num1,num2,coc1;
    num1=parseInt(document.getElementById("num1").value);
    num2=parseInt(document.getElementById("num2").value);
    coc1=num1/num2;
    document.getElementById("respuesta").innerHTML = coc1;
}
