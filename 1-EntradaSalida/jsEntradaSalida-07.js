/*
Paradiso Santiago
e/s 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	alert("La suma es: " + (parseInt(document.getElementById("txtIdNumeroUno").value)+parseInt(document.getElementById("txtIdNumeroDos").value)));
}

function restar()
{
	alert("La resta es: " + (parseInt(document.getElementById("txtIdNumeroUno").value)-parseInt(document.getElementById("txtIdNumeroDos").value)));
}

function multiplicar()
{ 
	alert("La multiplicación es: " + (parseInt(document.getElementById("txtIdNumeroUno").value)*parseInt(document.getElementById("txtIdNumeroDos").value)));
}

function dividir()
{
	alert("La división es: " + (parseInt(document.getElementById("txtIdNumeroUno").value)/parseInt(document.getElementById("txtIdNumeroDos").value)));
}

