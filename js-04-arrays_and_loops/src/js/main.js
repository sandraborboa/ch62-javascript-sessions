console.log("Sesión JS-04: Arrays y Bucles");

/* ================================================================
   ARRAYS (ARREGLOS) 
   ================================================================
   Un Array es una estructura de datos que nos permite almacenar 
   múltiples valores en una sola variable.
   
   Analogía: Una cajonera donde cada cajón tiene un número (índice)
   para identificar qué hay dentro.
*/
const myArray = [true, 42, "Hola", null, { nombre: "Juan" }, [1, 2, 3 ]];

// --- 1. Definición ---
// Sintaxis moderna: Usamos corchetes [] (Array Literal)
// Nota: Usamos 'const' aunque el contenido cambie. Lo que es constante
// es la referencia en memoria, no los datos internos.

const frutas = []; // empty array
const fruits = new Array(); // array using constructor (less common)

const numeros = [ 5 ]; // array with one element
const numbers = new Array(5); // array with 5 empty slots [ <5 empty items> ]

// --- 2. Acceso a Elementos ---
// Los índices comienzan en 0 (Zero-based indexing).
// [0] -> Primer elemento
// [length - 1] -> Último elemento

const techStack = ["HTML", "CSS", "JavaScript"];

console.log(`Accediendo al primer elemento: ${techStack[0]}`); // HTML

// Accediendo al segundo elemento
console.log(`Accediendo al segundo elemento: ${techStack[1]}`);

// Accediendo al último elemento 
console.log(`Accediendo al segundo elemento: ${techStack[techStack.length-1]}`);

techStack[1] = "Sass"; // Cambiando "CSS" por "Sass"

/* ================================================================
   BLOQUE 2: MÉTODOS DE ARRAYS (Add/Remove) 
   ================================================================
   JavaScript nos da métodos para manipular la lista como una pila o cola.
*/
const shoppingList = ["Leche", "Huevos"];

// 1. push(): Agrega al FINAL (El más usado)
// Retorna la nueva longitud del array.
shoppingList.push("Pan"); 
console.log("Push:", shoppingList); // ["Leche", "Huevos", "Pan"]

// 2. unshift(): Agrega al INICIO (Mueve todos los índices, es más lento)
shoppingList.unshift("Café");
console.log("Unshift:", shoppingList); // ["Café", "Leche", "Huevos", "Pan"]


// --- Eliminar Elementos ---

// 3. pop(): Elimina el ÚLTIMO y lo devuelve
const removedItem = shoppingList.pop();
console.log(`Eliminado con pop: ${removedItem}`); // "Pan"
console.log("Lista actual:", shoppingList);

// 4. shift(): Elimina el PRIMERO y lo devuelve
const firstRemoved = shoppingList.shift();
console.log(`Eliminado con shift: ${firstRemoved}`); // "Café"

// --- Método splice() ---
// Permite eliminar o agregar elementos en cualquier posición
const colors = ["Rojo", "Verde", "Azul", "Amarillo", "Morado", "Naranja"];
console.log("Colores iniciales toString:", colors.toString()); // toString convierte a texto para que pierda la referencia al objeto
console.log("Colores iniciales join:", colors.join(" - ")); // Permite añadir un argumento de separador

// Agregar 2 elementos en el índice 2, sin eliminar otros elementos. 
colors.splice(2, 0, "Rosa", "Cian"); // 
console.log("Después de agregar con splice:", colors.toString());
console.log("Después de agregar con splice:", colors.join(" - "));

// TODO EJERCICIO RÁPIDO:
// 1. Crea un array 'guestList' con 2 nombres.
const guestList = ["Jenni", "Valentín"]

// 2. Agrega un invitado al final.
const addGuestAtEnd = (newGuest) => {
   guestList.push(newGuest);
}
// 3. Agrega un invitado al principio
const addGuestAtBeginning = (newGuest) => {
   guestList.unshift(newGuest);
}
// 4. Elimina al segundo invitado (índice 1) y agrega a otro en su lugar.
const replaceSecondGuest = (newGuest) => {
   guestList.splice(1, 1, newGuest);
}
// 4. Muestra la lista final.
addGuestAtEnd("Chalino");
console.log("Después de agregar un invitado al final:", guestList.join(" - "));
addGuestAtBeginning("Joan");
console.log("Después de agregar un invitado al inicio:", guestList.join(" - "));
replaceSecondGuest("Julión");
console.log("Después de modificar lista de invitados:", guestList.join(" - "));

/*================================================================
   BLOQUE 3: ESTRUCTURAS DE DATOS - PILAS Y COLAS 
   ================================================================
   Las pilas y colas son estructuras de datos que organizan cómo se 
   almacenan y acceden a los elementos.
   1. LIFO (Last-In, First-Out) - Pila (Stack)
   Concepto: El último elemento en entrar es el primero en salir.
*/
// Navegamos a sitios (push)
const historyStack = [];

historyStack.push("google.com");
historyStack.push("youtube.com");
historyStack.push("github.com");
console.log("Historial actual: " + historyStack.join(", ")); // Como usa el operador +, es igual a usar el método toString

// Presiono el botón atrás
historyStack.pop();

console.log("Historial tras presionar atrás: " + historyStack.join(", "));
console.log(`Regresando a: ${historyStack.join(", ")}`);

/*   2. FIFO (First-In, First-Out) - Cola (Queue)
   Concepto: El primer elemento en entrar es el primero en salir.
*/
const printQueue = [];
printQueue.push("thesis.pdf");
printQueue.push("meme.png");
printQueue.push("invoice.docx");
console.log("Cola de impresión:", printQueue); // ["thesis.pdf", "meme.png", "invoice.docx"]
// La impresora termina el primer trabajo (shift)
const printingNow = printQueue.shift();
console.log(`Imprimiendo: ${printingNow}`); // thesis.pdf (El primero que llegó)


// Crea un array llamado 'taskList' para gestionar tareas.
   const taskList = [];
// 1. Agrega 3 tareas usando 'push'.
   taskList.push("Barrer", "Trapear", "Sacudir");
// 2. Muestra la lista completa de tareas.
   console.log("Lista de tareas inicial: " + taskList.join(", "));
// 3. Las tareas normales se atienden en orden de llegada (FIFO)
// 3.1 Retira (elimina) la primera tarea de la lista y muéstrala.
   console.log("Tarea completada: " + taskList.shift());
// 4. No dan un tarea URGENTE que debe ser atendido inmediatamente. Por lo que debes poner al inicio de la lista.
   taskList.unshift("Limpiar arenero");
// 5. Muestra la lista actualizada.
   console.log("Tarea URGENTE añadida, lista de tareas actualizada: " + taskList.join(", "));
// 6. Atiende (elimina) la primera tarea de la lista y muéstrala.
   console.log("Tarea URGENTE completada: " + taskList.shift());
   console.log("Lista de tareas final: " + taskList.join(", "));

/* ================================================================
   BLOQUE 3: BUCLES (LOOPS) 
   ================================================================
   Estructuras que repiten un bloque de código mientras una condición sea verdadera.
*/
// --- 1. Ciclo FOR (Controlado) ---
// Úsalo cuando sabes cuántas veces quieres repetir algo (ej. recorrer un array).
// Sintaxis: for (expresión_inicial; condición; expresión_final) { ... }
// Imprimier los números del 1 al 5
for(let i = 1; i <=5 ; i++ ) { //primero se inicializa i = 1, luego se comprube la condición, luego se ejecuta la inea de código y al final se hace i++.
    console.log(`Número ${i}`); // la iteración continua iniciando con la condición. 
}

// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.
for(let i = 1; i <=10 ; i++ ) {
    if(i === 6) {
        console.log("¡Se alcanzó el número 6");
        break; 
    }
      console.log(`(con break) Número ${i}`);
}

// =============================================

let iteracion = 0;

for( ; ; ){ // entra al bucle porque no hay condición
   console.log(`Núm de interación: ${iteracion}`);
   iteracion++; // esto evita el loop infinito
   if (iteracion === 5) {
      break;
   }
}

// =====================================================
let myIteration; 
for (myIteration = 0; myIteration <= 5; myIteration++) {
    console.log("For loop", myIteration ); // 0 , 1, 2
     if( myIteration === 2) break;  
}
console.log("Final", myIteration); //  2

// =====================================================
 let jiteration;
for ( jiteration = 0; jiteration < 3; jiteration++ ) { //como no hay un break, sí se alcanza a aumentar la iteración a 3
   console.log("For loop", jiteration ); //
}
console.log("Final", jiteration); // 3

let k;
for (k=0; k<5; k++);{ // el ; finaliza el ciclo. solo se itera hasta aumentar a 5.
   console.log("Valor de ", k); // 5
}
console.log("Final", k); // 5


// --- 2. Ciclo WHILE (Basado en condición) ---
// Úsalo cuando NO sabes cuántas veces se repetirá, depende de algo externo.
// Cuidado: Si la condición nunca es falsa, creas un bucle infinito (Infinite Loop).

/* while(  confirm("¿Quieres tu número de la suerte")  ){
    const numeroSuerte = Math.random(); // 0....1.0(sin incluir 1.0)
    console.log("Tu número de la suerte es: " + numeroSuerte);
}
console.log("Gracias por participar"); */

i = 1;
while(i <=5 ){
   console.log("Numero " + i);
   i++
}

const countries = ["México", "USA", "Canadá", "Japón"];

for (let index = 0; index < countries.length; index++) { // inicia en 0, porque la longitud del array es 4.
   const element = countries[index];
   console.log(`(for) País en índice ${index}: ${element}`);
}

for (const country of countries){ // for of, no incluye el índice. 
   console.log(`(for of) País: ${country}`); // con cada ciclo se redeclara const country, para protegerlo. 
}

// TODO: RETO FINAL (Simulación de Cajero)
// Tienes un array de movimientos: [100.00, -50.00, 200.00, -100.00]
// 1. Usa un ciclo FOR, o WHILE o FOR-OF para recorrer los movimientos.
// 2. Suma los valores a una variable 'totalBalance'.
// 3. Imprime el balance final.

const transactions = [100.00, -50.00, 200.00, -100.00, 500.00];
let totalBalance = 0;

// Usando for of
for (const transaction of transactions){ 
   totalBalance += transaction;
}

// Usando for
for (let index = 0; index < transactions.length; index++) {
   totalBalance += transactions[index];
}
console.log(`Balance final: $${totalBalance}`);

// Usando for each
transactions.forEach((transaction/*index, array*/) => totalBalance += transaction);