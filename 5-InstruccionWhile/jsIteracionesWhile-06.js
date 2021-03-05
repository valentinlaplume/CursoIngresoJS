function mostrar()
{
	let i = 0;
	let acumulador = 0;
	let numerosIngresados;

	while (i < 5)
	{
		numerosIngresados = prompt ("Ingrese 5 notas, numero "+(i+1)+"°");
		numerosIngresados = parseInt (numerosIngresados);
		acumulador = acumulador + numerosIngresados;
		i++;
	}
	if (numerosIngresados > 0)
	{
		txtIdSuma.value = "la suma acumulada es: "+acumulador;
		txtIdPromedio.value = "El promedio de las notas es:"+ (acumulador / 5);
	}
	else 
	{
		acumulador = acumulador + i;
		txtIdSuma.value = "No ingresaste numeros, no se pudo realizar la suma";
		txtIdPromedio.value = "No ingresaste numeros, no se pudo realizar el promedio";
	}
	
}//FIN DE LA FUNCIÓN