/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let acumuladorN = 1;
	let numeroIngresado;
	let acumuladorP = 0;
	let seguir;
	let i = 0;

	do
	{
		numeroIngresado = prompt ("Ingrese el "+(i+1)+"° numero:");
		numeroIngresado = parseInt (numeroIngresado);

		if (numeroIngresado > -1)
		{
			acumuladorP = acumuladorP + numeroIngresado;
		}
		else 
		{
			acumuladorN =  acumuladorN * numeroIngresado;
		}
		

		seguir = prompt ("Desea seguir? responde (si), caso contrario se sumaran los n° positivos y se multiplicaran los °n negativos");
		i++;
	} while (seguir == "si");

	
	
		if (numeroIngresado < 0)
		{
			
		}
		txtIdSuma.value = acumuladorP;
		txtIdProducto.value = acumuladorN;
		



	

}//FIN DE LA FUNCIÓN