/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

let precioUno;
let precioDos;
let precioTres;
// las variables las asigno afuera para que funcione todo en el mismo scope

function asignarValor()
{
    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value)
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value)
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value)
} // como uso las 3 variables en todas las funciones, hice esta funcion para no llenar todo de lineas

function Sumar () 
{
    asignarValor()
    alert("La suma de los productos es: " + (precioUno+precioDos+precioTres))
}
function Promedio () 
{
    asignarValor()
	alert("El promedio de los productos es: " + ((precioUno+precioDos+precioTres)/3))
}
function PrecioFinal () 
{
    asignarValor() // y la funcion corre en todas las funciones para que cambie si se actualizan los numeros entre que se corre una y la otra
	alert("El total mas IVA de los productos es: " + ((precioUno+precioDos+precioTres)*1.21))
}