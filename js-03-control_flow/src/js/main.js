/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

/*
let isActive = true;

if (isActive === true) console.log("El usuario está activo");
if (isActive == true) console.log("El usuario está activo");

if (isActive === true) {
    console.log("El usuario está activo");
} else {
    console.log("El usuario no está activo");
}

if (isActive) {
    console.log("El usuario está activo"); 
}
*/
/*
// Bloque de código: 
// Conjunto de sentencias agrupadas entre llaves { ... }
{
    let firtsName = "Juan";
    let lastName = "Pérez";
    var alias = "Juampi";
    let age = 28;

    console.log(firtsName,lastName,alias); //Juan Pérez Juampi
    { // Bloque anidado
        let firtsName = "Sergio";
        let lastName = "Torres";
        var alias = "Serch";
        var alias = "Serchmo";
        console.log(firtsName,lastName,alias, age); //Sergio Torres Serch 28 
    }
*/
/*
    console.log(firtsName,lastName,alias, age); // Juan Pérez Serchmo 28
}
// console.log(firtsName,lastName,alias, age); firtsName is not defined
console.log(alias); // Serchmo
*/
/*
 Realizar una función (Arrow function) que reciba un número como valor de temperatura.
 Si la temperatura es mayor a 25 grados, retornar "Hace calor".
 En caso contrario, retornar "Hace frío".

 Imprimir el valor del retorno por consola.
*/


/*
 Realizar una función que reciba el valor booleano si una persona está feliz o no
 Si la persona está feliz, mostrar en la interfaz de usuario la imagen "public/images/dino.jpg"
 En caso contrario mostrar la imagen "public/images/dino-emo.png"

// if-else-if
const checkTemperature = (temperature) => {
    let message = "";
  if (temperature > 30) {
    message = "Hace calor";
  } else if (temperature >= 15 && temperature <= 30) {
    message ="Temperatura agradable";
  } else if (temperature < 15 && temperature >= 0) {
    message ="Hace frío";
  } else {
    message ="Hace mucho frío";
  }
  return message;
};
*/

//Operador AND (&&) y OR (||)
/*
Operador de cortocircuito.

 OP1 && OP2 Si OP1 es verdadero, se retorna la expresión de OP2.
 OP1 || OP2 Si OP1 es verdadero, se retorna la expresión de OP1.
 
 Se consideran falsos: "", 0, null, undefined, NaN
*/
/*
console.log( true && false ); // false
console.log( true && "Usando corto circuito "); // "Usando corto circuito "
console.log( "false" && "Mi mente sigue de vacaciones"); // "Mi mente sigue de vacaciones"
console.log( 0 && "Chau, chau"); // 0
console.log( "" && "Chau, chau"); // ""
console.log( false && "Chau, chau"); // false

console.log( true || false ); // true
console.log( true || "Usando corto circuito "); // true
console.log( "false" || "Mi mente sigue de vacaciones"); // "false"
console.log( 0 || "Chau, chau"); // "Chau, chau"
console.log( "" || "Chau, chau"); // "Chau, chau"
console.log( false || "Chau, chau"); // "Chau, chau"
console.log( false || undefined ); // undefined

console.log( "Activado" && undefined ); // undefined

const isLoggedIn = true;
if(isLoggedIn) {
    console.log("El usuario está logueado");
}  else {
    console.log("El usuario no está logueado");    
}

console.log( isLoggedIn && "El usuario está logueado" || "El usuario no está logueado" ); 
*/


/*
     Realizar una función que reciba un código(weatherCode) de temperatura.
     De acuerdo al código recibo, retornar un mensaje:
     Code	Description
    0	        Clear sky
    1, 2, 3	    Mainly clear, partly cloudy, and overcast
    45, 48	    Fog and depositing rime fog
*/

/*
const evaluateWeather = (code) => {
    let result = "";
    switch(code) {
        case 0:
            result = "Clear sky";
            break;
        case 1:
        case 2:
        case 3:
            result = "Mainly clear, partly cloudy, and overcast";
            break;
        case 45:
        case 48:
            result = "Fog and depositing rime fog";
            break;
        default:
            result = "Unknown code";
    }
    return result;
}
console.log(evaluateWeather(45));
*/

/*
const evaluateWeather = (code) => {
    switch(code) {
        case 0:
            return "Clear sky";
        case 1:
        case 2:
        case 3:
            return "Mainly clear, partly cloudy, and overcast";
        case 45:
        case 48:
            return "Fog and depositing rime fog";
        default:
            return "Unknown code";
    }
}
console.log(evaluateWeather(483));
*/
/*
const getWeather=(codigo)=>{
     let message;
    if(codigo===0){
        message="Clear Sky";
    }else if( codigo===1 ||codigo===2 ||codigo===3  ){
        message="Mainly clear, partly cloudy, and overcast";
    }else if(codigo===45 || codigo===48){
        message="Fog and depositing rime fog";
    }else{
        message="no definido";
    }
    return message;
   
}

console.log(getWeather(88));
*/

//--------------- Condicional Switch-case --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/


/* const getAccessLevel = ( role ) => { // aqui role es un parametro
    let accessLevel;
    switch ( role ) {
        case "suer_admin":
            // accessLevel = "Acceso completo al sistema"; // Se viola el principio de responsabilidad unica
        case "admin":
            accessLevel = "Acceso completo al sistema";
            break;
        case "editor":
            accessLevel = "Acceso para editar contenido";
            break;  
        case "viewer":
            accessLevel = "Acceso solo para ver contenido";
            break;
        default:
            accessLevel = "Acceso denegado";
            break; // No necesita el break porque está en la última linea del bloque de código.
    }
    return accessLevel;
};
console.log( getAccessLevel("suer_admin") ); // Acceso para editar contenido, aqui editor es un argumento.

/**
 * Switch case con el patrón "Early Return"
 * 
 */
/* const getAccessLevelWithEarlyReturn = ( role ) => { // aqui role es un parametro
    switch ( role ) {
        case "suer_admin":
        case "admin":
            return "Acceso completo al sistema"; // No se necesita el break por cada return finaliza el proceso.
        case "editor":
            return "Acceso para editar contenido";
        case "viewer":
            return "Acceso solo para ver contenido";
        default:
            return "Acceso denegado";
    }
};
*/

const esPar = (num) => {
  return (num % 2 == 0) ? "Par" : "Impar";
}

console.log(esPar(2));
console.log(esPar(3));
console.log(esPar(15));
console.log(esPar(16));