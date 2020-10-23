console.log('Estamos iniciando el programa');


setTimeout( function() {
    
    console.log('Primer Timeout');

}, 5000);


setTimeout(function() {
    
    console.log('Segundo Timeout');

}, 0);

setTimeout(function() {
    
    console.log('Tercer Timeout');

}, 8000);


console.log('Fin del Programa');


/*

    En este caso vemos como funcionan las funciones asincronicas en javascript o en este caso en nodejs
    para la carga de información, debido a que se ejecuto primero las que eran funciones directas como los console.log
    y despues las que eran SetTimeOut que son funciones asincronas que se ejecutan en un tiempo definido por el usuario independiente
    de que sea 0 segundos, se ejecutaran despues de las que no son asincronas

*/