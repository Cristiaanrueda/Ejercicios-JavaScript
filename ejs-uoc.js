// http://multimedia.uoc.edu/blogs/pw/es/2013/09/17/exercicis-de-javascript-iniciacio/

/* 
7-Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
8-Escribe un programa que pida un número y diga si es divisible por 2
9-Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
10-Escribe un programa que pida una frase y escriba las vocales que aparecen
11-Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
12-Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
13-Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
14-Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)
15-Escribir un programa que escriba en pantalla los divisores de un número dado
16-Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
17-Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
*/



//9
//??????????????????


//10 - por la mitad
let pedirFrase = prompt('Ingrese una frase');

if(pedirFrase.includes('a')){
    alert('contiene a')
}else if(pedirFrase.includes('e')){
    alert('contiene e');
}else if(pedirFrase.includes('i')){
    alert('contiene i');
}else if(pedirFrase.includes('o')){
    alert('contiene o');
}else if(pedirFrase.includes('u')){
    alert('contiene u');
} else {
    alert('no tiene vocales');
}
 //otra sol
 let text = prompt("Escribe una frase");
let nText = text.length;
for (let i = 0; i < nText; i++) {
if (text.substr(i,1) === "a" || text.substr(i,1) === "e" || text.substr(i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u") {
document.write(text.substr(i,1));
}
}

//otra
let text = prompt("Escribe una frase");
let nText = text.length;
for (let i = 0; i < nText; i++) {
if (text.substr(i,1) === "a" || text.substr(i,1) === "e" || text.substr(i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u") {
alert('Contiene ' + text[i]);
}
}

//11 - version contando de a 1, ver como arrojar resultado de una
let text = prompt("Escribe una frase");
let nText = text.length;
for (let i = 0; i < nText; i++) {
if (text.includes('a') || text.includes('e') || text.includes('i') || text.includes('o') || text.includes('u')) {
    let cantidadVocales = i + 1
    alert('Contiene ' + cantidadVocales + ' vocales');   
}
}

//12 - 



//13

let ingresoNumero = prompt('Ingrese un numero');

if(ingresoNumero % 2 === 0 || ingresoNumero % 3 === 0 || ingresoNumero % 5 === 0 || ingresoNumero % 7 === 0 ||){
    alert('Es divisible');
} else {
    alert('No es divisible');
}


//14-Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)

let ingresoNumero = prompt('Ingrese un numero');

if(ingresoNumero % 2 === 0 || ingresoNumero % 3 === 0 || ingresoNumero % 5 === 0 || ingresoNumero % 7 === 0 ){
if(ingresoNumero % 2 === 0){
    alert('Es divisible por 2');
}
else if(ingresoNumero % 3 === 0){
    alert('Es divisible por 3');
}
 else if(ingresoNumero % 5 === 0){
    alert('Es divisible por 5');
}
 else if(ingresoNumero % 7 === 0){
    alert('Es divisible por 7');
} else {
    alert('No es divisible');
}
}


//15-Escribir un programa que escriba en pantalla los divisores de un número dado

const divisoresDe = (num) => {
    for (let n = 0; n < num/2; n++){
        if(num % n === 0){
            console.log(n, ',');
        }
    }
}

console.log(divisoresDe(20))



//ahora con prompt

let ingresarNumeroD = prompt('Ingrese el numero que desea');
const divisoresDePrompt = (num) => {
    for (let n = 0; n < num/2; n++){
        if(num % n === 0){
            document.write(n, ',');
        }
    }
}

document.write(divisoresDePrompt(ingresarNumeroD));


//16-Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

const divisoresDe2 = (num2, num22) => {
    for (let n = 0; n < num2/2 && n < num22/2; n++){
        if(num2 % n === 0 && num22 % n === 0){
            console.log(n, ',');
        }
}
}
console.log(divisoresDe2(49, 70))

//con prompt
let ingresarNumeroD2 = prompt('Ingrese el numero que desea');
let ingresarNumeroD22 = prompt('Ingrese el numero que desea');

const divisoresDePrompt2 = (num2, num22) => {
    for (let n = 2; n < num2/2 && n < num22/2; n++){
        if(num2 % n === 0 && num22 % n === 0){
            document.write(n, ',');
        }
    }
}

document.write(divisoresDePrompt2(ingresarNumeroD2, ingresarNumeroD22));