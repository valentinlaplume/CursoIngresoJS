/*
3)3- validación :
pedir el ingreso de 10 mascotas 
 validar 
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y  si es de tipo "otros" o pájaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros ,  para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza'*/
function mostrar()
{
let tipoMascota;
let razaMascota;
let edadMascota;
let nombreMascota;

let contadorGato = 0;
let contadorPerro = 0;
let contadorPajaro = 0;
let contadorOtros = 0;

let nombreMasViejoGato;
let nombreMasViejoPerro;
let nombreMasViejoPajaro;
let nombreMasViejoOtros;

let edadMasViejoGato;
let edadMasViejoPerro;
let edadMasViejoPajaro;
let edadMasViejoOtros;

let flagGato;
let flagPerro;
let flagPajaro;
let flagOtros;




for (let i= 0; i < 3; i++)
{
	tipoMascota = prompt ("Ingrese tipo de su mascota, solamente (gato , perro , pajaro , otros)")
	while (tipoMascota != "gato" && tipoMascota != "perro" && tipoMascota != "pajaro" && tipoMascota != "otros")
	{
		tipoMascota = prompt ("Tipo de mascota INVALIDO. pruebe con (gato , perro , pajaro , otros)");
	}

	switch (tipoMascota)
	{
		case "perro":
			contadorPerro++;
			flagPerro= 0;
			razaMascota = prompt ("Ingrese la raza de su perro (pastor, toy, callejero)");
			while (razaMascota != "pastor" && razaMascota != "toy" && razaMascota != "callejero")
			{
				razaMascota = prompt ("Raza de perro Invalida. Pruebe con (pastor, toy, callejero)")
			}
			
		break;

		case "gato":
			contadorGato++;
			flagGato = 0;
			razaMascota = prompt ("Ingrese la raza de su gato (siames, turco, peterbald , generico)");
			while (razaMascota != "siames" && razaMascota != "turco" && razaMascota != "peterbald" && razaMascota != "generico")
				{
				razaMascota = prompt ("Raza de gato Invalida. Pruebe con (siames, turco, peterbald , generico)")
				}	
		break;

		case "pajaro":
			contadorPajaro++;
			flagPajaro = 0;
			razaMascota = prompt ("Ingrese la raza de su pajaro");
			while (isNaN(razaMascota) == false)
			{
				razaMascota = prompt ("Raza de pajaro INVALIDA. Intente nuevamente ");
			}
		break;
		case "otros":
			contadorOtros++;
			flagOtros = 0;
			razaMascota = prompt ("Ingrese la raza de su mascota.");
			while (isNaN(razaMascota) == false)
			{
				razaMascota = prompt ("Raza de su mascota INVALIDA. Intente nuevamente ");
			}
		break;
	}

	switch (tipoMascota)
	{
		case "perro":
		case "gato":
			edadMascota = parseInt(prompt ("Ingrese edad, entre 1 y 20 años"));
			while (edadMascota<1 || edadMascota>20 || isNaN(edadMascota) == true)
			{
				edadMascota = parseInt(prompt("Edad invalida. Ingrese nuevamente edad entre 1 y 20 años"));
			}
		break;
		case "pajaro":
			edadMascota = parseInt(prompt ("Ingrese edad, entre 1 y 50 años"));
			while (edadMascota<1 || edadMascota>50 || isNaN(edadMascota) == true)
			{
				edadMascota = parseInt(prompt("Edad invalida. Ingrese nuevamente edad entre 1 y 50 años"));
			}
		break;
		case "otros":
			edadMascota = parseInt(prompt ("Ingrese edad, entre 1 y 100 años"));
			while (edadMascota<1 || edadMascota>100 || isNaN(edadMascota) == true)
			{
				edadMascota = parseInt(prompt("Edad invalida. Ingrese nuevamente edad entre 1 y 100 años"));
			}
		break;
	}
	
	nombreMascota = prompt("Ingrese nombre de su mascota (no se permiten numeros)");
	while (isNaN(nombreMascota) == false)
	{
		nombreMascota = prompt("Nombre INVALIDO. (no se permiten numeros), ingrese nuevamente su nombre:");
	}

	if (tipoMascota == "perro")
	{
		if (flagPerro == 0 || edadMascota > edadMasViejoPerro)
		{
			edadMasViejoPerro = edadMascota;
			nombreMasViejoPerro = nombreMascota;
			flagPerro++;
		}
	}
	else if (tipoMascota == "gato")
		{
			if (flagGato == 0 || edadMascota > edadMasViejoGato)
			{
				edadMasViejoGato = edadMascota;
				nombreMasViejoGato = nombreMascota;
				flagGato++;
			}
		}
		else if (tipoMascota == "pajaro")
		{
			if (flagPajaro == 0 || edadMascota > edadMasViejoPajaro)
			{
				edadMasViejoPajaro = edadMascota;
				nombreMasViejoPajaro = nombreMascota;
				flagPajaro++;
			}
		}
		else if (tipoMascota == "otros")
		{
			if (flagOtros == 0 || edadMascota > edadMasViejoOtros)
			{
				edadMasViejoOtros = edadMascota;
				nombreMasViejoOtros = nombreMascota;
				flagOtros++;
							
			}
		}
} // FIN DEL FOR

	if (contadorGato == 0)
	{
		console.log ("No se ingresaron Gatos.");
	}
	else
	{
		console.log ("Nombre del mas viejo de los gatos: "+nombreMasViejoGato);
	}

	if (contadorPerro == 0)
	{
		console.log ("No se ingresaron Perros.");
	}
	else
	{
		console.log ("Nombre del mas viejo de los perros: "+nombreMasViejoPerro);
	}

	if (contadorPajaro == 0)
	{
		console.log ("No se ingresaron Pajaros.")
	}
	else
	{
		console.log("Nombre del mas viejo de los pajaros: "+nombreMasViejoPajaro);
	}

	if (contadorOtros == 0)
	{
		console.log ("No se ingreso otro tipo de mascotas.")
	}
	else
	{
		console.log ("Nombre del mas viejo de tipo (otros): "+nombreMasViejoOtros);
	}

}

