function mostrar()
{
    let numeroIngresado;
    let contadorDivisores = 0;

    numeroIngresado = parseInt(prompt("Ingrese un Número"));
    

    for (let i = 1; i <= numeroIngresado; i++) 
    {
        if (numeroIngresado % i == 0) 
        {
            contadorDivisores++;
        }
    }

    if (contadorDivisores == 2) // 2 divisores porque es primo.
    {
        document.write(numeroIngresado+" Es un número Primo");
    }
	else
    {
		document.write(numeroIngresado+" El número no es primo")
	}
} //FIN DE LA FUNCIÓN