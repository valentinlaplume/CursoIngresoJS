/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importeIngresado;
	let descuento;
	let resultado;

	importeIngresado = txtIdImporte.value;
	importeIngresado = parseInt (importeIngresado);

	descuento = (25 / 100) * importeIngresado;
	resultado = importeIngresado - descuento;

	txtIdResultado.value = resultado;
	
}
