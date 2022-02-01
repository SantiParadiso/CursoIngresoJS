/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

let largoTerreno;
let anchoTerreno;
let radioTerreno;
let metrosCuadrados;
let metrosCuadradosRadial;
//defino las variables afuera de las funciones xq las uso repetidas veces dentro de las distintas funciones

function Rectangulo () 
{
    largoTerreno = parseInt(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseInt(document.getElementById("txtIdAncho").value);
    alert("Para cercar un rectangulo vas a necesitar " + ((largoTerreno+anchoTerreno)*2*3) + " metros de alambre");
}
function Circulo () 
{
    radioTerreno = parseInt(document.getElementById("txtIdRadio").value);
	alert("Para cercar un circulo vas a necesitar " + ((3.1416*radioTerreno)*2*3) + " metros de alambre");
}
function Materiales () 
{
    largoTerreno = parseInt(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseInt(document.getElementById("txtIdAncho").value);
    radioTerreno = parseInt(document.getElementById("txtIdRadio").value);
    metrosCuadrados = largoTerreno * anchoTerreno;
    metrosCuadradosRadial = 3.1416 * radioTerreno**2;
    alert("Para hacer un contrapiso rectangular de ese tamaño, se necesitan " + (metrosCuadrados*2) + " bolsas de cemento y " + (metrosCuadrados*3) + " bolsas de cal.")
    alert("Para hacer un contrapiso circular de ese tamaño, se necesitan " + (metrosCuadradosRadial*2) + " bolsas de cemento y " + (metrosCuadradosRadial*3) + " bolsas de cal.")
}