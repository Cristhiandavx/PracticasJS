/*
function sumar(x, y){
    let suma = x + y;
    return suma;
}
console.log(sumar(1, 2));
*/
//se puede llamar a una función mediante la denotación de la misma dentro de los parametros enviados a otra función
/*
function sumar(x, y, funcParamm){
    let suma = x + y;
    funcParamm('vengo desde sumar! y traje:')//parametros enviados en el parametro funcParamm
    return suma;
}
function mensaje(texto){
    console.log(texto);
}
console.log(sumar(1, 2, mensaje));
*/
//se puede usar funciones anonimas directamente en el parametro enviado, de esta forma:
/*
function sumar(x, y, funcParamm){
    let suma = x + y;
    funcParamm('vengo desde sumar (pero fui antes a una función anonima)! y traje:')//parametros enviados en el parametro funcParamm
    return suma;
}
console.log(sumar(1, 2, function(texto){console.log(texto);}));
*/
//tambien se puede usar la nueva sintaxis de "Función Fleca" asi:
function sumar(x, y, funcParamm){
    let suma = x + y;
    funcParamm('vengo desde sumar (pero fui antes a una función flecha)! y traje:')//parametros enviados en el parametro funcParamm
    return suma;
}
//sintaxis multilinea y para varios parametros (se debe usar parentesis y llaves)
console.log(sumar(1, 2, (texto) => {
    console.log(texto);
}));
//sintaxis de una sola linea y para un solo parametro (se puede obviar los parentesis y llaves)
console.log(sumar(1, 2, texto => console.log(texto)));
/*
//extra
Para el "return" en las funciones fleca se usa la siguiente forma (por ejemplo en el caso anterior se necesita retornar "texto")
console.log(sumar(1, 2, texto => texto)); //no se usa la palabra "return" solo se escribe el valor retornado
*/