/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	let nombre;

		//busque el codigo en inspeccionar elemento (click en nombre)
	
	nombre = txtIdNombre.value;

	let edad;

	//busque el codigo en inspeccionar elemento (click en edad)

	edad = txtIdEdad.value ;

		alert ("Usted se llama "+nombre+" y tiene "+edad+" años")

    //CONCATENAR es unir cadena de careceteres que en este caso es "string" cadena de texto
}

