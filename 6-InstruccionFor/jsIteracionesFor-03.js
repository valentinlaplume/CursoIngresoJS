function mostrar()
{
	let cantidad;

	cantidad = parseInt(prompt ("Cuantas veces queres ver el mensaje (Hola UTN FRA)? "));

	for (i = 0; i < cantidad; i++)
	{
		if (isNaN (cantidad) == true)
		{	
			continue;
		}else
		{
			document.write ("<br>"+ " Hola UTN FRA");
		}

		
	}


}//FIN DE LA FUNCIÓN