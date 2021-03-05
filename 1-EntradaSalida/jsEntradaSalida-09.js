/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let resultado;
	

	sueldo = txtIdSueldo.value;
	sueldo = parseInt (sueldo);

	// 10% de descuento / 100 y a eso lo multiplicas por el "SUELDO", (esto te da el aumento)

	aumento = (10 / 100) * sueldo;

	// sueldo colocado + el aumento de la ecuacion anterior
	resultado = sueldo + aumento;

	// mostré por "ID" lo que es el resultado (= resultado)

	txtIdResultado.value = resultado;

	
}
