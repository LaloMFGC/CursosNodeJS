// function sumar (a , b){

//     return a+b;

// }


// console.log(sumar(10,20));

var nombre = "Eduardo";
var apellido = "Fabian";
var puesto = "Desarrollador Web"


let MiPersona = {
    nombre: 'Lalo',
    apellido: 'MFGC',
    puesto: 'Programador',
    getnombre: () => {
        return `${nombre} ${apellido} --- puesto: ${puesto}`;
    }

};

console.log(MiPersona.getnombre());


/* 
    En este caso debido a que en una funcion de flecha lo que obtiene el this es lo que esta fuera de la funcion de flecha,
    no obtiene el dato de this.nombre (esta vacio), por lo que aqui no se usa el this,
    en este caso para obtener los datos de un arreglo tendria que quitar la funcion de flecha y tomarla como una function normal

    getnombre: (){
        return `${nombre} ${apellido} --- puesto: ${puesto}`;
    }


*/