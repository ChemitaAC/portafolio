
    function checar() {
      var fecha1 = document.getElementById("fecha").value;

    var mes1 = new Date(fecha1).getMonth() + 1;
    var imageElement = document.getElementById("imgg");

        if (mes1 == 5) {
            document.getElementById("msg").innerHTML="Felicidades, obtuviste un 2*1";
            imageElement.src = "2por1.jpg";
        } else {
            document.getElementById("msg").innerHTML="No obtuviste un descuento, suerte para la proxima";
            imageElement.src = "";
        }
    }
