/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperaturaF;
    let resultadoACentigrados;
    
    temperaturaF = txtIdTemperatura.value;
    temperaturaF = parseInt (temperaturaF);

    resultadoACentigrados = (temperaturaF - 32) / 1.8;

    // resultadoACentigrados = resultadoACentigrados / 1.8;



    alert (temperaturaF + " Fahrenheit son "+ resultadoACentigrados + " centigrados");

    


}

function CentigradosFahrenheit () 
{
	let temperaturaC;
    let resultadoAFahrenheit;
    
    temperaturaC = txtIdTemperatura.value;
    temperaturaC = parseInt (temperaturaC);

    resultadoAFahrenheit = (temperaturaC * 1.8) + 32;



    alert (temperaturaC + " Centigrados son "+ resultadoAFahrenheit + " Fahrenheit");
}
