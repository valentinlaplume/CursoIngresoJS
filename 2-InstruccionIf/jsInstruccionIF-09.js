/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	    let cantidadLamparas;
        let precioLamparas;
        let marcaLampara;
        let resultadoDescuento;
        let resultadoPorcentaje;
        let resultadoAumento;
    

        cantidadLamparas = txtIdCantidad.value;
        marcaLampara = Marca.value;

        precioLamparas = parseInt (precioLamparas);
        cantidadLamparas = parseInt (cantidadLamparas);
        resultadoPorcentaje = parseInt (resultadoPorcentaje);
        resultadoAumento = parseInt (resultadoAumento);
        resultadoDescuento = parseInt (resultadoDescuento);
        cantidadLamparas = parseInt (cantidadLamparas);

        precioLamparas = cantidadLamparas *35;
    

         if (cantidadLamparas >= 6)
    {
            resultadoPorcentaje = (50 / 100) * precioLamparas;
            resultadoDescuento = precioLamparas - resultadoPorcentaje;
            txtIdprecioDescuento.value = ("descuento del -50% y el precio es de: "+resultadoDescuento)
    }
        else if (cantidadLamparas == 5 && marcaLampara == "ArgentinaLuz")
    {
            resultadoPorcentaje = (40/100) * precioLamparas;
            resultadoDescuento = precioLamparas - resultadoPorcentaje;

            txtIdprecioDescuento.value = ("Descuento del -40% por comprar 5, te queda el precio de: "+resultadoDescuento)
    }
        else if ((cantidadLamparas == 4 && marcaLampara == "ArgentinaLuz") || (cantidadLamparas == 4 && marcaLampara == "FelipeLamparas") )
    {
            resultadoPorcentaje = (25/100) * precioLamparas;
            resultadoDescuento = precioLamparas - resultadoPorcentaje
            txtIdprecioDescuento.value = ("Descuento del -25% por comprar 4 lamparas de Argentina luz y Felipe Lamparas, el precio es de: "+resultadoDescuento)
    }
        else
    {
            resultadoPorcentaje = (20/100) * precioLamparas;
            resultadoDescuento = precioLamparas - resultadoPorcentaje;
            txtIdprecioDescuento.value = ("Si la marca elegida no es Argentina Luz ni Felipe lamparas descuento -20%, el precio queda en: "+resultadoDescuento)
    }
        if (cantidadLamparas == 3 && marcaLampara == "ArgentinaLuz")
    {
            resultadoPorcentaje = (15/100) * precioLamparas;
            resultadoDescuento = precioLamparas - resultadoPorcentaje;
            txtIdprecioDescuento.value = ("Por 3 lamparas marca Argentina Luz un -15%, te queda al precio de: "+resultadoDescuento)
    }
        else if (cantidadLamparas == 3 && marcaLampara == "FelipeLamparas")
    {
            resultadoPorcentaje = (10/100) * precioLamparas;
            resultadoDescuento = precioLamparas - resultadoPorcentaje;
            txtIdprecioDescuento.value = ("Por 3 lamparas marca Felipe Lamparas un -10%, te queda al precio de: "+resultadoDescuento)
    }
        else
    {
            resultadoPorcentaje = (5/100) * precioLamparas;
            resultadoDescuento = precioLamparas - resultadoPorcentaje;
            txtIdprecioDescuento.value = ("Elegiste 3 lamparas pero de otra marca que no sea ArgLuz ni FelipeLamparas -5%, te queda al precio de: "+resultadoDescuento)
    }
        if (resultadoDescuento > 120)
    {
            resultadoPorcentaje = (10/100) * precioLamparas;
            resultadoAumento = precioLamparas + resultadoPorcentaje;
            txtIdprecioDescuento.value = ("Usted pago: " +resultadoAumento+"de IIBB.")
    }
    

    
}