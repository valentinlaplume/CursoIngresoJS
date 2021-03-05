/* 
al presionar el botón pedir un número.
 mostrar los numeros divisores desde el 1 al número ingresado,
 y mostrar la cantidad de numeros divisores encontrados.
*/
function mostrar()
{
    let numeroIngresado;
    let contadorDivisores = 0;

    numeroIngresado = parseInt(prompt("Ingrese un Número"));

    for (let i = 1; i <= numeroIngresado; i++) 
    {
        if (numeroIngresado % i == 0) 
        {
            document.write("<br>"+i) // muestro cada DIVISOR de ese NUM INGRESADO
            contadorDivisores++;
        }
    }

    document.write ("<br>cantidad num divisores: "+contadorDivisores);
    

} //FIN DE LA FUNCIÓN