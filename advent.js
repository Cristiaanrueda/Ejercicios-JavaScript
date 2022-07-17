const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'},
    { name: 'Andrew', color: 'rojo' }
  ]
  
  ovejas.forEach(object => {
    if(object.color === 'rojo' && object.name.includes('a') && object.name.includes('N') ){
  console.log(object.name)
  }
  });
  
  //Funcion // falta arreglar el return y que si no existe ninguna coincidencia arroje false.
  const ovejasFiltro = (arrOfObj) => {
  arrOfObj.forEach(object => {
    if(object.color === 'rojo' && object.name.includes('a') && object.name.includes('N') ){
  console.log(object.name)}
  })
  return true
  }

  //CON FILTER-----------------------------------------------------------
  console.log('-------con filter---------');
  const ovejasFilter = (arrOfObj) => {
   return arrOfObj.filter(object => object.color === 'rojo' && object.name.includes('a') && object.name.includes('N'));
  }

  console.log(ovejasFilter(ovejas));



//CH2 -----------------------------------------------------------------
// '_' NO SE CUENTA
//Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. 
console.log('------------------ ch2')

const carta = 'bici coche balón _playstation bici coche peluche'

let preListaRegalos = carta.split(' ')

console.log(preListaRegalos);

//paraCada elemento del array
// Si incluye "_"
//   eliminamelo del array
//devolver array actualizado
//Aca estamos filtrando la lista para que la arroje sin los tachados '_'
preListaRegalos = preListaRegalos.filter((i) => i[0] !== '_').sort();
console.log(preListaRegalos);

//Ahora contamos cuantas veces se repiten los regalos 
//BUG. A partir de coche deja de contar, solo suma 1 y no pasa a peluche. Puede que sea algo relacionado al length de la lista de conteo..

let contador = 1
let repetidorContainer = []

for(let i = 0; i < preListaRegalos.length; i++){
  if(preListaRegalos[i+1] === preListaRegalos[i]){
    contador++
  }else {
    repetidorContainer.push(contador);
    contador = 1;
  }
}

console.log(repetidorContainer);


let listaDefinitiva = []


for(let n = 0; n < repetidorContainer.length; n++){
  listaDefinitiva += (preListaRegalos[n] + ': ' + repetidorContainer[n] + ' ');
} 

console.log('lista def: ' + listaDefinitiva);

var listaObjeto = {}; //hasta aqui es objeto

for(let o = 0; o < repetidorContainer.length; o++){
  listaObjeto [preListaRegalos[o]] = repetidorContainer[o];
} 

console.log(listaObjeto);



// const listaRegalos = () => {

// }