//for (let i = 0; i <= 100000000; i++){} //cuando esta función se ejecuta las demás líneas debajo de esta deben esperar a que se termine este proceso
//para que la función se ejecute, pero de forma asíncrona (sin hacer esperar a las demás lineas se usan timeOuts)
setTimeout(function(){
    console.log('respuesta');
}, 3000);//espera 3000 milisegundos
console.log('Hola mundo');