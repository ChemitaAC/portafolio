function suma (){
    var num1,num2,suma1;
    num1=parseInt(prompt("Escribe un numero","numero 1"));
    num2=parseInt(prompt("Escribe otro numero","numero 2"));
    suma1=num1+num2;
    alert(" la suma es "+suma1);
}

function resta(){
    var num1, num2, resta1;
    num1=parseInt(prompt("Escribe un numero","numero 1"));
    num2=parseInt(prompt("Escribe otro numero","numero 2"));
    resta1=num1-num2;
    alert(" la resta es "+resta1);
}

function producto(){
    var num1, num2, prod1;
    num1=parseInt(prompt("Escribe un numero","numero 1"));
    num2=parseInt(prompt("Escribe otro numero","numero 2"));
    prod1=num1*num2;
    alert(" el produto es "+prod1);
}

function cociente(){
    var num1, num2, coc1;
    num1=parseInt(prompt("Escribe un numero","numero 1"));
    num2=parseInt(prompt("Escribe otro numero","numero 2"));
    coc1=num1/num2;
    alert(" el cociente es "+coc1);
}

function negopos(){
    var num1;
    num1=parseInt(prompt("Escribe un numero","numero"));
    if(num1<0)
    alert(" el numero es negativo ");
    else
        if(num1>0)
        alert(" el numero es positivo ");
        else
            if(num=0)
            alert(" el numero es cero ");

}