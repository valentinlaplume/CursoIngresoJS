function mostrar()
{
	//tomo el mes
	let mesElegido = txtIdMes.value;
	switch (mesElegido)
{
	case "Enero":
	{
		alert ("que comiences bien el año!!!.");
		break;
	}
	case "Marzo":
	{ 
		alert ("a clases!!!");
		break;
	}	
	case "Julio":	
	{
		alert ("se vienen las vacaciones");
		break;
	}
	case "Diciembre":
		{
			alert ("Felices fiestas!!!");
			break;
		}
	default:
		alert ("no era ningun mes importante");
		break;
}



}//FIN DE LA FUNCIÓN