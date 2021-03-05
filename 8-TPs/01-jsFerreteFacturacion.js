/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

    let precioUno;
    let precioDos;
    let precioTres;
    let resultadoSuma;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    resultadoSuma = precioUno + precioDos + precioTres;

    alert ("La suma de los precios es de: "+resultadoSuma);

    
}
function Promedio () 
{


let precioUno;
    let precioDos;
    let precioTres;
    let resultadoPromedio;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    resultadoPromedio = (precioUno + precioDos + precioTres) / 3;

    alert ("El promedio es de: "+resultadoPromedio);

	
}
function PrecioFinal () 
{
    
    let precioUno;
    let precioDos;
    let precioTres;
    let precioFinal;
    let resultadoSuma;
    let resultadoIva;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    resultadoSuma = precioUno + precioDos + precioTres;

    resultadoIva = (21/100) * resultadoSuma;

    precioFinal = resultadoSuma + resultadoIva;

    alert ("La suma de los precios es de: "+precioFinal);  

}