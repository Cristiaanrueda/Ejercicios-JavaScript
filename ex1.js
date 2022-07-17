//2. Pide una nota (número). Muestra la calificación según la nota:
// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresaliente



//pseudo


//DECLARAMOS FN (NOTA) PARA INGRESAR LA MISMA
//SI NOTA ES >= 0 Y <= 3
//IMPRIME "MUY DEFICIENTE"
//SINO SI NOTA ES >=3 Y <=5
//IMPRIME "INSUFICIENTE"
//SINO SI NOTA ES >=5 Y <=6
//IMPRIME "Suficiente"
//SINO SI NOTA ES >=6 Y <=7
//IMPRIME "Bien"
//SINO SI NOTA ES >=7 Y <=9
//IMPRIME "Notable"
//SINO SI NOTA ES >=9 Y <=10
//IMPRIME "Sobresaliente"

//VALIDAMOS QUE SE INGRESE UN RESULTADO Y RETORNE LA FN SI HAY Y SI NO HAY NADA O ES MENOR QUE 0 QUE RETORNE FALSE
//si nota >= 0
//retorna nota
//sino
//retorna falso



//Resolucion
let number = Number


function notasChequeo(nota){
    if (typeof nota === `number`){
    if(nota >= 0 && nota < 3){
        console.log("Muy deficiente");
    } else if(nota >= 3 && nota < 5){
        console.log("Insuficiente");
    } else if(nota >= 5 && nota < 6){
        console.log("Suficiente");
    } else if(nota >= 6 && nota < 7){
        console.log("Bien");
    } else if(nota >= 7 && nota < 9){
        console.log("Notable");
    } else if(nota >= 9 && nota < 10){
        console.log("Sobresaliente");
    }} else{
        console.log('invalido');
    }
}

console.log(notasChequeo(6));







// let expr = 2

// switch(expr) {
//     case (expr >= 0 && expr < 3):
//         console.log("Muy deficiente");
//     case expr >= 3 && expr < 5:
//         console.log("Muy deficiente");
//     case expr >= 5 && expr < 6:
//         console.log("Muy deficiente");
//     case expr >= 6 && expr < 7:
//         console.log("Muy deficiente");
//     case expr >= 7 && expr < 9:
//         console.log("Muy deficiente");
//     case expr >= 9 && expr < 10:
//         console.log("Muy sdf");
// }



// function notasAlumnos(number){
//     switch(number) {
//     case number >= 0 && number < 3:
//         console.log("Muy deficiente");
//     case notasAlumnos >= 3 && notasAlumnos < 5:
//         console.log("Muy deficiente");
//     case notasAlumnos >= 5 && notasAlumnos < 6:
//         console.log("Muy deficiente");
//     case notasAlumnos >= 6 && notasAlumnos < 7:
//         console.log("Muy deficiente");
//     case notasAlumnos >= 7 && notasAlumnos < 9:
//         console.log("Muy deficiente");
//     case notasAlumnos >= 9 && notasAlumnos < 10:
//         console.log("Muy sdf");
// }
// }

// console.log(notasAlumnos(2));







