/*

FizzBuzz

Escribe un programa que use console.log para imprimir todos los números de 1 a 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.

Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz" o "Buzz" para números divisibles por solo uno de ellos).

(Esta es en realidad una pregunta de entrevista que se ha dicho elimina un porcentaje significativo de candidatos a programadores. Así que si la puedes resolver, tu valor en el mercado laboral acaba de subir). 
*/


for (let conteoA100 = 1; conteoA100 <= 100; conteoA100++) {
   if (conteoA100 % 3 === 0 && conteoA100 % 5 === 0){
    console.log('FizzBuzz');  
   }else if (conteoA100 % 3 === 0){
    console.log('Fizz');
   }else if(conteoA100 % 5 === 0){
    console.log('Buzz');
   }else {
    console.log(conteoA100);
   }  
}


//version mas corta
console.log('----------v2--------------');
for (let conteo = 1; conteo <= 100; conteo++) {
    let output = ''
    if (conteo % 3 === 0) output += 'Fizz'
    if (conteo % 5 === 0) output += 'Buzz'
    console.log(output || conteo);
 }
 

 /*
 Tablero de ajedrez

Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, usando caracteres de nueva línea para separar las líneas. En cada posición de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de formar un tablero de ajedrez.

Pasar este string a console.log debería mostrar algo como esto:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

Cuando tengas un programa que genere este patrón, define una vinculación tamaño = 8 y cambia el programa para que funcione con cualquier tamaño, dando como salida una cuadrícula con el alto y ancho dados.
 */

let board = ""
let size = 10

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size + 10; x++){
        if((x+y) % 2 === 0){
            board += " "
        } else {
            board += "#"
        }
    } 
    board += "\n"
} 

console.log(board);


//for anidado, uno para decir "cuando llegas a 8 caracteres pum santo de linea" ese el externo. el interno que escriba los caracteres '' y '#'.