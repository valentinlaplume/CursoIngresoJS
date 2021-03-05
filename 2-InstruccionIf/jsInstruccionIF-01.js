function mostrar()
{
	//tomo la edad  
	/* 1-con if
	pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
	e informar:
	60 km/hr = muy lento
	hata 80km/h= lento
	hasta 100= buen ritmo
	hasta 120= ahi de la ley
	mas = eso no se hace */

	let distancia;
	let tiempo;
	let resultadoKm;
	

	distancia = prompt ("ingresa la distancia que recorriste en km: ");
	tiempo = prompt ("ingresa el tiempo que tardaste en horas: ");
	
	distancia = parseInt (distancia);
	tiempo = parseInt (tiempo);
	resultadoKm = parseInt (resultadoKm);

	resultadoKm =  distancia / tiempo

	if (resultadoKm <= 60)
	{
		alert ("ibas a una velocidad de "+resultadoKm+" km/h, muy lento");
	}else 
	{
		if (resultadoKm < 81)
		{
			alert ("ibas a una velocidad de "+resultadoKm+" km/h, lento");
		}else 
		{
			if (resultadoKm < 101)
			{
				alert ("ibas a una velocidad de "+resultadoKm+" km/h, buen ritmo");
			}else
			{
				if (resultadoKm < 121)
				{
					alert ("ibas a una velocidad de "+resultadoKm+" km/h, ahi de la ley");
				}
				else
				{
					alert ("ibas a una velocidad de "+resultadoKm+" km/h, eso no se hace");
				}
			}
			
		}
		
	}


	

}
//FIN DE LA FUNCIÓN