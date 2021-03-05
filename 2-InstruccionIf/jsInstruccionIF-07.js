function mostrar()
{
	let edad = txtIdEdad.value 
	edad = parseInt (edad);
	let estadoCivilQ = estadoCivil.value;

	if (edad < 18 && estadoCivilQ != "Soltero")
{
		alert ("Es muy pequeño para NO ser soltero")

}



	


}//FIN DE LA FUNCIÓN