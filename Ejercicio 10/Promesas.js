let salarios = [ 
    {
        id: 1580662,
        salario: 2500
    },
    {
        id: 1654863,
        salario: 4600
    },
    {
        id: 1817454,
        salario: 1000
    },
    {
        id: 6153283,
        salario: 1000
    }
];

let empleados =[
    { nombre: "Lalo MFGC",  id: 1580662, puesto: "Desarrollador Web" },
    { nombre: "Juan Perez",   id: 1654863, puesto: "Contador" },
    { nombre: "Alondra Jimenez", id: 1817454,puesto: "Diseñadora Grafica" },
    { nombre: "Diana Beatriz", id: 6153283, puesto: "Cocinera" }
]



let getEmpleado = ( id ) => {

    return new Promise( (resolve, reject) => {

        let empleadodb = empleados.find( data => data.id === id );
        
        if(!empleadodb){
            reject("No se encontro al usuario en la base de datos");
        }else{
            resolve(empleadodb);
        }

    })


}



let getSalario = ( empleado ) => {

    return new Promise( (resolve, reject) => {

        let empleadoDB = salarios.find( data => data.id === empleado.id );
        
        if(!empleadoDB){
            reject("No se encontro al usuario en la base de datos");
        }else{
            
            resolve({
                nombre: empleado.nombre,
                salario: empleadoDB.salario,
                id: empleado.id
            });
        }

    })


}

getEmpleado(1580662).then( empleado => {

    getSalario(empleado).then( usuario => {
        console.log(`El usuario ${ usuario.nombre } 
                    tiene un sueldo de ${usuario.salario}` );
    }).catch( err => {
        console.log(err);
    })


}).catch( err => {
    console.log(err);
})
