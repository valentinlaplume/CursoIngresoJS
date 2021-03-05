/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
let sexoIngresado;

sexoIngresado = prompt ("ingresar su sexo: (f) para femenino, (m) para masculino.")

while (sexoIngresado != "f" && sexoIngresado != "m")
{
	alert ("Su sexo es incorrecto")
	sexoIngresado = prompt (" ingrese nuevamente su sexo");
}

if (sexoIngresado == "f" )
{
	txtIdSexo.value = "sexo femenino";
}else
{
	if (sexoIngresado == "m")
	{
		txtIdSexo.value = "sexo masculino";
	}
}
	
	
}//FIN DE LA FUNCIÓN