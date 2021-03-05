/*
Al presionar el botón, pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() 
{
  let numeroIngresado;
  let positivos = 0;
  let negativos = 0;
  let contadorP = 0;
  let contadorN = 0;
  let contadorPares = 0;
  let promedioP = 0;
  let promedioN = 0;
  let contadorCeros = 0;
  let respuesta = true;
  let resta;
  let flag = 0;
  let i = 0;

  do 
  {
	numeroIngresado = parseInt (prompt ("Ingrese el "+(i+1)+"° numero: "));
	
	if (numeroIngresado < 0)
	{
		negativos = negativos + numeroIngresado; // suma de negativos
		contadorN ++; // contador de negativos
	}
	else
	{
		if (numeroIngresado > -1)
		{
			positivos = positivos + numeroIngresado; // suma de positivos
			contadorP ++; // contador de negativos
		}
		if (numeroIngresado == 0) // suma de ceros
		{
			contadorCeros ++;	// contador de ceros
		}
		if (numeroIngresado % 2 == 0) // si numero ingresado resto 2 da 0
		{
			contadorPares ++; // contador de pares
		}
	}
	
    respuesta = confirm("Desea continuar? ");
	
	i++;
  } while (respuesta);

  	if (contadorN == 0 && contadorP > 0)
	  {
		promedioN = 0;
		promedioP = positivos / contadorP; // promedio positivos
	  }else if (contadorN == 0 && contadorP == 0)
	  {
		promedioN = 0;
		promedioP = 0;
	  }else if (contadorN > 0 && contadorP == 0)
	  {
		promedioN = negativos / contadorN; // promedio negativos
		promedioP = 0;
	  }
	  else
	  {
		promedioN = negativos / contadorN; // promedio negativos
		promedioP = positivos / contadorP; // promedio positivos
	  }
	

  resta = positivos + negativos; // diferencia entre n° positivos y negativos

  console.log ("suma de positivos: "+positivos);
  console.log ("suma de negativos: "+negativos);
  console.log ("promedio de positivos: "+promedioP);
  console.log ("promedio de negativos: "+promedioN);
  console.log ("diferencia de p y n: "+resta);
  console.log ("contador de ceros: "+contadorCeros);
  console.log ("cantidad numeros pares: "+contadorPares)
  alert ("suma de positivos: "+positivos+"\n"+" suma de negativos: "+negativos+"\n"+"promedio de positivos: "+promedioP
  +"\n"+"promedio de negativos: "+promedioN+"\n"+"diferencia de p y n: "+resta+"\n"+"contador de ceros: "+contadorCeros
  +"\n"+"cantidad numeros pares: "+contadorPares);
 

}



//FIN DE LA FUNCIÓN

/* if(flag == 0) 
	{	
		
		if (numeroIngresado < 0)
		{
			positivos++;
			contadorP++;
			negativos++;
			contadorN++
		} else
		{
			positivos++;
			contadorP++;
		}
		
		flag = 1;
	} 

	else
	{ */
