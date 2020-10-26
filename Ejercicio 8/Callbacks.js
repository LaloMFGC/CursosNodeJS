/*

    Definicion de callback: Una funcion que se ejecuta cuando algo sucede o despues de algo

*/

let trabajo = ( id, callback ) => {

    let Persona = {

        nombre: 'Eduardo Mahonri',
        apellido: 'Fabian Guerrero',
        matricula: id
    }

    callback(Persona);


}


trabajo( 1580662 , ( Usuario ) => {

    console.log(`Los datos de ${Usuario.nombre}`,Usuario);

})