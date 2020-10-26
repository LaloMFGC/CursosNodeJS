let salarios = [ 
    {
        id: 1,
        salario: 2500
    },
    {
        id: 3,
        salario: 4600
    },
    {
        id: 2,
        salario: 1000
    }
]


let getSalario = (empleado, callback) => {

    let user = salarios.find( usuario => {
        return usuario.id === empleado //No olvidar el return debido a que es una funcion ya dada por javascript
    });

    


    if(!user){
        return callback("No existe el usuario");
    }else{
        return callback(null, user);
    }


}


getSalario( 2, (err, empleado) => {

    if(err){
        return console.log(err);
    }else{
        console.log(empleado);
    }

})