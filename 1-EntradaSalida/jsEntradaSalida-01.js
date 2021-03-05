/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
    let arrayNombre = [];
    let nombres;
    let continuar = true;
    let contador = 0;
    let confirmador = Number.isNaN(nombres);
    do
    {
        
        nombres = prompt ("Ingrese los nombres que quiera.");
        if (nombres == false) // esto es para validar un string, que si ponen numeros es incorrecto
        {
            alert ("Dato invalido, prueba con un texto...");
            continue;
        }
        arrayNombre.push [nombres];
        contador++;

       continuar = confirm ("desea continuar?")
    }while (continuar);

    document.write (arrayNombre[contador]+ "<br>"+" despues" )

}



