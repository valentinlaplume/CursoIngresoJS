// Introduccion if n° 10 - Valentin Laplume
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
		let numeroR;
		let max;
		let min;

		max = 11;
		min = 1;

		numero = Math.round (Math.random() * (max - min) + min)
		 	alert ("Nota de examen: " + numero)
		 
		if (numero >= 9 && numero <= 10)
	{
			alert ("Excelente Nota")
	}
		else if (numero > 4 && numero < 9)
	{
			alert ("APROBO")
	}
		else 
	{
		alert ("La proxima será")
	}

}//FIN DE LA FUNCIÓN