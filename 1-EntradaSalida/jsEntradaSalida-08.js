/*
Paradiso Santiago
e/s 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	alert("El resto es: " + (parseInt(document.getElementById("txtIdNumeroDividendo").value) % parseInt(document.getElementById("txtIdNumeroDivisor").value)));
}
