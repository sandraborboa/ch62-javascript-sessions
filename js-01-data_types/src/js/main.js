console.log("Session JS01 - Data Types");


// TO DO: Declarar 3 variables para un perfil de usuario ficticio
const userName = "Sandra"; // Valor tipo string
let userAge = 27; // Valor tipo number
const userCountryOfBirth = "Mexico"; // Valor tipo string

// --- Template Literals (Backticks console.log ``) ---
// Permiten interpolación ${} y saltos de linea. Más limpios que concatenar con '+'

console.log(`Hello. My name is ${userName}\n I am ${userAge} years old and I was born in ${userCountryOfBirth}`);
// Template literals refleja los saltos de linea.

/* ================================================================
   3. DATOS PRIMITIVOS: NUMBER Y BIGINT 
   ================================================================
   JavaScript tiene un solo tipo para enteros y decimales: 'number'.
   Number: Tipo de dato numérico de 64 bits para representar valores enteros, punto flotante, +Infinity, -Infinity, NaN
*/

const gravityEarth = 9.81; // Aceleración debido a la gravedad en m/s²
console.log( typeof gravityEarth); // 'number'

/*
 Tipos de datos number.

 - números positivos: 100, 1, 0.258
 - números negativos: -1 , -50.35
 - valores que no pueden ser representados numéricamente: NaN
 - número infinitos: +Infinity, -Infinity
*/
console.log( typeof 3.141592 ); // 'number'
console.log( typeof (3*3)  ); // 'number'
console.log( typeof "" ); // 'string'
console.log( typeof " " ); // 'string'
console.log( 3*"pitufo trabajador" ); // NaN
console.log( typeof ( 3 * "pitufo trabajador") ); // number
console.log( typeof (NaN) ); // 'number'
console.log( typeof +Infinity ); // 'number'
console.log( typeof ( 3 + "Viernes temático" ) ); // 'string'
console.log( typeof ( "3Viernes temático" ) ); // 'string'
console.log( 4 / 0 ); // +Infinity
console.log( typeof (4 / 0) ); // number
console.log( "4" * "2"); // 8
console.log( typeof ("4" * "2") ); // 'number'
console.log( typeof (8) ); // 'number'

console.log(4/0);
console.log("4" * "2"); // Aquí hace una conversión implícita, de string a números: 8
console.log("4" + "2"); // Al ser el operando +, y no tener AMBOS operandos numéricos, concatena los números.
console.log(typeof ("4" + "2")); // typeof se basa en el RESULTADO de la expresión: number
console.log(typeof "4" + "2"); // string
console.log( 'string' * "2"); // NaN

console.log(`0.1 + 02 = ${0.1 + 0.2}`); // 0.1 + 02 = 0.30000000000000004

console.log(`Entero seguro máximo ${Number.MAX_SAFE_INTEGER}`); // Entero seguro máximo 9007199254740991
console.log(`Entero seguro máximo ${Number.MAX_SAFE_INTEGER + 1}`);
console.log(`Entero seguro máximo ${Number.MAX_SAFE_INTEGER + 2}`); // Pierde presición
console.log(`Entero seguro máximo ${Number.MAX_SAFE_INTEGER + 3}`);
console.log(`Entero seguro máximo ${Number.MAX_SAFE_INTEGER + 4}`); // Pierde presición
console.log(`Entero seguro máximo ${Number.MAX_SAFE_INTEGER + 5}`);

/*
 Tipos de datos BigInt
 Sirve para representar valores numéricos enteros, de los que el
 tipo number no pueda representar o no es seguro.
 Las operaciones con un bigInt se debe hacer con otro bigInt
*/
const myBigInt = 9007199254740991n; // n nos dice que el dato no es un number, es un big int.
console.log( typeof myBigInt ); // bigint
console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 1n }`); // 9007199254740992
console.log( `Resultado de myBigInt + 2n: ${ myBigInt + 2n }`); // 9007199254740993
console.log( `Resultado de myBigInt + 3n: ${ myBigInt + 3n }`); // 9007199254740994
console.log( `Resultado de myBigInt + 4n: ${ myBigInt + 4n }`); // 9007199254740995
console.log( `Resultado de myBigInt + 5n: ${ myBigInt + 5n }`); // 9007199254740996
console.log( `Resultado de myBigInt + 6n: ${ myBigInt + 6n }`); // 9007199254740997
console.log( typeof(myBigInt + 6n) ); // bigint

/* ================================================================
   4. DATOS PRIMITIVOS: BOOLEAN, NULL, UNDEFINED
   ================================================================
   - Boolean: true / false (Lógica binaria)
   - Undefined: Variable declarada pero sin valor asignado (automático).
   - Null: Ausencia intencional de valor (asignado por el dev).
*/

let currentTask; 
console.log(`Valor de currentTask: ${currentTask}`); // undefined

currentTask = "Iniciar sesión";
console.log(`Valor de currentTask: ${currentTask}`); // Iniciar sesión

currentTask = null;
console.log(`Valor de currentTask: ${currentTask}`); // null


/* ================================================================
   5. CONVERSIÓN DE DATOS (TYPE CASTING) 
   ================================================================
   Transformar un tipo de dato en otro.
*/

// --- 5.1 Conversión Implícita (Coerción) ---
// JS intenta "ayudarte" convirtiendo tipos automáticamente.
console.log("--- Implícita ---");
console.log("5" + 2);  // "52" (Concatena porque hay un string)
console.log("5" - 2);  // 3 (Matemática, convierte string a number)
console.log("5" * "2"); // 10

const myNumber = "10";
console.log( `Multiplicación: ${ myNumber * 2 }` ); // 20
                              //      10  * 2 = 20
console.log( typeof myNumber ); // string

// --- 5.2 Conversión Explícita (Recomendado) ---
// Nosotros controlamos el cambio.
// Opciones:
// Number(): Convierte todo o devuelve NaN si hay letras.
// parseInt(): Busca enteros al inicio.
// parseFloat(): Busca decimales al inicio.

/*
 Number() Vs parseInt() y parseFloat()
  - Number convierte enteros y decimales
  - Number devuelve NaN si la cadena contiene algún caracter no numérico
  - Con parseInt y parseFloat, si la entrada comienza con un valor no numérico devuelve NaN ( -123abc => NaN )
  - parseInt convierte solo la parte entera
  - parseFloat convierte la parte entera y decimales
  - parseInt y parseFloat realiza la conversión hasta encontrar un caracter no numérico ( "123-567")
*/

console.log( parseInt("68.58") ); // 68.58
console.log( parseFloat("68.58") ); // 68 no redondea.
console.log( parseFloat("68.58") ); // 68.58 Convierte la parte entera y la parte decimal

console.log( Number("68.58 dolares") ); // NaN
console.log( parseInt("68.58 dolares") ); // 68
console.log( parseFloat("68.58 dolares") ); // 68.58

console.log( Number("$68.58 dolares") ); // NaN
console.log( parseInt("$68.58 dolares") ); // NaN
console.log( parseFloat("$68.58 dolares") ); // NaN

console.log( Number("68-58") ); // NaN
console.log( parseInt("68-58") ); // 68
console.log( parseFloat("68-58") ); // El valor es 68.00 pero al ser punto 0 es redundante.

console.log( Number( true ) ); // 1
console.log( Number( false ) ); // 0

console.log( Number( [] ) ); // 0
console.log( Number( [30] ) ); // 30
console.log( Number( [30,40] ) ); // NaN

// Conversión a tipo boolean
// En la conversión a boolean los siguientes valores son false:
// ""(empty string), 0, NaN, null, undefined
console.log( Boolean(1) ); // true
console.log( Boolean(10000) ); // true
console.log( Boolean(-1000) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean(NaN) ); // false

console.log( Boolean("") ); // false
console.log( Boolean(" ") ); // true
console.log( Boolean("1") ); // true
console.log( Boolean("0") ); // true

// Conversion explícita a String
console.log(String(123)); // "123"
console.log(String(12.34)); // "12.34"
console.log("Mi número es " + 12.34); // "Mi número es 12.34"
console.log("Mi número es " + String(12.34)); // "Mi número es 12.34"


const gato = null;
const isGato = true;

console.log(gato + " and this is a string");
console.log(isGato + " and this is a string");

const calificaciones = [8, 5, 6, 9];
console.log("Mi calificación es " + calificaciones); // Implicitamente convierte el array a string, imprime todos los numeros separados por comas.

// Resumen:

// Number()
// [] (empty array) -> 0, [30]-> 30, [30,30]->NaN, false-> 0, true-> 1

// String()
// [] -> "", [12,2]->"12,2", function(){}-> "function(){}"
// {} ->"[object,object]", {clave:valor, age:17} ->"[object,object]"

// Para convertir un objeto a string, la forma correcta es usar
// el método JSON.stringyfy( objeto );

// Resumen : https://www.w3schools.com/js/js_type_conversion.asp