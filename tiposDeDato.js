//Tipo de dato string
var nombre ="Juan";
console.log(nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var object = {
    nombre : "juan",
    apellido : "perez",
    telefono : "3425698"
}
console.log(object);

//Tipo de dato boolean
var bandera = true;
console.log(bandera);

//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//Arreglos (en javaSctipt son objetos)
var autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

var z='';
console.log(z);
console.log(typeof z);
