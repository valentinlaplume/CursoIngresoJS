/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
// TP Ferrete Iluminacion (CON SWTICH) - Valentin Laplume 
// ya echo : https://onlinegdb.com/EKE5Rio0O
// echo mejor : https://www.onlinegdb.com/UD5iDzUj_
function CalcularPrecio () 
{
let lamparaUnidad = 35;
let lamparasCantidad = txtIdCantidad.value;
let marcaLampara = Marca.value;
let precioFinal;
let IIBB;
let descuento;

descuento = parseInt (descuento);
IIBB = parseInt (IIBB);
lamparasCantidad = parseInt (lamparasCantidad);
precioFinal = parseInt (precioFinal);

    switch (lamparasCantidad)
    {
        case 1:
        case 2:
            switch (marcaLampara)
            {
                default:
                precioFinal = lamparaUnidad*lamparasCantidad
            break;
            }
        break;
        case 5:
            switch (marcaLampara)
            {
                case "ArgentinaLuz":
                    descuento = 40;
                break;
                default:
                    descuento = 30;
                break;
            }
        break;
         case 4:
            switch (marcaLampara)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                break;
                default:
                    descuento = 20;
                break;
            }
        break;
        case 3:
            switch (marcaLampara)
            {
                case "ArgentinaLuz":
                    descuento = 15;
                break;
                case "FelipeLamparas":
                    descuento = 10;
                break;
                default:
                    descuento = 5;
                break;
            }
        break;
        default:
            descuento = 50;
        break;
    }

    lamparasCantidad = lamparasCantidad * lamparaUnidad

    if (descuento > 4)
    {
        precioFinal = lamparasCantidad * (descuento/100)
        txtIdprecioDescuento.value = ("El precio final con descuento es de: "+ precioFinal);

    }
    else 
    {
        txtIdprecioDescuento.value = ("El precio final sin descuento es de: "+ precioFinal);
    }

    if (precioFinal > 120)
    {
        IIBB = precioFinal * (10/100)
        precioFinal = IIBB + precioFinal
        txtIdprecioDescuento.value = "Usted pago "+ IIBB + " de IIBB, siendo "+ precioFinal +" el precio final. "
    }
  
}

