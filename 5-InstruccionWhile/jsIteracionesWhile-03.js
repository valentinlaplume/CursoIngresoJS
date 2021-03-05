/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
// Valentin laplume -  div G
// lo hice un poco mas extenso pero para ver que hacia. 
function mostrar()
{
	let clave = "utn750";
	clave = clave != "utn750";
	let datosMios;
	let datosPedidos;

	while (clave != "utn750")
	{
		clave = prompt ("Para ingresar a mis datos debe escribir la clave correcta:");
		if (clave != "utn750")
		{
			alert ("la clave es incorrecta");
		}
	}

	alert ("la clave es correcta, aprete aceptar para seguir...");
	
	datosMios = prompt ("que quieres ver? 1°telefono personal - 2°telefono madre - 3°telefono hijo. Escriba el numero de la opcion preferente");
	
	if (datosMios == "1")
	{
		alert ("mi numero personal es:")
	}
	else 
	{
		if (datosMios == "2")
		{
			alert ("el numero de mi madre es:");
		}
		else
		{
			if (datosMios == "3")
			{
				alert ("el telefono de mi hijo es:");
			} else
			{
				alert ("esta opcion es incorrecta. Vuelva a empezar");
			}
		} 

		
	}



}//FIN DE LA FUNCIÓN
