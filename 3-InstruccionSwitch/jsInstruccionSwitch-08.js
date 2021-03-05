/* Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */

function mostrar()
{
	let destino = txtIdDestino.value;

	switch (destino)
	{
		case "Bariloche":
			alert ("frio");
			break;
		case "Cataratas":
			alert ("Calor");
			break;
		case "Mar del plata":
			alert ("calor");
			break;
		case "Usiahia":
			alert ("frio");
			break;
		default:
			alert ("No definiste destino");
			break;
		}

}//FIN DE LA FUNCIÓN