/*
Al ingresar una hora, informar:
								si está entre las 7 y las 11 : "Es de mañana.". */ 

function mostrar()
{
	//tomo la hora
	let hora = txtIdHora.value;
	hora = parseInt (hora);
	switch (hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert ("Es de mañana");
			break;	
		default:
			alert("default xd");
			break;	
	}

	
	
	
	
	
	



}//FIN DE LA FUNCIÓN