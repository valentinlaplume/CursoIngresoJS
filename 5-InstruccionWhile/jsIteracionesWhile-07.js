/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
let numeroIngresado;
let respuesta;
let acumulador = 0;
let promedio = 0;
let suma = 0;
let divisor = 0;

do
{	
	numeroIngresado = prompt ("Ingresa "+(divisor+1)+"° numero:");
	numeroIngresado = parseInt (numeroIngresado);
	acumulador = acumulador + numeroIngresado;
	
	divisor ++;
	respuesta = prompt (divisor+1+") Desea seguir ingresando numeros? - Responda con un (si) para seguir, caso contrario se sumaran los n° ingresados y se sacará promedio.")
} while (respuesta == "si");

promedio = acumulador / divisor;

txtIdSuma.value = "suma: "+acumulador;
txtIdPromedio.value = "promedio: "+promedio;





/* if (respuesta == "no")
{
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;

} else
{
	alert ("Ingresaste solamente 1° numero");
	txtIdSuma.value = "Único n° ingresado: "+ acumulador;
	txtIdPromedio.value = promedio;
}*/
	

}//FIN DE LA FUNCIÓN