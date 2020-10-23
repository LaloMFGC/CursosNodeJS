let nombre = 'Lalo';

let apellido = 'MFGC';


console.log("Este es utilizando suma de variables con un string de espacio: ", nombre + " " + apellido);

console.log("Este es usando templates literales: ", `${ nombre } ${ apellido}`);

console.log((nombre + " " + apellido) === (`${ nombre } ${ apellido}`) );

/*

    En este caso tenemos que los templates literales utilizan $ {} para mandarle el valor de la variable por automatico
    parecido a lo que hacemos al usar un tipo de metodo parecido al toString



*/ 