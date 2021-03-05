/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroEntre = 0;

	while (numeroEntre > -1)
	{
		numeroEntre = prompt ("ingrese un numero que sea entre 0 y 9 inclusive");
		if (numeroEntre > 9)
		{
			alert ("numero ingresado no se encuentra entre 0 y 9 inclusive, ingrese otro...");
		}
	}
	
	txtIdNumero.value = "numero correcto! entre 0 y 9, el n° es: "+ numeroEntre;
	
}//FIN DE LA FUNCIÓN