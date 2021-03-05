/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo ()
{

let largo;
let ancho;
let perimetro;
let alambreAComprar;

largo = txtIdLargo.value;
largo = parseInt (largo);

ancho = txtIdAncho.value;
ancho = parseInt (ancho);

perimetro = largo + ancho + largo + ancho;

alambreAComprar = perimetro * 3;

alert ("Se debe comprar: "+alambreAComprar+" hilos de alambre");




}

function Circulo () 
{

let radio;
let perimetroCirculo;
let PI = 3.14;
let alambreAComprar;

radio = txtIdRadio.value;
radio = parseInt(radio);

/* 
formula area de una circunferencia teniendo como dato el radio (el radio es una linea que une del centro a cualquier parte de la circunferencia)
" (2*3.14) * radio " 

fromulta de area de una circunferencia teniendo como dato el diametro (osea la linea que divide a la mitad )
 "PI 3.14 * DIAMETRO "                                                                                           */

perimetroCirculo = (2*PI)* radio;

alambreAComprar = perimetroCirculo * 3;

alert ("Se debe comprar: "+alambreAComprar+" hilos de alambre");

}
	

function Materiales ()
{
let largo;
let ancho;
let areaRectangulo;
let DosBolsasCemento = 2;
let TresBolsasCal = 3;
let ResultadoBolsasCemento;
let ResultadoBolsasCal;

largo = txtIdLargo.value;
ancho = txtIdAncho.value;

largo = parseInt (largo);
ancho = parseInt (ancho);

areaRectangulo = largo * ancho;

ResultadoBolsasCemento = areaRectangulo * TresBolsasCal;
ResultadoBolsasCal = areaRectangulo * DosBolsasCemento;

alert ("Se necesitan "+ResultadoBolsasCemento +" bolsas de cemento y "+ ResultadoBolsasCal+ " de cal")



}