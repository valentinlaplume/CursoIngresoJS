function mostrar()
{
	let edad = txtIdEdad.value;
	edad = parseInt (edad);
	let estadoCivilUno = estadoCivil.value

	if (edad > 18 && estadoCivilUno == "Soltero")
{
		alert ("Es soltero y no es menor"); 
}
}
//FIN DE LA FUNCIÓN