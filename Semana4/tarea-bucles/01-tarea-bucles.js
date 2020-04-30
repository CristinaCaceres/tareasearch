let num_ejercicio = +prompt("Ingrese el número de ejercicio : (1) Ejercicio 4.1 (3) Ejercicio 4.3 (9) Ejercicio 4.9 (13) Ejercicio 4.13");

switch (num_ejercicio) {
    case 1:
        // Un profesor tiene un salario inicial de $1500, y recibe un incremento
        // de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6
        // años? ¿Qué salario ha recibido en cada uno de los 6 años? 
        let salario = 1500;
        let anios_ = 1;

        while (anios_ <= 6) {
            salario = salario + (salario * 0.10);
            console.log(`Salario en ${anios_} es: ${salario.toFixed(2)}`);
            anios_++;
        }

        console.log(`Salario al cabo de 6 años es: ${salario.toFixed(2)}`);

        break;

    case 3:
        // Se requiere un algoritmo para determinar, de N cantidades, cuántas
        // son cero, cuántas son menores a cero, y cuántas son mayores a cero.
        let arreglo = [0,- 5,-7,89,60,7,9,0,0,-99,25];
        let contar_cero = 0;
        let contar_mayorcero = 0;
        let contar_menorcero = 0;
        let i = 0;
        while (i < arreglo.length) {
            if (arreglo[i] === 0) {
                contar_cero++;
            }
            else {
                if (arreglo[i] < 0) {
                    contar_menorcero++;
                }
                else {
                    if (arreglo[i] > 0) {
                        contar_mayorcero++;
                    }
                }
            }
            i++;
        }
        console.log(`Número de veces (cero): ${contar_cero}`);
        console.log(`Número de veces (menor cero): ${contar_menorcero}`);
        console.log(`Número de veces (mayor cero): ${contar_mayorcero}`);

        break;

    case 9:
        // Un cliente de un banco deposita equis cantidad de pesos cada mes
        // en una cuenta de ahorros. La cuenta percibe un interés fijo durante
        // un año de 10 % anual. Realice un algoritmo para determinar el total
        // de la inversión final de cada año en los próximos N años. 
        let monto_mes=1000;
        let anios = 10;
        let total = 0;
        let j=1;
        while(j<=anios){
            total = (total + (monto_mes*12))*0.90;
            console.log(`En ${j} años: ${total.toFixed(2)}`);
            j++;
        }
        console.log(`Total de la inversion ${anios} años: ${total.toFixed(2)}`);

        break;

    case 13:
        // Un vendedor ha realizado N ventas y desea saber cuántas fueron
        // por 10,000 o menos, cuántas fueron por más de 10,000 pero por
        // menos de 20,000, y cuánto fue el monto de las ventas de cada una y
        // el monto global. Realice un algoritmo para determinar los totales.
        
        let arreglo2 = [15000, 5000, 8000, 8900, 4500, 1500, 7000];
        let contar1 = 0;
        let monto_contar1 = 0;
        let contar2 = 0;
        let monto_contar2 = 0;
        let monto_total = 0;
        let k = 0;
        while (k < arreglo2.length - 1) {
            if (arreglo2[k] <= 10000) {
                monto_contar1 += arreglo2[k];
                contar1++;
            }
            else {
                if (arreglo2[k]>10000 && arreglo2[k]<20000) {
                    monto_contar2 += arreglo2[k];
                    contar2++;
                }
            }
            monto_total += arreglo2[k];
            k++;
        }
        console.log(`Número de ventas menores igual a 10,000: ${contar1}`);
        console.log(`Total de ventas menores igual a 10,000: ${monto_contar1}`);
        console.log(`Número de ventas por más de 10,000 pero por menos de 20,000: ${contar2}`);
        console.log(`Total de ventas por más de 10,000 pero por menos de 20,000: ${monto_contar2}`);
        console.log(`VENTA TOTAL: ${monto_total}`);

        break;


    default:
        console.log("Error");

}