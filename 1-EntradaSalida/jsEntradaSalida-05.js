/*
Paradiso Santiago
e/s 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let mostrarNombre;
	let mostrarEdad;
	mostrarNombre = document.getElementById("txtIdNombre").value;
	mostrarEdad = document.getElementById("txtIdEdad").value;
	alert("Usted se llama " + mostrarNombre + " y tiene " + mostrarEdad + " años");
}

