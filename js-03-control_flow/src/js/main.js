/* A && B

    Significa:
        Si A es Truthy evalúa y retorna B.
        Si A es Falsy, retorna/ejecuta A. 

        (Porque al ser un &&, AMBAS deben ser ciertas para que la condición se cumpla, por eso si la primera es falsa, no se molesta en evaluar la segunda y automáticamente te devuelve el false/null/undefined/0/"")

    EJEMPLO:
    
    user && userShow();

    - Si user existe (es truthy), entonces ejecuta userShow().
    - Si user es null o undefined, la expresión se detiene y no intenta ejecutar userShow(), evitando un error.
    
    Esto una alternativa corta a:
    
	    if (user) {
		    userShow();
			}
*/

/*A || B

    Significa:
        Si A es Truthy retorna/ejecuta A.
        Si A es Falsy, evalúa y retorna/ejecuta B. 

        (Porque al ser un ||, solo una necesita ser cierta para que cumpla la condición, por eso si la primera es verdadera, no se molesta en evaluar la segunda y automáticamente te A)

    EJEMPLO:
    let name = userName || "Invitado";

    - Si userName tiene valor (no está vacío, no es null, etc.), úsalo.
    - Si userName es falsy, entonces usa "Invitado".”
    
		    let name;
		if (userName) {
		    name = userName;
		} else {
		    name = "Invitado";
		}
*/