/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Fentígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

let temp;

function FahrenheitCentigrados () 
{
	temp = document.getElementById("txtIdTemperatura").value;
    alert(temp + " Fahrenheit son " + ((temp-32)/1.8) + " Centigrados"); // C = (F-32) / 1.80
}

function CentigradosFahrenheit () 
{
    temp = document.getElementById("txtIdTemperatura").value;
    alert(temp + " Centígrados son " + ((temp*1.8)+32) + " Fahrenheit"); // F = (C * 1.80) + 32
}
