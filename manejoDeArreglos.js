//MANEJO DE ARREGLOS

//LEER UN ARREGLO

const autos = ['BMW','Audi','Volvo'];

for(let i=0;i<autos.length;i++){

console.log(autos[i]);

}

//MODIFICAR ELEMENTOS DE UN ARREGLO
 autos[2] = 'Mercedes Benz';
 console.log(autos[2]);

 //AGREGAR NUEVOS VALORES A UN ARREGLO
 autos.push('Chevrolet');
 console.log(autos);

 autos[autos.length] = "Cadillac";
 console.log(autos);

autos[5] = 'Porshe';
console.log(autos);
