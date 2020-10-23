let MiPersona = {
    nombre: 'Lalo',
    apellido: 'MFGC',
    puesto: 'Programador',
    getnombre: function(){
        return `${this.nombre} ${this.apellido} --- puesto: ${this.puesto}`;
    }

};

console.log(MiPersona.getnombre());

/* 
    De esta manera obtenemos los datos de una variable de un objeto, en este caso solo obteniendo el dato necesario o datos necesarios

    
    // let nombre = MiPersona.nombre;
    // let apellido = MiPersona.apellido;
    // let puesto = MiPersona.puesto;

    // console.log(nombre + " " + apellido + " --- puesto: " + puesto);

*/




/* 
    Pero tambien podemos obtener los datos de esta manera, en este caso declarando dentro de llaves el nombre de la variable a obtener,
    e igualandola al arreglo que deseamos, por ejemplo: 

*/


let { nombre: Primernombre, apellido, puesto} = MiPersona;

console.log(Primernombre + " " + apellido + " --- puesto: " + puesto);

/* 

    En este caso vemos que desde las llaves (destructuracion) declaramos que la variable nombre (de la que obtiene el dato)
    se llamara Primernombre, por lo que al momento de ejecutar el console.log si lo ponemos como nombre, dara error, debido a que
    la variable que obtiene la variable nombre de el objeto MiPersona, le dio el valor a una variable llamada Primernombre

*/