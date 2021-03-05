/* Una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y 
Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y 
Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento
Curso de ingreso UTN FRA */

function mostrar()
{
	let estacion = txtIdEstacion.value;
	let destino = txtIdDestino.value;
	let descuento;
	let aumento;

	let precioFinal;
	let baseEstadia = 15000;
	
	baseEstadia = parseInt (baseEstadia)
	precioFinal = parseInt (precioFinal)

	switch (estacion)
	{
		case "Invierno":
			switch (destino)
			{	
				case "Bariloche":
					aumento = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = 10;
					break;
				case "Mar del Plata":
					descuento = 20;
					break;
			}
		break;
		case "Verano":
			switch (destino)
			{	
				case "Bariloche":
					descuento = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = 10;
					break;
				case "Mar del Plata":
					aumento = 20;
					break;
			}
		break;
		case "Otoño":
		case "Primavera":
			switch (destino)
			{	
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					descuento = 10;
					break;
				case "Cordoba":
					precioFinal = baseEstadia;
					break;
			}
		break;
	}

	if (descuento)
	{
		precioFinal = baseEstadia - ((descuento/100)* baseEstadia) 
		alert ("El precio final con descuento es de: "+precioFinal);

	} 
	else 
		{ 
			if (aumento)
			{
				precioFinal = ((aumento/100)* baseEstadia) + baseEstadia
				alert ("El precio final con aumento es de: "+precioFinal);
			}
			else
			{
				alert ("El precio final es el mismo que el inicial: "+precioFinal);
			}
		}		

}