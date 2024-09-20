function Estacionamento(){

    var Nome = document.getElementById("nome").value;
    var Placa = document.getElementById("placa").value;
    var Carro = document.getElementById("carro").value;
    var Diarias = document.getElementById("diarias").value;
    var Valor = document.getElementById("valor").value;

    var Bruto = parseFloat(Valor)*parseInt(dias);
    if(Bruto >150){
        var total = Bruto - (Bruto * 0.10);
    }
    else{
        var total = Bruto;
    }

    Document.getElementById()
}