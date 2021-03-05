/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	

let numeroIngresado;
let max;
let min;
let flag = 0;
let contadorN = 0;
let respuesta = "si";

do
{
	numeroIngresado = parseInt (prompt ("ingrese el "+(contadorN+1)+"° numero"));

	if (flag == 0)
	{
		max = numeroIngresado;
		min = numeroIngresado;
		flag = 1;
	}
	else
	{
		if (numeroIngresado > max)
		{
			max = numeroIngresado;
		}

		if (numeroIngresado < min)
		{
			min = numeroIngresado;
		}
	}


	respuesta = prompt ("Desea seguir? Responde (si) para seguir ingresando n°, responde (no) y se mostraran n° max y n° min. - ALERTA! caso contrario no se mostraran resultados");
	contadorN++;

} while(respuesta == "si");

if (respuesta == "no")
	{
		alert ("respondiste: ("+respuesta+ "), se resolverá:");
		txtIdMaximo.value = max;
		txtIdMinimo.value = min;
	} 
	else
	{
		alert ("Respuesta incorrecta. comience denuevo y responda por si o por no si desea seguir");
	}


}

//FIN DE LA FUNCIÓN