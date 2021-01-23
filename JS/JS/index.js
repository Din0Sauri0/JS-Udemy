//Instruccion para imprimir por consola.
console.log('--------------------')
console.log('Hola Mundo')
console.log('--------------------') 
//Tipos de datos
// String: cadenas de caracteres, esto puede ser una palabra o solo una letra y se escribe entre ''. Ejemplo: 'Hola mundo' o tambien "Hola mundo"
//Bolean: Toma valores que son true o false (verdadero o falso)
// Null: esto es nu valor nulo o se encuentra basio
// number: cualquier numero. Ejemplo 1232131, esto no va entre comillas
// Undefined: variablo no definida
// Object: objeto. puede tomar cualquier tipo de combinacion de estos datos\

//Variables
//Para definir una variable dentro de JS se puede realizar de las siguientes maneras.

//var: forma antigua de definir una variable (intentar evitarla), lleva la avariable al inicio del programa y puede provocar errores
var miPrimeraVariable = "lala"
//let:
let miSegundaVariable = 'mi primera variable'
console.log(miSegundaVariable);
console.log('--------------------')
//const


//Mutabilidad o Re-escribir variables
miSegundaVariable = "Esto ha cambiado"
console.log(miSegundaVariable)
console.log('--------------------')
//Bolean
let miBoolean = true
let miOtroBoolean = false
console.log(miBoolean);
console.log(miOtroBoolean);
console.log('--------------------')
//Numeros
let miNumero = 0
let miNumero2 = 12
let miNumero3 = -12
console.log(miNumero, miNumero2, miNumero3)
console.log('--------------------')
let undef
console.log(undef) //variable no definida (Undefined)
console.log('--------------------')

let nulo = null
console.log(nulo) //variable con valor nulo
console.log('--------------------')

//Objeto
// Un objeto es una agrupacion de datos, y estos datos hacen sentido entre ellos


//Objeto vacio
const miPrimerObjeto = {} //Esta es la forma de declarar un objeto en JS

//Objeto
//Dentro de los objetos de declaran las propiedads de este, que no son variables
const miObjeto = {
    unNumero: 12,
    unString: 'Esta cadena de caracteres',
    unaCondicion: true,
}

console.log(miObjeto)
console.log(miObjeto.unString); //Asi se obtiene solo una propiedad del objeto
console.log('--------------------')

//Arreglo o array
// Declaracion de un arrglo vacio
const arrVacio = [] //Pueden contener distintos tipos de datos
const arr = [1, 2, 'hola', 'mundo', miObjeto]
console.log(arr)
console.log('--------------------')
//Agregar valores al arreglo
arr.push(5)
console.log(arr);
console.log('--------------------')
console.log(arrVacio)
arrVacio.push(1);
arrVacio.push('hola');
arrVacio.push(3);
arrVacio.push(miOtroBoolean)
console.log(arrVacio)
console.log('--------------------')

//Operaciones matematicas
// Suma
//const suma = 1 + 2
//Resta
const resta = 1 - 2
//Multiplicacion
const multiplicacion = 3 * 2
//Division
const division = 4 / 2
//Modulo
const modulo = 10 % 3
console.log(suma, resta, multiplicacion, division)
console.log(modulo)
console.log('--------------------')

let num = 5
num++ //Incrementa el valor de num en 1, tambien exisite su contraparte que es num-- que decrementa una variable en 1
console.log(num)
console.log('--------------------')
num += 3 //De esta froma se aumenta un numero en 3, tambien existe su contra parte que es num -= que decrementa un 3 el numero o *= que multiplica el numero o /= que divide el numero, el numeo 3 es solo un ejemplo ya que puede tomar cualquier valor 

//operadores de comparacion.
//igual
const resultado = 5 === 6 //El operador de igualdad estricta es === y == es una comparacion no estricta, osea se puede comparar number con string
console.log(resultado)
console.log('--------------------')
//Los de mayor y menos son iguales a cualquier otros lenguajes


//operadores logicos (or, and, not)
//or: ||
//and: &&
//not: !
//
//Control de flujo
// if...else
const edad = 12
if(edad > 5 && edad < 18){
  console.log("El chico puede jugar" )
}else{
  console.log('El chico no puede jugar')
}

//while

//se repite hasta que tome el valor de false
let x = 0
 while(x<=5){
   console.log('x: ',x)
   x++
 }
console.log('se ha terminado el cilo while')

//switch
switch (/*condicion*/ true){
  case 1:{
    console.log('yo soy el caso uno')
    break;
  }
  case 2:{
    console.log('yo soy el caso numero dos')
    break;
  }
  case 3:{
    console.log("Yo soy el caso numero tres")
    break;
  }
  default:
    console.log("Yo soy el caso por defecto")
    break;
}

//FOR
//valor inical, condicion y incremento o decremento
for (let i = 0;i < 10; i++){
  console.log(i) 
}


//Accediendo a los elementos de un arreglo con for
//
const numero  = [1,2,3,4,5]
let largoLista = numero.length
for (let i = 0;i<largoLista; i++){
  console.log(numero[i])
}
console.log('------------------------')
//Funciones
//
function iterar(arg1) {
  const numero = [1,2,3,4,5]
  for(let i = 0 ; i< arg1.length;i++){
    console.log(arg1[i])
  }
}
const nombres = ['pedro', 'javier']

iterar(nombres)
iterar(numero)

function suma(a, b){
  return a+b;
  //Todas la funciones deben llevar un return o si no el resultaado de esta sera indefinido
}

suma(1,2)

const resultadoSuma1 = suma(1,2)
const resultadoSuma2 = suma(2,2)
const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2)
console.log('resultado', resultadoSuma3)

//Callback
function sumar(a,b,cb){
  const r = a+b
  cb(r)
}
function callback(result){
  console.log('resultado', result)
}

sumar(2,3,callback)

//Fat arrow function
const myFatArrowFunction = (a,b) => a + b //sin return
const rr = myFatArrowFunction(1,2)
const otraFAF = (a,b) => { //Con return
  return a+b
}
const otraFAFResult = otraFAF(1,3)
console.log(otraFAFResult)

//funciones anonimas
sumar(2,3, function(r){
  console.log('soy una funcion anonima y mi resultado es: ',r) 
})




































