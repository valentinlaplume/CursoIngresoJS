/* 1. Ingresar 5 numeros, y determinar la cantidad de numeros que son 
mayores que 10 y menores 20 (incluisive en ambos casos) */

//div g: Valentin Laplume

function mostrar()
{
	let numeroIngresado;
	let acumulador = 0;
	let i = 0;

	while (i < 5)
	{
		numeroIngresado = prompt ("Ingrese el "+ (i+1)+ "° numero:");
		numeroIngresado = parseInt (numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		i++;
	}

	alert ("la suma de los 5 numeros ingresados es: "+ acumulador);
}
