/* Al selecionar un destino , indicar el punto cardinal de nuestro pais
 en donde se encuentra Norte, Sur, Este u Oeste */
function mostrar()
{
	let destino = txtIdDestino.value;

	switch (destino)
	{
		case "Bariloche":
			alert ("Oeste");
			break;
		case "Cataratas":
			alert ("Norte");
			break;
		case "Mar del plata":
			alert ("Este");
			break;
		case "Usiahia":
			alert ("Sur");
			break;
		default:
			alert ("No definiste destino");
			break;
		}

}//FIN DE LA FUNCIÓN