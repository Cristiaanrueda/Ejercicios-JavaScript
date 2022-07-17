// Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
console.log('Hello World');

// Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).

// Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

// Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”

// Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

// Escribe un programa que pida un número y diga si es divisible por 2
const divisoresDe2 = (num2, num22) => {
    for (let n = 0; n < num2/2 && n < num22/2; n++){
        if(num2 % n === 0 && num22 % n === 0){
            console.log(n, ',');
        }
}
}

console.log(divisoresDe2(49, 70))